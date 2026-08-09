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
for (const filename of [
  'cfaq-data.js',
  'dataprev-history-data.js',
  'flashcards-priority-data.js',
  'flashcards-data.js',
  'flashcards-engine.js',
  'adaptive-engine.js',
]) {
  vm.runInNewContext(fs.readFileSync(path.join(root, filename), 'utf8'), sandbox, { filename });
}

const history = sandbox.window.DATAPREV_HISTORY_DATA;
assert(Boolean(history), 'Banco histórico carregado');
assert(history.version === '1.6.0', 'Versão do banco histórico registrada');
assert(history.questions.length === 184, 'Banco possui 184 itens válidos');

const fgv = history.questions.filter((question) => question.board === 'FGV');
const ceb = history.questions.filter((question) => question.board === 'CEBRASPE');
assert(fgv.length === 69, 'FGV possui 69 questões válidas');
assert(ceb.length === 115, 'Cebraspe possui 115 itens válidos');
assert(!fgv.some((question) => question.questionNumber === 13), 'Questão 13 anulada da FGV foi omitida');
assert(!ceb.some((question) => [29, 47, 93, 99, 101].includes(question.questionNumber)), 'Cinco itens anulados do Cebraspe foram omitidos');
assert(fgv.every((question) => question.options.length === 5), 'Toda questão FGV possui cinco alternativas');
assert(ceb.every((question) => question.options.join('|') === 'Certo|Errado'), 'Todo item Cebraspe usa Certo ou Errado');
assert(new Set(history.questions.map((question) => question.id)).size === 184, 'IDs históricos são únicos');
assert(new Set(history.questions.map((question) => question.statement)).size === 184, 'Enunciados históricos são únicos');

const answer = (id) => history.questions.find((question) => question.id === id)?.correct;
assert(answer('dp-fgv24-001') === 4, 'Gabarito FGV 1 = E');
assert(answer('dp-fgv24-041') === 0, 'Gabarito FGV 41 = A');
assert(answer('dp-fgv24-070') === 1, 'Gabarito FGV 70 = B');
assert(answer('dp-ceb23-051') === 0, 'Gabarito Cebraspe 51 = Certo');
assert(answer('dp-ceb23-052') === 1, 'Gabarito Cebraspe 52 = Errado');
assert(answer('dp-ceb23-094') === 0, 'Gabarito Cebraspe 94 = Certo');

for (const question of history.questions) {
  assert(Boolean(question.statement), `Enunciado preenchido em ${question.id}`);
  assert(Number.isInteger(question.correct) && question.correct >= 0 && question.correct < question.options.length, `Gabarito válido em ${question.id}`);
  if (question.textBaseId) assert(Boolean(history.textBases[question.textBaseId]), `Texto-base válido em ${question.id}`);
  if (question.image) assert(fs.existsSync(path.join(root, question.image)), `Imagem existente em ${question.id}`);
}

let main = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
main = main.replace(/render\(\);\s*\}\)\(\);?\s*$/, 'window.__COURSES=COURSES;})()');
vm.runInNewContext(main, sandbox, { filename: 'app.js', timeout: 20000 });
const course = sandbox.window.__COURSES.dataprev;
const lessonIds = new Set(course.lessons.map((lesson) => lesson.id));
assert(course.questions.length === 442, 'DATAPREV possui 442 questões após incorporação');
assert(course.historicalProofs.length === 2, 'Duas provas históricas registradas');
assert(history.questions.every((question) => lessonIds.has(question.lessonId)), 'Todo item histórico está mapeado a uma microlição');
assert(Object.keys(course.textBases).length === 8, 'Oito textos-base integrados');
assert(course.lessons.every((lesson) => lesson.questionIds.filter((id) => id.startsWith('dp-')).length <= 2), 'Microlições recebem no máximo dois itens históricos visíveis');
assert(course.questions.filter((question) => question.historical).length === 184, 'Todos os itens históricos permanecem disponíveis aos simulados');

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
assert(html.indexOf('dataprev-history-data.js') > html.indexOf('cfaq-data.js') && html.indexOf('dataprev-history-data.js') < html.indexOf('app.js'), 'Banco DATAPREV carrega antes da aplicação');
assert(main.includes('dataprev-proof:fgv2024'), 'Modo histórico FGV implementado');
assert(main.includes('dataprev-proof:cebraspe2023'), 'Modo histórico Cebraspe implementado');
assert(main.includes('earned -= 1'), 'Regra de penalização Cebraspe implementada');

for (const proof of history.proofs) {
  assert(fs.existsSync(path.join(root, proof.sourceFile)), `PDF-fonte presente para ${proof.id}`);
  assert(/^https:\/\//.test(proof.answerKeyUrl), `Gabarito definitivo HTTPS para ${proof.id}`);
}

const payload = {
  status: failures.length ? 'failed' : 'passed',
  checks,
  failures,
  summary: { fgv: fgv.length, cebraspe: ceb.length, total: history.questions.length, dataprevTotal: course.questions.length },
};
console.log(JSON.stringify(payload, null, 2));
if (failures.length) process.exit(1);
