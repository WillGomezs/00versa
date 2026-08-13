#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
const failures = [];
let checks = 0;
const assert = (condition, label) => { checks += 1; if (!condition) failures.push(label); };

const sandbox = { window:{}, console };
vm.runInNewContext(fs.readFileSync(path.join(root, 'transpetro-cyber-data.js'), 'utf8'), sandbox, { filename:'transpetro-cyber-data.js' });
const c = sandbox.window.TRANSPETRO_CYBER_DATA;
assert(Boolean(c), 'Trilha TRANSPETRO Cyber carregada');
assert(c?.id === 'transpetro-cyber', 'ID da trilha correto');
assert(c?.contentVersion === '1.7.1', 'Versão editorial 1.7.1 registrada');
assert(c?.units?.length === 15, '15 módulos editoriais');
assert(c?.lessons?.length === 64, '64 microlições');
assert(c?.questions?.length === 198, '198 questões totais');
assert(c?.questions?.filter(q => !q.historical).length === 128, '128 questões autorais');
assert(c?.questions?.filter(q => q.historical).length === 70, '70 questões históricas oficiais');
assert(c?.diagnosticIds?.length === 30, 'Diagnóstico com 30 questões');
assert(c?.videoCatalog?.length === 40, '40 videoaulas diretas curadas');
assert(c?.videoCuration?.directVideos === 40, 'Metadado registra 40 vídeos diretos');
assert(c?.videoCuration?.searchPages === 0, 'Curadoria TRANSPETRO não usa páginas de busca como videoaula');
assert(c?.historicalProofs?.length === 1, 'Uma prova histórica específica integrada');

const unitIds = new Set(c.units.map(x => x.id));
const lessonIds = new Set(c.lessons.map(x => x.id));
const questionIds = new Set(c.questions.map(x => x.id));
const videoIds = new Set(c.videoCatalog.map(x => x.id));
assert(unitIds.size === c.units.length, 'IDs de módulos únicos');
assert(lessonIds.size === c.lessons.length, 'IDs de lições únicos');
assert(questionIds.size === c.questions.length, 'IDs de questões únicos');
assert(videoIds.size === c.videoCatalog.length, 'IDs de recursos únicos');

const authorialByLesson = new Map(c.lessons.map(l => [l.id, 0]));
for (const q of c.questions.filter(q => !q.historical)) authorialByLesson.set(q.lessonId, (authorialByLesson.get(q.lessonId) || 0) + 1);

for (const l of c.lessons) {
  assert(unitIds.has(l.unitId), `Módulo válido em ${l.id}`);
  assert(Array.isArray(l.points) && l.points.length >= 2, `Pontos de estudo em ${l.id}`);
  assert(Boolean(l.summary) && Boolean(l.recall), `Resumo e recuperação ativa em ${l.id}`);
  assert((l.questionIds || []).every(id => questionIds.has(id)), `Questões referenciadas válidas em ${l.id}`);
  assert((l.videoIds || []).length >= 1, `Ao menos uma videoaula curada em ${l.id}`);
  assert((l.videoIds || []).every(id => videoIds.has(id)), `Recursos referenciados válidos em ${l.id}`);
  assert((l.prerequisites || []).every(id => lessonIds.has(id)), `Pré-requisitos válidos em ${l.id}`);
  assert((authorialByLesson.get(l.id) || 0) >= 2, `Duas ou mais questões autorais em ${l.id}`);
}
for (const q of c.questions) {
  assert(lessonIds.has(q.lessonId), `Lição válida em ${q.id}`);
  assert(Array.isArray(q.options) && q.options.length === 5, `Cinco alternativas em ${q.id}`);
  assert(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 5, `Gabarito válido em ${q.id}`);
  assert(Boolean(q.statement) && Boolean(q.explanation), `Enunciado e comentário em ${q.id}`);
  assert(Array.isArray(q.wrong) && q.wrong.length === 5, `Feedback por alternativa em ${q.id}`);
  if (Array.isArray(q.wrong)) {
    assert(new Set(q.wrong).size === 5, `Cinco comentários individualizados em ${q.id}`);
    q.wrong.forEach((feedback, i) => {
      assert(typeof feedback === 'string' && feedback.trim().length >= 30, `Comentário substancial ${q.id}/${i}`);
      assert(!/consulte a explica[cç][aã]o|revise a distin[cç][aã]o/i.test(feedback), `Sem feedback genérico legado ${q.id}/${i}`);
      assert(i === q.correct ? /^Correta\./.test(feedback) : /^Incorreta\./.test(feedback), `Polaridade do comentário correta ${q.id}/${i}`);
    });
  }
}
assert(c.diagnosticIds.every(id => questionIds.has(id)), 'Diagnóstico referencia apenas questões existentes');
assert(new Set(c.diagnosticIds).size === c.diagnosticIds.length, 'Diagnóstico sem questões duplicadas');

