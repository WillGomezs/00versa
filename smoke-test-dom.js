#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');
const { JSDOM, VirtualConsole, requestInterceptor } = require('jsdom');

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
  const external = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', (error) => errors.push(error.message));
  virtualConsole.on('error', (message) => errors.push(String(message)));
  const dom = await JSDOM.fromURL(`http://127.0.0.1:${server.address().port}/`, {
    resources: {
      interceptors: [requestInterceptor((request) => {
        if (!request.url.startsWith(`http://127.0.0.1:${server.address().port}`)) {
          external.push(request.url);
          return new Response('', { status: 204 });
        }
      })],
    },
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    virtualConsole,
    beforeParse(window) {
      window.scrollTo = () => {};
      window.confirm = () => true;
      window.localStorage.setItem('versa-profile-v2', JSON.stringify({ name:'Validação', dailyMinutes:45, onboarded:true, theme:'light' }));
      window.localStorage.setItem('versa-active-course', JSON.stringify('cfaq'));
      window.localStorage.setItem('versa-progress-cfaq', JSON.stringify({ completed:[], scores:{}, xp:5, streak:1, reviews:[], errors:[], diagnostic:null, simulations:[] }));
    },
  });
  await new Promise((resolve) => dom.window.addEventListener('load', () => setTimeout(resolve, 100)));
  const document = dom.window.document;
  const result = {};
  result.courseCards = document.querySelectorAll('.course-card').length;
  document.querySelector('[data-start-course="cfaq"]').click();
  result.dashboardTitle = document.querySelector('.hero h1')?.textContent;
  result.dailyPlanBlocks = document.querySelectorAll('.daily-item').length;
  result.adaptivePriority = document.querySelector('.adaptive-callout strong')?.textContent;
  result.masteryMetric = document.querySelector('.hero-side strong')?.textContent;
  document.querySelector('[data-view="flashcards"]').click();
  result.flashCardsCfaq = document.querySelector('.page-head .badge')?.textContent;
  result.flashPriorityButtonDisabled = document.querySelector('[data-flash-start="priority"]')?.disabled;
  document.querySelector('[data-flash-start="priority"]').click();
  result.flashPrioritySessionLabel = document.querySelector('.flash-study-top .badge')?.textContent;
  result.flashPriorityBadge = document.querySelector('.flash-context .priority')?.textContent;
  document.querySelector('#flash-exit').click();
  result.flashNewButtonDisabled = document.querySelector('[data-flash-start="new"]')?.disabled;
  document.querySelector('[data-flash-start="new"]').click();
  result.flashSessionLabel = document.querySelector('.flash-study-top .badge')?.textContent;
  document.querySelector('#flash-reveal').click();
  result.flashAnswerVisible = Boolean(document.querySelector('.flash-answer'));
  result.flashRatings = document.querySelectorAll('[data-flash-rating]').length;
  document.querySelector('[data-flash-rating="good"]').click();
  result.flashNextLabel = document.querySelector('.flash-study-top .badge')?.textContent;
  const savedFlashProgress = JSON.parse(dom.window.localStorage.getItem('versa-progress-cfaq'));
  result.flashSavedCards = Object.keys(savedFlashProgress.flashcards.cards).length;
  result.flashMigratedXp = savedFlashProgress.xp;
  document.querySelector('[data-view="path"]').click();
  result.pathLessons = document.querySelectorAll('.lesson-card').length;
  document.querySelector('.lesson-card').click();
  result.lessonQuestions = document.querySelectorAll('.quiz-card').length;
  const firstVideoThumbnail = document.querySelector('.video-thumbnail');
  result.videoThumbnailSrc = firstVideoThumbnail?.getAttribute('src');
  result.videoThumbnailLink = firstVideoThumbnail?.closest('a')?.getAttribute('href');
  result.videoIframes = document.querySelectorAll('.video-card iframe').length;
  const activeLesson = dom.window.CFAQ_DATA.lessons[0];
  const activeQuestion = dom.window.CFAQ_DATA.questions.find((question) => question.id === activeLesson.questionIds[0]);
  const wrongOption = (activeQuestion.correct + 1) % activeQuestion.options.length;
  document.querySelector(`[data-q="${activeQuestion.id}"][data-opt="${wrongOption}"]`).click();
  document.querySelector(`[data-submit="${activeQuestion.id}"]`).click();
  const adaptiveProgress = JSON.parse(dom.window.localStorage.getItem('versa-progress-cfaq'));
  result.adaptiveAttempts = adaptiveProgress.adaptive.attempts.length;
  result.activeErrors = adaptiveProgress.errors.filter((error) => error.status === 'active').length;
  result.errorStatus = adaptiveProgress.errors[0]?.status;
  document.querySelector('[data-view="simulation"]').click();
  result.simChoices = document.querySelectorAll('[data-sim-start]').length;
  result.proofOptions = document.querySelectorAll('#cfaq-proof-select option').length;
  document.querySelector('[data-sim-start="completo"]').click();
  result.simQuestionLabel = document.querySelector('.sim-progress .badge')?.textContent;
  result.simOptions = document.querySelectorAll('[data-sim-opt]').length;
  const coverLabels = new Set();
  for (const id of ['dataprev','ason','ibge','cfaq']) {
    document.querySelector(`[data-course="${id}"]`).click();
    result[`course_${id}`] = document.querySelector('.hero h1')?.textContent;
    document.querySelector('[data-view="flashcards"]').click();
    result[`flashcards_${id}`] = document.querySelector('.page-head .badge')?.textContent;
    document.querySelector('[data-view="library"]').click();
    document.querySelectorAll('.video-cover strong').forEach((element) => coverLabels.add(element.textContent));
  }
  result.videoCoverLabels = [...coverLabels].sort();
  result.externalThumbnailRequests = external.length;
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
    result.dailyPlanBlocks >= 2,
    Boolean(result.adaptivePriority),
    /^\d+%$/.test(result.masteryMetric || ''),
    result.flashCardsCfaq === '50 cartões',
    result.flashPriorityButtonDisabled === false,
    result.flashPrioritySessionLabel === 'Cartão 1/20',
    /Alta incidência/.test(result.flashPriorityBadge || ''),
    result.flashNewButtonDisabled === false,
    result.flashSessionLabel === 'Cartão 1/10',
    result.flashAnswerVisible === true,
    result.flashRatings === 4,
    result.flashNextLabel === 'Cartão 2/10',
    result.flashSavedCards === 1,
    result.flashMigratedXp === 6,
    result.pathLessons === 30,
    result.lessonQuestions >= 3,
    /^https:\/\/i\.ytimg\.com\/vi\/[A-Za-z0-9_-]{11}\/hqdefault\.jpg$/.test(result.videoThumbnailSrc || ''),
    /^https:\/\/www\.youtube\.com\/watch\?v=[A-Za-z0-9_-]{11}$/.test(result.videoThumbnailLink || ''),
    result.videoIframes === 0,
    result.adaptiveAttempts >= 1,
    result.activeErrors >= 1,
    result.errorStatus === 'active',
    ['Buscar aulas sobre este assunto','Coleção temática','Playlist de videoaulas'].every((label) => result.videoCoverLabels.includes(label)),
    external.every((url) => /^https:\/\/i\.ytimg\.com\/vi\/[A-Za-z0-9_-]{11}\/hqdefault\.jpg$/.test(url)),
    result.simChoices === 4,
    result.proofOptions === 12,
    result.simQuestionLabel === 'Questão 1/40',
    [4,5].includes(result.simOptions),
    result.course_dataprev === 'DATAPREV 2026',
    result.course_ason === 'ASON 2027',
    result.course_ibge === 'IBGE 2026',
    result.course_cfaq === 'CFAQ-MOC Nacional',
    result.flashcards_dataprev === '153 cartões',
    result.flashcards_ason === '100 cartões',
    result.flashcards_ibge === '118 cartões',
    result.flashcards_cfaq === '50 cartões',
    /^Questão 1\/\d+$/.test(result.proofSimLabel || ''),
    /Prova histórica: CFAQ/.test(result.proofSource || ''),
    errors.length === 0,
  ];
  dom.window.close();
  server.close();
  const payload = { status: checks.every(Boolean) ? 'passed' : 'failed', result, errors };
  if (checks.every(Boolean)) {
    const report = `# Teste de fluxo DOM — CFAQ-MOC Nacional, flashcards e mídia\n\nData: 09/08/2026\n\nStatus: **APROVADO**\n\n- Cartões de curso exibidos: ${result.courseCards}.\n- Curso aberto: ${result.dashboardTitle}.\n- Flashcards CFAQ-MOC: ${result.flashCardsCfaq}; sessão iniciada em ${result.flashSessionLabel}.\n- Resposta revelada: ${result.flashAnswerVisible}; classificações disponíveis: ${result.flashRatings}.\n- Migração e salvamento: ${result.flashSavedCards} cartão salvo; XP antigo preservado e atualizado para ${result.flashMigratedXp}.\n- Catálogos: DATAPREV ${result.flashcards_dataprev}, ASON ${result.flashcards_ason}, IBGE ${result.flashcards_ibge} e CFAQ-MOC ${result.flashcards_cfaq}.\n- Microlições CFAQ-MOC exibidas: ${result.pathLessons}.\n- Questões na primeira lição testada: ${result.lessonQuestions}.\n- Thumbnail vinculada ao vídeo correto: ${result.videoThumbnailLink}.\n- Capas especiais encontradas: ${result.videoCoverLabels.join(', ')}.\n- Iframes incorporados: ${result.videoIframes}.\n- Modos de simulado: ${result.simChoices}.\n- Opções do filtro histórico: ${result.proofOptions}.\n- Simulado completo iniciado: ${result.simQuestionLabel}.\n- Alternativas renderizadas na questão testada: ${result.simOptions}.\n- Alternância validada: ${result.course_dataprev}, ${result.course_ason}, ${result.course_ibge} e ${result.course_cfaq}.\n- Simulado histórico iniciado: ${result.proofSimLabel}.\n- Origem histórica exibida: ${result.proofSource}.\n- Erros de JavaScript capturados: ${errors.length}.\n\nO teste executou a aplicação em um DOM com carregamento HTTP local. As requisições externas de thumbnails foram interceptadas e validadas; o teste não substitui inspeção visual em navegador real.\n`;
    const adaptiveReport = report.replace(
      `- Flashcards CFAQ-MOC:`,
      `- Blocos do plano diário adaptativo: ${result.dailyPlanBlocks}; prioridade inicial: ${result.adaptivePriority}.\n- Indicador de domínio inicial: ${result.masteryMetric}.\n- Tentativas registradas no motor adaptativo: ${result.adaptiveAttempts}; erros ativos: ${result.activeErrors}.\n- Flashcards CFAQ-MOC:`,
    );
    fs.writeFileSync(path.join(root, 'RELATORIO_TESTE_FLUXO_CFAQ_MOC.md'), adaptiveReport);
  }
  console.log(JSON.stringify(payload, null, 2));
  if (!checks.every(Boolean)) process.exit(1);
})().catch((error) => {
  server.close();
  console.error(error);
  process.exit(1);
});
