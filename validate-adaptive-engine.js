#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const failures = [];
let checks = 0;
const assert = (condition, label) => {
  checks += 1;
  if (!condition) failures.push(label);
};

const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'adaptive-engine.js'), 'utf8'), sandbox, { filename:'adaptive-engine.js' });
const engine = sandbox.window.VERSA_ADAPTIVE_ENGINE;
assert(Boolean(engine), 'Motor adaptativo carregado');
assert(engine.version === '2.0.0', 'Versão do Mastery Engine registrada');
assert(engine.statuses['not-started'].label === 'Desconhecido', 'Estado inicial usa linguagem de maestria');
assert(engine.statuses.learning.label === 'Familiar', 'Estado familiar disponível');
assert(engine.statuses.consolidating.label === 'Recuperável', 'Estado recuperável disponível');
assert(engine.statuses.mastered.label === 'Consolidado', 'Estado consolidado disponível');
assert(Boolean(engine.confidence.high && engine.errorTypes['erro-convicto']), 'Metacognição e erro convicto disponíveis');

const course = {
  id:'teste',
  units:[{ id:'u1', title:'Módulo 1', discipline:'Disciplina' }],
  lessons:[
    { id:'l1', unitId:'u1', order:1, title:'Fundamentos', prerequisites:[] },
    { id:'l2', unitId:'u1', order:2, title:'Aplicação', prerequisites:['l1'] },
  ],
  flashcards:[{ id:'f1', lessonId:'l1' }, { id:'f2', lessonId:'l2' }],
};
const baseProgress = {
  completed:[], scores:{}, errors:[], reviews:[],
  flashcards:{ cards:{}, sessions:[] },
  adaptive:engine.normalizeStore(null),
};

assert(engine.lessonMastery(course, baseProgress, course.lessons[0]).status === 'not-started', 'Lição sem evidência permanece não estudada');
baseProgress.scores.l1 = 45;
assert(engine.lessonMastery(course, baseProgress, course.lessons[0]).status === 'learning', 'Nota baixa gera estado em aprendizagem');

baseProgress.scores.l1 = 90;
baseProgress.adaptive = engine.recordAttempt(baseProgress.adaptive, { kind:'lesson', questionId:'q1', lessonId:'l1', correct:true, selected:0, date:'2026-08-01', confidence:'high', responseMs:45000 });
baseProgress.adaptive = engine.recordAttempt(baseProgress.adaptive, { kind:'review', questionId:'q2', lessonId:'l1', correct:true, selected:1, date:'2026-08-04', confidence:'medium', responseMs:50000 });
assert(engine.lessonMastery(course, baseProgress, course.lessons[0]).status === 'mastered', 'Domínio exige bom resultado e confirmação espaçada');

baseProgress.errors.push({ questionId:'q3', lessonId:'l1', status:'active' });
assert(engine.lessonMastery(course, baseProgress, course.lessons[0]).status !== 'mastered', 'Erro ativo impede domínio prematuro');
baseProgress.errors = [];

let adaptive = engine.scheduleLesson(baseProgress.adaptive, 'l1', 40, '2026-08-09');
assert(adaptive.lessonReviews.l1.intervalDays === 1, 'Resultado baixo agenda revisão em um dia');
adaptive = engine.scheduleLesson(adaptive, 'l1', 75, '2026-08-10');
assert(adaptive.lessonReviews.l1.intervalDays === 2, 'Resultado parcial amplia revisão para dois dias');
adaptive = engine.scheduleLesson(adaptive, 'l1', 95, '2026-08-12');
assert(adaptive.lessonReviews.l1.intervalDays >= 7, 'Resultado alto amplia intervalo adaptativamente');

const planProgress = { ...baseProgress, adaptive, completed:['l1'] };
const plan = engine.buildDailyPlan(course, planProgress, 45, '2026-08-20');
assert(plan.totalMinutes === 45, 'Plano respeita meta diária');
assert(plan.blocks.reduce((sum, block) => sum + block.minutes, 0) === 45, 'Blocos somam exatamente a meta diária');
assert(plan.blocks.some((block) => block.type === 'review'), 'Plano inclui revisão vencida');
assert(plan.blocks.some((block) => block.type === 'new' && block.lessonId === 'l2'), 'Plano inclui próximo conteúdo elegível');
assert(plan.blocks.some((block) => block.type === 'flashcards'), 'Plano inclui recuperação ativa');

