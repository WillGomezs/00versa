#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');
const { JSDOM, VirtualConsole } = require('jsdom');

const root = path.resolve(__dirname, '..');
const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml' };
const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
  const requested = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const filePath = path.resolve(root, requested);
  if (!filePath.startsWith(root) || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) return response.writeHead(404).end();
  response.writeHead(200, { 'Content-Type': mime[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(response);
});

(async () => {
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', (error) => errors.push(error.message));
  virtualConsole.on('error', (message) => errors.push(String(message)));
  const dom = await JSDOM.fromURL(`http://127.0.0.1:${server.address().port}/`, {
    resources: 'usable',
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    virtualConsole,
    beforeParse(window) {
      window.scrollTo = () => {};
      window.confirm = () => true;
      window.localStorage.setItem('versa-profile-v2', JSON.stringify({ name:'Validação', dailyMinutes:45, onboarded:true, theme:'light' }));
      window.localStorage.setItem('versa-active-course', JSON.stringify('cfaq'));
    },
  });
  await new Promise((resolve) => dom.window.addEventListener('load', () => setTimeout(resolve, 100)));
  const document = dom.window.document;
  const result = {};
  result.courseCards = document.querySelectorAll('.course-card').length;
  document.querySelector('[data-start-course="cfaq"]').click();
  result.dashboardTitle = document.querySelector('.hero h1')?.textContent;
  document.querySelector('[data-view="path"]').click();
  result.pathLessons = document.querySelectorAll('.lesson-card').length;
  document.querySelector('.lesson-card').click();
  result.lessonQuestions = document.querySelectorAll('.quiz-card').length;
  document.querySelector('[data-view="simulation"]').click();
  result.simChoices = document.querySelectorAll('[data-sim-start]').length;
  result.proofOptions = document.querySelectorAll('#cfaq-proof-select option').length;
  document.querySelector('[data-sim-start="completo"]').click();
  result.simQuestionLabel = document.querySelector('.sim-progress .badge')?.textContent;
  result.simOptions = document.querySelectorAll('[data-sim-opt]').length;
  for (const id of ['dataprev','ason','ibge','cfaq']) {
    document.querySelector(`[data-course="${id}"]`).click();
    result[`course_${id}`] = document.querySelector('.hero h1')?.textContent;
  }
  document.querySelector('[data-view="simulation"]').click();
  const proofSelect = document.querySelector('#cfaq-proof-select');
  proofSelect.value = proofSelect.options[1].value;
  proofSelect.dispatchEvent(new dom.window.Event('change'));
  document.querySelector('#cfaq-start-proof').click();
  result.proofSimLabel = document.querySelector('.sim-progress .badge')?.textContent;
  result.proofSource = document.querySelector('.question-source')?.textContent;
  const checks = [
    result.courseCards === 4,
    result.dashboardTitle === 'CFAQ-MOC Nacional',
    result.pathLessons === 30,
    result.lessonQuestions >= 3,
    result.simChoices === 4,
    result.proofOptions === 12,
    result.simQuestionLabel === 'Questão 1/40',
    [4,5].includes(result.simOptions),
    result.course_dataprev === 'DATAPREV 2026',
    result.course_ason === 'ASON 2027',
    result.course_ibge === 'IBGE 2026',
    result.course_cfaq === 'CFAQ-MOC Nacional',
    /^Questão 1\/\d+$/.test(result.proofSimLabel || ''),
    /Prova histórica: CFAQ/.test(result.proofSource || ''),
    errors.length === 0,
  ];
  dom.window.close();
  server.close();
  const payload = { status: checks.every(Boolean) ? 'passed' : 'failed', result, errors };
  if (checks.every(Boolean)) {
    const report = `# Teste de fluxo DOM — CFAQ-MOC Nacional\n\nData: 07/08/2026\n\nStatus: **APROVADO**\n\n- Cartões de curso exibidos: ${result.courseCards}.\n- Curso aberto: ${result.dashboardTitle}.\n- Microlições exibidas: ${result.pathLessons}.\n- Questões na primeira lição testada: ${result.lessonQuestions}.\n- Modos de simulado: ${result.simChoices}.\n- Opções do filtro histórico: ${result.proofOptions}.\n- Simulado completo iniciado: ${result.simQuestionLabel}.\n- Alternativas renderizadas na questão testada: ${result.simOptions}.\n- Alternância validada: ${result.course_dataprev}, ${result.course_ason}, ${result.course_ibge} e ${result.course_cfaq}.\n- Simulado histórico iniciado: ${result.proofSimLabel}.\n- Origem histórica exibida: ${result.proofSource}.\n- Erros de JavaScript capturados: ${errors.length}.\n\nO teste executou a aplicação em um DOM com carregamento HTTP local. Não substitui inspeção visual em navegador real.\n`;
    fs.writeFileSync(path.join(root, 'RELATORIO_TESTE_FLUXO_CFAQ_MOC.md'), report);
  }
  console.log(JSON.stringify(payload, null, 2));
  if (!checks.every(Boolean)) process.exit(1);
})().catch((error) => {
  server.close();
  console.error(error);
  process.exit(1);
});