for (const v of c.videoCatalog) {
  assert(v.curated === true && v.type === 'video', `Vídeo marcado como curado em ${v.id}`);
  assert(typeof v.youtubeId === 'string' && /^[A-Za-z0-9_-]{11}$/.test(v.youtubeId), `youtubeId direto válido em ${v.id}`);
  assert(v.url === `https://www.youtube.com/watch?v=${v.youtubeId}`, `URL direta corresponde ao youtubeId em ${v.id}`);
  assert(v.reviewedAt === '13/08/2026', `Data de revisão registrada em ${v.id}`);
  assert(!/\/results\?search_query=/.test(v.url), `Sem página de busca em ${v.id}`);
}

const hist = c.questions.filter(q => q.historical).sort((a,b) => a.questionNumber-b.questionNumber);
assert(hist.map(q => q.questionNumber).join(',') === Array.from({length:70},(_,i)=>i+1).join(','), 'Histórico contém exatamente as questões 1 a 70');
assert(hist.every(q => q.board === 'CESGRANRIO'), 'Banca histórica identificada como CESGRANRIO');
assert(hist.every(q => /TRANSPETRO 2023\.2/.test(q.sourceProof || '')), 'Origem histórica registrada');
const official = ['E','B','B','A','C','C','D','E','B','A','E','D','E','A','D','E','C','C','B','C','E','A','A','B','C','D','D','B','E','C','E','A','D','B','A','C','D','B','C','D','E','A','C','D','B','E','C','E','B','A','A','B','A','D','D','E','E','B','C','D','D','B','A','C','E','B','C','C','A','E'];
for (let i=0; i<hist.length; i++) {
  const got = String.fromCharCode(65 + hist[i].correct);
  assert(got === official[i], `Gabarito oficial preservado na questão ${i+1}: ${official[i]}`);
}

const serialized = JSON.stringify(c);
for (const term of [
  'MITRE ATT&CK','MITRE CAPEC','Rogue Access Point','Evil Twin','ARP','ICMP','DHCP','SMB',
  'OWASP Top 10','OWASP SAMM','CVE','CWE','IEEE 802.1X','RADIUS','ICP-Brasil','TLS','IPsec',
  'ISA/IEC 62443','NIST SP 800-82','Forense Digital','OSINT','ABNT NBR ISO/IEC 27001:2022',
  'ABNT NBR ISO/IEC 27002:2022','ABNT NBR ISO/IEC 27005:2023','ABNT ISO/IEC 27035-1:2023',
  'ABNT NBR ISO 22301:2020','ABNT NBR ISO/IEC 29100:2024','ABNT NBR ISO/IEC 29134:2024',
  'ABNT NBR ISO/IEC 27701:2019','NIST Cybersecurity Framework','CIS Critical Security Controls',
  'Marco Civil','LGPD','Resolução Anatel nº 740/2020'
]) assert(serialized.includes(term), `Cobertura curricular presente: ${term}`);

const html = fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(html.includes('transpetro-cyber-data.js'), 'index.html carrega a nova trilha');
assert(html.indexOf('transpetro-cyber-data.js') < html.indexOf('flashcards-priority-data.js'), 'Dados da nova trilha carregam antes dos flashcards');
const app = fs.readFileSync(path.join(root,'app.js'),'utf8');
assert(app.includes('COURSES["transpetro-cyber"]'), 'app.js registra a nova trilha');
assert(app.includes('transpetro-proof:transpetro2023'), 'Simulado histórico integrado');
assert(app.includes('Modelo TRANSPETRO 2026.4 completo'), 'Modelo de prova 2026 integrado');
assert(app.includes('transpetroSpecific >= 25'), 'Critério mínimo de específicos implementado');
assert(app.includes('transpetroGeneral >= 10'), 'Critério mínimo de gerais implementado');