const summary = engine.diagnosticSummary(course, [
  { questionId:'q1', lessonId:'l1', correct:false },
  { questionId:'q2', lessonId:'l2', correct:true },
]);
assert(summary.disciplines[0].score === 50, 'Diagnóstico agrega resultado por disciplina');
assert(summary.weakLessonIds.includes('l1'), 'Diagnóstico identifica lição fraca');

const appSandbox = {
  window:{},
  document:{ getElementById:()=>({}), querySelector:()=>null, querySelectorAll:()=>[], activeElement:null },
  console,
};
for (const filename of ['cfaq-data.js','dataprev-history-data.js','transpetro-cyber-data.js','flashcards-priority-data.js','flashcards-data.js','flashcards-engine.js','adaptive-engine.js']) {
  vm.runInNewContext(fs.readFileSync(path.join(root, filename), 'utf8'), appSandbox, { filename });
}
let main = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
main = main.replace(/render\(\);\s*\}\)\(\);?\s*$/, 'window.__NORMALIZE=normalizeProgress;window.__COURSES=COURSES;})()');
vm.runInNewContext(main, appSandbox, { filename:'app.js', timeout:15000 });
const migrated = appSandbox.window.__NORMALIZE({ completed:['legacy'], scores:{ legacy:70 }, errors:[{ questionId:'q', lessonId:'legacy' }] });
assert(migrated.completed.includes('legacy'), 'Migração preserva lições concluídas');
assert(migrated.scores.legacy === 70, 'Migração preserva notas antigas');
assert(Boolean(migrated.adaptive.lessonReviews), 'Migração adiciona armazenamento adaptativo');
assert(migrated.errors[0].status === 'active', 'Migração converte erro antigo em ativo');

for (const [courseId, currentCourse] of Object.entries(appSandbox.window.__COURSES)) {
  const progress = appSandbox.window.__NORMALIZE(null);
  const currentPlan = engine.buildDailyPlan(currentCourse, progress, 45, '2026-08-09');
  assert(currentPlan.blocks.length >= 2, `Plano inicial criado para ${courseId}`);
  assert(currentPlan.priorityLessonId, `Prioridade inicial definida para ${courseId}`);
}

const metacog = { ...baseProgress, errors:[{ questionId:'qx', lessonId:'l1', status:'active', category:'erro-convicto' }] };
const eSummary = engine.errorSummary(metacog);
assert(eSummary.conviction === 1, 'Erro convicto recebe contagem própria');
const paceProgress = { ...baseProgress, adaptive:engine.normalizeStore(null) };
paceProgress.adaptive = engine.recordAttempt(paceProgress.adaptive, { kind:'lesson', questionId:'p1', lessonId:'l1', correct:true, selected:0, confidence:'high', responseMs:60000, date:'2026-08-01' });
const pace = engine.paceSummary(course, paceProgress);
assert(pace.avgSeconds === 60, 'Versa Pace calcula tempo médio de resposta');
assert(pace.projectedSeconds === 0, 'Projeção depende do quantitativo de prova quando não informado');
assert(engine.calibrationScore(paceProgress.adaptive.attempts) === 100, 'Calibração recompensa acerto com alta confiança');
const wrongHigh = engine.calibrationScore([engine.normalizeStore({attempts:[{kind:'lesson',questionId:'w',lessonId:'l1',correct:false,selected:0,confidence:'high',responseMs:30000,date:'2026-08-01'}]}).attempts[0]]);
assert(wrongHigh < 20, 'Erro com alta confiança é penalizado na calibração');

const payload = { status:failures.length ? 'failed' : 'passed', checks, failures, summary:{ engine:engine.version, courses:5, migration:'preserved', dailyPlan:'passed', mastery:'passed', metacognition:'passed', pace:'passed', diagnostic:'passed' } };
console.log(JSON.stringify(payload, null, 2));
if (failures.length) process.exit(1);
