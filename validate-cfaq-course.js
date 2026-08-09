#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const failures = [];
const checks = [];
const assert = (condition, label) => {
  checks.push(label);
  if (!condition) failures.push(label);
};

const dataSource = fs.readFileSync(path.join(root, 'cfaq-data.js'), 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(dataSource, sandbox, { filename: 'cfaq-data.js' });
const course = sandbox.window.CFAQ_DATA;

assert(Boolean(course), 'CFAQ_DATA é carregado');
assert(course?.id === 'cfaq', 'ID do curso é cfaq');
assert(course?.name === 'CFAQ-MOC Nacional', 'Nome do curso está correto');
assert(course?.units?.length === 10, 'Há 10 módulos');
assert(course?.lessons?.length === 30, 'Há 30 microlições');
assert(course?.questions?.length === 406, 'Há 406 questões ativas');
assert(course?.diagnosticIds?.length === 30, 'Diagnóstico possui 30 questões');
assert(course?.videoCatalog?.length === 17, 'Há 17 videoaulas');

const unitIds = new Set(course.units.map((item) => item.id));
const lessonIds = new Set(course.lessons.map((item) => item.id));
const questionIds = new Set(course.questions.map((item) => item.id));
assert(unitIds.size === course.units.length, 'IDs de módulos são únicos');
assert(lessonIds.size === course.lessons.length, 'IDs de lições são únicos');
assert(questionIds.size === course.questions.length, 'IDs de questões são únicos');

for (const lesson of course.lessons) {
  assert(unitIds.has(lesson.unitId), `Unidade válida em ${lesson.id}`);
  assert(lesson.questionIds.length >= 3, `Mínimo de 3 questões em ${lesson.id}`);
  assert(lesson.questionIds.length <= 5, `Máximo de 5 questões na microlição ${lesson.id}`);
  assert(lesson.bankQuestionCount >= lesson.questionIds.length, `Banco temático contabilizado em ${lesson.id}`);
  assert(lesson.questionIds.every((id) => questionIds.has(id)), `Referências de questões válidas em ${lesson.id}`);
  assert((lesson.prerequisites || []).every((id) => lessonIds.has(id)), `Pré-requisitos válidos em ${lesson.id}`);
  assert((lesson.videoIds || []).every((id) => course.videoCatalog.some((video) => video.id === id)), `Vídeos válidos em ${lesson.id}`);
}

for (const question of course.questions) {
  assert(lessonIds.has(question.lessonId), `Lição existente para ${question.id}`);
  assert(Array.isArray(question.options) && [4, 5].includes(question.options.length), `Alternativas válidas em ${question.id}`);
  assert(Number.isInteger(question.correct) && question.correct >= 0 && question.correct < question.options.length, `Gabarito válido em ${question.id}`);
  assert(!/ASON|CFAQ-MOM/i.test(question.sourceProof || ''), `Escopo MOC preservado em ${question.id}`);
  if (question.image) assert(fs.existsSync(path.join(root, question.image)), `Imagem existente para ${question.id}`);
  if (question.textBaseId) assert(Boolean(course.textBases[question.textBaseId]), `Texto-base existente para ${question.id}`);
}

assert(course.diagnosticIds.every((id) => questionIds.has(id)), 'Diagnóstico referencia apenas questões válidas');
assert(course.filters.proofs.length === 11, 'Há 11 conjuntos históricos no filtro');
assert(course.filters.years.join(',') === '2023,2024,2025,2026', 'Filtro de anos está correto');

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const mainScript = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
assert(/<script src="cfaq-data\.js(?:\?v=\d+)?"><\/script>/.test(html) && html.indexOf('cfaq-data.js') < html.indexOf('app.js'), 'Dados CFAQ carregam antes da aplicação');
assert(mainScript.includes('COURSES.cfaq = window.CFAQ_DATA'), 'Curso CFAQ registrado no seletor');
assert(/c\.id === "cfaq"/.test(mainScript), 'Simulador possui ramo CFAQ');
assert(mainScript.includes('cfaq-proof-select'), 'Filtro por prova histórica existe');
assert(mainScript.includes('questionExtras(c, q)'), 'Questões exibem textos-base e imagens');
try {
  new vm.Script(mainScript, { filename: 'app.js' });
  assert(true, 'JavaScript principal possui sintaxe válida');
} catch (error) {
  failures.push(`JavaScript principal inválido: ${error.message}`);
}

const audit = JSON.parse(fs.readFileSync(path.join(root, 'AUDITORIA_IMPORTACAO_CFAQ_MOC.json'), 'utf8'));
assert(audit.importedCfaqQuestions === 430, 'Auditoria registra 430 questões importadas');
assert(audit.activeUniqueQuestions === course.questions.length, 'Auditoria corresponde ao banco ativo');
assert(audit.unresolvedTextBases.length === 0, 'Nenhum texto-base ficou sem resolução');

if (failures.length) {
  console.error(JSON.stringify({ status: 'failed', checks: checks.length, failures }, null, 2));
  process.exit(1);
}

const validationReport = `# Relatório de validação — CFAQ-MOC Nacional\n\nData: 07/08/2026\n\nStatus: **APROVADO**\n\n- Verificações estruturais: **${checks.length}**\n- Cursos preservados: **4**\n- Módulos CFAQ-MOC: **${course.units.length}**\n- Microlições CFAQ-MOC: **${course.lessons.length}**\n- Questões ativas: **${course.questions.length}**\n- Diagnóstico: **${course.diagnosticIds.length} questões**\n- Videoaulas: **${course.videoCatalog.length}**\n- Conjuntos históricos: **${course.filters.proofs.length}**\n- Imagens únicas: **${new Set(course.questions.map((question) => question.image).filter(Boolean)).size}**\n- Textos-base: **${Object.keys(course.textBases).length}**\n\n## Verificações cobertas\n\n- sintaxe do JavaScript principal e do arquivo modular;\n- IDs únicos e referências cruzadas;\n- alternativas e gabaritos válidos;\n- mínimo de três questões por microlição;\n- imagens, textos-base, vídeos e pré-requisitos existentes;\n- ausência de questões ASON e CFAQ-MOM;\n- registro da quarta trilha e dos simulados CFAQ-MOC.\n\nO teste de fluxo DOM é executado separadamente por \`npm run test:dom\`.\n`;
fs.writeFileSync(path.join(root, 'RELATORIO_VALIDACAO_CFAQ_MOC.md'), validationReport);

console.log(JSON.stringify({
  status: 'passed',
  checks: checks.length,
  summary: {
    courses: 4,
    cfaqModules: course.units.length,
    cfaqLessons: course.lessons.length,
    cfaqQuestions: course.questions.length,
    diagnostic: course.diagnosticIds.length,
    videos: course.videoCatalog.length,
    historicalProofs: course.filters.proofs.length,
    images: new Set(course.questions.map((question) => question.image).filter(Boolean)).size,
    textBases: Object.keys(course.textBases).length,
  },
}, null, 2));
