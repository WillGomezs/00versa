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

const sandbox = {
  window: {},
  document: {
    getElementById: () => ({}),
    querySelector: () => null,
    querySelectorAll: () => [],
    activeElement: null,
  },
  console,
};

for (const filename of ['cfaq-data.js', 'flashcards-priority-data.js', 'flashcards-data.js', 'flashcards-engine.js']) {
  vm.runInNewContext(fs.readFileSync(path.join(root, filename), 'utf8'), sandbox, { filename });
}

let main = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
main = main.replace(/render\(\);\s*\}\)\(\);?\s*$/, 'window.__VERSA_COURSES=COURSES;window.__VERSA_NORMALIZE_PROGRESS=normalizeProgress;})()');
vm.runInNewContext(main, sandbox, { filename: 'app.js', timeout: 15000 });

const courses = sandbox.window.__VERSA_COURSES;
const engine = sandbox.window.VERSA_FLASHCARDS_ENGINE;
const expected = { dataprev:153, ason:100, ibge:118, cfaq:50 };
const baseExpected = { dataprev:133, ason:80, ibge:98, cfaq:30 };
assert(Boolean(courses), 'Cursos expostos para validação');
assert(Boolean(engine), 'Motor de repetição carregado');

const allCards = [];
for (const [courseId, expectedCards] of Object.entries(expected)) {
  const course = courses[courseId];
  assert(Boolean(course), `Curso ${courseId} existe`);
  assert(course.flashcards.length === expectedCards, `${courseId} possui ${expectedCards} flashcards`);
  assert(course.flashcards.filter((card) => card.source === 'microlição').length === baseExpected[courseId], `${courseId} preserva um cartão por microlição`);
  assert(course.flashcards.filter((card) => card.priority === 'high').length === 20, `${courseId} possui 20 cartões de alta incidência`);
  const lessons = new Set(course.lessons.map((lesson) => lesson.id));
  const units = new Set(course.units.map((unit) => unit.id));
  for (const card of course.flashcards) {
    allCards.push(card);
    assert(card.courseId === courseId, `Curso correto em ${card.id}`);
    assert(lessons.has(card.lessonId), `Lição válida em ${card.id}`);
    assert(units.has(card.unitId), `Módulo válido em ${card.id}`);
    assert(Boolean(card.front), `Frente preenchida em ${card.id}`);
    assert(Boolean(card.back), `Resposta preenchida em ${card.id}`);
    if (card.priority === 'high') {
      assert(Boolean(card.incidence), `Justificativa de incidência preenchida em ${card.id}`);
      assert(card.difficulty === 'Estratégico', `Dificuldade estratégica em ${card.id}`);
    }
  }

  const priority = course.flashcards.filter((card) => card.priority === 'high');
  const countDiscipline = (discipline) => priority.filter((card) => card.discipline === discipline).length;
  if (courseId === 'dataprev') {
    assert(priority.filter((card) => card.lessonId.startsWith('red-')).length === 4, 'DATAPREV estratégico preserva 4 cartões de redes');
    assert(priority.filter((card) => card.lessonId.startsWith('dgv-')).length === 2, 'DATAPREV estratégico preserva 2 cartões de governança');
    assert(priority.filter((card) => card.lessonId.startsWith('dcl-')).length === 6, 'DATAPREV estratégico preserva 6 cartões de nuvem');
    assert(priority.filter((card) => !/^(red|dgv|dcl)-/.test(card.lessonId)).length === 8, 'DATAPREV estratégico preserva 8 cartões de segurança e privacidade');
  }
  if (courseId === 'ason') {
    for (const discipline of ['Português', 'Inglês', 'Matemática', 'Física']) {
      assert(countDiscipline(discipline) === 5, `ASON estratégico possui 5 cartões de ${discipline}`);
    }
  }
  if (courseId === 'ibge') {
    assert(countDiscipline('Português') === 5, 'IBGE estratégico possui 5 cartões de Português');
    assert(countDiscipline('Raciocínio Lógico Quantitativo') === 3, 'IBGE estratégico possui 3 cartões de Raciocínio Lógico');
    assert(countDiscipline('Conhecimentos Específicos') === 12, 'IBGE estratégico possui 12 cartões de Conhecimentos Específicos');
  }
  if (courseId === 'cfaq') {
    assert(countDiscipline('Português') === 10, 'CFAQ estratégico possui 10 cartões de Português');
    assert(countDiscipline('Matemática') === 10, 'CFAQ estratégico possui 10 cartões de Matemática');
  }
}

assert(allCards.length === 421, 'Catálogo total possui 421 flashcards');
assert(new Set(allCards.map((card) => card.id)).size === allCards.length, 'IDs de flashcards são únicos');
assert(Object.keys(sandbox.window.VERSA_PRIORITY_FLASHCARDS.basisByCourse).length === 4, 'Metodologia disponível nos quatro cursos');
for (const [courseId, basis] of Object.entries(sandbox.window.VERSA_PRIORITY_FLASHCARDS.basisByCourse)) {
  assert(Boolean(basis.methodology), `Metodologia preenchida em ${courseId}`);
  assert(Array.isArray(basis.sources) && basis.sources.length > 0, `Fontes preenchidas em ${courseId}`);
  assert(basis.sources.every((source) => /^https:\/\//.test(source.url)), `Links HTTPS válidos em ${courseId}`);
}

const baseTime = Date.parse('2026-08-08T12:00:00.000Z');
const again = engine.schedule(null, 'again', baseTime);
const hard = engine.schedule(null, 'hard', baseTime);
const good = engine.schedule(null, 'good', baseTime);
const easy = engine.schedule(null, 'easy', baseTime);
assert(Date.parse(again.due) - baseTime === 10 * 60 * 1000, 'Errei agenda em 10 minutos');
assert(hard.intervalDays === 1, 'Difícil inicia com intervalo de um dia');
assert(good.intervalDays === 3, 'Bom inicia com intervalo de três dias');
assert(easy.intervalDays === 7, 'Fácil inicia com intervalo de sete dias');
assert(engine.isDue({ due:'2026-08-08T11:59:00.000Z' }, baseTime), 'Cartão vencido é reconhecido');
assert(!engine.isDue({ due:'2026-08-08T12:01:00.000Z' }, baseTime), 'Cartão futuro não é considerado vencido');

const legacy = sandbox.window.__VERSA_NORMALIZE_PROGRESS({ completed:['old-lesson'], xp:77, errors:[] });
assert(legacy.completed[0] === 'old-lesson', 'Migração preserva lições antigas');
assert(legacy.xp === 77, 'Migração preserva XP antigo');
assert(Boolean(legacy.flashcards.cards), 'Migração adiciona armazenamento de flashcards');
assert(Array.isArray(legacy.simulations), 'Migração completa campos ausentes');

if (failures.length) {
  console.error(JSON.stringify({ status:'failed', checks, failures }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  status:'passed',
  checks,
  summary:{ courses:4, flashcards:allCards.length, counts:expected, migration:'passed', scheduler:'passed' }
}, null, 2));