const appSandbox = {
  window:{ TRANSPETRO_CYBER_DATA:c },
  document:{ getElementById:()=>({}), querySelector:()=>null, querySelectorAll:()=>[], activeElement:null },
  console,
};
for (const filename of ['cfaq-data.js','dataprev-history-data.js','flashcards-priority-data.js','flashcards-data.js','flashcards-engine.js','adaptive-engine.js']) {
  vm.runInNewContext(fs.readFileSync(path.join(root, filename), 'utf8'), appSandbox, { filename });
}
let runtime = app.replace(/render\(\);\s*\}\)\(\);?\s*$/, 'window.__TRC_TEST={COURSES,simPool,simDuration,state};})()');
vm.runInNewContext(runtime, appSandbox, { filename:'app.js', timeout:15000 });
const tr = appSandbox.window.__TRC_TEST;
assert(Boolean(tr?.COURSES?.['transpetro-cyber']), 'Nova trilha disponível no catálogo em runtime');
assert(tr.COURSES['transpetro-cyber'].flashcards.length === 84, 'Runtime gera 84 flashcards da nova trilha');
tr.state.activeCourse = 'transpetro-cyber';
const historicalPool = tr.simPool('transpetro-proof:transpetro2023');
const modelPool = tr.simPool('oficial');
const specificPool = tr.simPool('especificos');
assert(historicalPool.length === 70, 'Simulado histórico entrega 70 questões');
assert(historicalPool[0].questionNumber === 1 && historicalPool[69].questionNumber === 70, 'Simulado histórico preserva ordem 1–70');
assert(modelPool.length === 70, 'Modelo 2026.4 entrega 70 questões');
assert(specificPool.length === 50, 'Treino específico entrega 50 questões');
assert(tr.simPool('portugues').length === 10, 'Treino de Português entrega 10 questões');
assert(tr.simPool('ingles').length === 10, 'Treino de Inglês entrega 10 questões');
assert(tr.simPool('ofensiva').length === 20, 'Treino ofensivo entrega 20 questões');
assert(tr.simPool('defensiva').length === 20, 'Treino defensivo entrega 20 questões');
assert(tr.simPool('compliance').length === 10, 'Treino de compliance entrega 10 questões');
assert(tr.simDuration(tr.COURSES['transpetro-cyber'], 'oficial') === 16200, 'Modelo oficial usa 4h30');
assert(tr.simDuration(tr.COURSES['transpetro-cyber'], 'transpetro-proof:transpetro2023') === 16200, 'Histórico usa duração oficial de 4h30');

const payload = {
  status: failures.length ? 'failed' : 'passed', checks, failures,
  summary: { course:c.id, units:c.units.length, lessons:c.lessons.length, questions:c.questions.length, authorial:128, historical:70, diagnostic:c.diagnosticIds.length, videos:c.videoCatalog.length, feedbackEntries:c.questions.length*5 }
};
if (!failures.length) {
  fs.writeFileSync(path.join(root,'RELATORIO_VALIDACAO_TRANSPETRO_CYBER_V1.7.1.md'), `# Validação — TRANSPETRO Cyber v1.7.1\n\nData: 13/08/2026\n\nStatus: **APROVADO**\n\n- ${checks} verificações automatizadas.\n- 15 módulos e 64 microlições.\n- 198 questões, sendo 128 autorais e 70 históricas oficiais (caderno completo da Prova 5 de 2023.2).\n- Todas as 64 microlições possuem ao menos 2 questões autorais.\n- Gabarito oficial 2023 conferido questão a questão.\n- 990 comentários por alternativa validados, sem os feedbacks genéricos legados.\n- 30 questões no diagnóstico.\n- 40 videoaulas diretas curadas, sem páginas de busca usadas como aula.\n- Simulado histórico e modelo 2026.4 registrados no aplicativo.\n- Cobertura textual dos três eixos do edital: Segurança Ofensiva, Segurança Defensiva, Compliance de Segurança e Privacidade.\n`);
}
console.log(JSON.stringify(payload,null,2));
if (failures.length) process.exit(1);
