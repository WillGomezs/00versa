#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const docs = path.join(root, 'documentos', 'dataprev');
const fgvPdf = path.join(docs, 'DATAPREV_2024_FGV_ATI_Seguranca_Cibernetica_Tipo_1.pdf');
const cebPdf = path.join(docs, 'DATAPREV_2023_CEBRASPE_Cargo_19_Seguranca_Cibernetica.pdf');
const output = path.join(root, 'dataprev-history-data.js');

const rawText = (file) => execFileSync('pdftotext', ['-raw', file, '-'], { encoding: 'utf8', maxBuffer: 20_000_000 });
const compact = (lines) => lines
  .map((line) => line.replace(/^\f/, '').trim())
  .filter(Boolean)
  .filter((line) => !/^(?:EMPRESA DE TECNOLOGIA|ATI - Segurança Cibernética|FGV CONHECIMENTO|CEBRASPE – DATAPREV|www\.pciconcursos|pcimarkpci|893(?:CG|019)|TIPO BRANCA|Realização$)/i.test(line))
  .join(' ')
  .replace(/\s+/g, ' ')
  .trim();

function sequentialMarkers(lines, total, pattern) {
  const positions = [];
  let expected = 1;
  for (let index = 0; index < lines.length && expected <= total; index++) {
    const match = lines[index].trim().match(pattern);
    if (match && Number(match[1]) === expected) {
      positions.push(index);
      expected++;
    }
  }
  if (positions.length !== total) throw new Error(`Marcadores encontrados: ${positions.length}/${total}`);
  return positions;
}

function parseFgv(raw) {
  const lines = raw.split(/\r?\n/);
  const positions = sequentialMarkers(lines, 70, /^(\d{1,2})$/);
  const tailBreak = /^(?:Língua Inglesa|Raciocínio Lógico Matemático|Atualidades|Legislação Acerca|Informação e Proteção de Dados|Conhecimentos Específicos|Use the following TEXT)/i;
  return positions.map((start, offset) => {
    const number = offset + 1;
    const end = positions[offset + 1] ?? lines.length;
    const block = lines.slice(start + 1, end);
    const statementLines = [];
    const options = [];
    let current = null;
    for (const rawLine of block) {
      const line = rawLine.replace(/^\f/, '').trim();
      if (!line) continue;
      if (tailBreak.test(line)) break;
      if (/^(?:EMPRESA DE TECNOLOGIA|ATI - Segurança Cibernética|FGV CONHECIMENTO|TIPO BRANCA|Realização$)/i.test(line)) continue;
      const option = line.match(/^\(([A-E])\)\s*(.*)$/);
      if (option) {
        current = option[1].charCodeAt(0) - 65;
        options[current] = option[2];
      } else if (current === null) statementLines.push(line);
      else options[current] = `${options[current]} ${line}`.trim();
    }
    return { number, statement: compact(statementLines), options: options.map((item) => compact([item])) };
  });
}

function parseCebraspe(raw) {
  const lines = raw.split(/\r?\n/);
  const positions = sequentialMarkers(lines, 120, /^(\d{1,3})\s+(.+)$/);
  const groupBreak = /^(?:LÍNGUA |RACIOCÍNIO |ATUALIDADES$|LEGISLAÇÃO |-- CONHECIMENTOS|Espaço livre$|Com base |Julgue |A respeito |Acerca |Considerando |De acordo |Com relação |No que se refere |Tomando por referência )/i;
  return positions.map((start, offset) => {
    const number = offset + 1;
    const end = positions[offset + 1] ?? lines.length;
    const first = lines[start].trim().replace(/^\d{1,3}\s+/, '');
    const statementLines = [first];
    for (const rawLine of lines.slice(start + 1, end)) {
      if (rawLine.includes('\f')) break;
      const line = rawLine.trim();
      if (!line || /^(?:www\.pciconcursos|pcimarkpci|893(?:CG|019)|CEBRASPE – DATAPREV)/i.test(line)) continue;
      if (groupBreak.test(line)) break;
      statementLines.push(line);
    }
    return { number, statement: compact(statementLines), options: ['Certo', 'Errado'] };
  });
}

function sliceContext(raw, startText, endPattern) {
  const lines = raw.split(/\r?\n/);
  const start = lines.findIndex((line) => line.includes(startText));
  if (start < 0) throw new Error(`Contexto não encontrado: ${startText}`);
  let end = start + 1;
  while (end < lines.length && !endPattern.test(lines[end].trim())) end++;
  if (end >= lines.length) throw new Error(`Fim de contexto não encontrado: ${startText}`);
  return compact(lines.slice(start, end + 1));
}

function contextBeforeQuestion(raw, marker, questionNumber) {
  const lines = raw.split(/\r?\n/);
  const start = lines.findIndex((line) => line.includes(marker));
  if (start < 0) throw new Error(`Contexto FGV não encontrado: ${marker}`);
  const end = lines.findIndex((line, index) => index > start && line.trim() === String(questionNumber));
  if (end < 0) throw new Error(`Questão final do contexto não encontrada: ${questionNumber}`);
  return compact(lines.slice(start + 1, end));
}

const fgvKeys = [
  'E','D','C','C','A','D','C','D','A','D','E','A','X','B','E','C','D','E','D','A',
  'B','E','B','C','C','B','B','D','C','A','B','A','D','C','E','D','A','B','E','C',
  'A','E','D','C','E','A','E','B','E','C','B','D','E','A','D','E','A','B','B','B',
  'C','C','D','C','B','A','B','C','E','B',
];
const cebKeys = [
  'C','E','C','C','E','C','E','E','E','C','E','C','E','E','C','E','E','C','C','E',
  'E','E','E','C','C','C','C','E','X','C','E','E','E','C','C','E','E','C','E','C',
  'C','C','E','C','E','E','X','C','C','E',
  'C','E','E','E','C','C','E','C','E','C','C','E','C','E','E','C','C','E','C','C',
  'E','E','C','E','C','E','E','C','E','E','C','E','E','C','E','C','C','C','E','C',
  'E','E','X','C','E','C','C','E','X','C','X','E','E','C','C','C','E','E','C','E',
  'C','E','C','E','E','E','C','C','C','E',
];

const cycle = (number, first, ids) => ids[(number - first) % ids.length];
function fgvLesson(number) {
  if (number <= 12) return cycle(number, 1, ['dpt-001','dpt-004','dpt-006','dpt-005','dpt-003','dpt-002']);
  if (number <= 24) return cycle(number, 13, ['den-001','den-002','den-003','den-004','den-005','den-006']);
  if (number <= 30) return ['drl-006','drl-006','drl-006','drl-003','drl-006','drl-006'][number - 25];
  if (number <= 35) return ['dai-001','dai-001','dai-004','dai-004','dai-001'][number - 31];
  const mapped = {
    36:'dlw-003',37:'dlw-005',38:'dlw-006',39:'dlw-008',40:'dlw-007',
    41:'red-029',42:'red-036',43:'red-017',44:'red-037',45:'red-024',46:'red-033',
    47:'sec-016',48:'dsg-005',49:'sec-012',50:'sec-034',51:'sec-019',52:'sec-019',
    53:'sec-024',54:'sec-032',55:'sec-035',56:'sec-004',57:'sec-006',58:'sec-025',
    59:'dgv-002',60:'dgv-006',61:'dgv-004',62:'dcl-001',63:'dcl-005',64:'dcl-007',
    65:'dcl-008',66:'dcl-002',67:'dcl-008',68:'dcl-007',69:'dcl-005',70:'dcl-008',
  };
  return mapped[number];
}

function cebLesson(number) {
  if (number <= 20) return cycle(number, 1, ['dpt-001','dpt-003','dpt-004','dpt-005','dpt-006','dpt-002']);
  if (number <= 30) return cycle(number, 21, ['den-001','den-002','den-003','den-004','den-006']);
  if (number <= 35) return ['drl-004','drl-002','drl-003','drl-003','drl-002'][number - 31];
  if (number <= 40) return 'dai-001';
  const mapped = {
    41:'dlw-002',42:'dlw-005',43:'dlw-006',44:'dlw-007',45:'dsg-006',46:'dsg-006',47:'sec-002',48:'sec-025',49:'sec-018',50:'sec-002',
    51:'red-037',52:'red-037',53:'red-037',54:'red-037',55:'red-037',56:'red-037',57:'red-037',58:'red-037',59:'red-037',60:'red-037',
    61:'sec-013',62:'sec-001',63:'sec-010',64:'sec-010',65:'sec-011',66:'sec-016',67:'sec-019',68:'sec-017',69:'sec-014',70:'sec-006',71:'sec-013',
    72:'dsg-003',73:'sec-008',74:'sec-008',75:'sec-008',76:'sec-034',77:'sec-034',78:'sec-034',79:'sec-034',80:'sec-019',81:'sec-019',
    82:'sec-024',83:'sec-020',84:'dsg-001',85:'dsg-001',86:'red-038',87:'dsg-010',88:'sec-020',89:'sec-019',90:'sec-032',91:'sec-032',92:'sec-032',
    93:'sec-025',94:'sec-025',95:'sec-028',96:'sec-031',97:'dsg-007',98:'sec-036',99:'red-035',100:'red-035',101:'red-011',102:'red-011',
    103:'red-016',104:'red-015',105:'red-034',106:'red-034',107:'red-027',108:'red-027',109:'sec-002',110:'sec-002',111:'dgv-003',112:'dgv-003',
    113:'dgv-004',114:'dgv-004',115:'dgv-006',116:'dgv-006',117:'dgv-007',118:'dgv-007',119:'dgv-003',120:'dgv-003',
  };
  return mapped[number];
}

function disciplineTopic(number, board) {
  if (board === 'FGV') {
    if (number <= 12) return 'Língua Portuguesa';
    if (number <= 24) return 'Língua Inglesa';
    if (number <= 30) return 'Raciocínio Lógico';
    if (number <= 35) return 'Atualidades';
    if (number <= 40) return 'Legislação';
    if (number <= 46) return 'Redes de Computadores';
    if (number <= 58) return 'Segurança da Informação';
    if (number <= 61) return 'Governança de TI';
    return 'Computação em Nuvem';
  }
  if (number <= 20) return 'Língua Portuguesa';
  if (number <= 30) return 'Língua Inglesa';
  if (number <= 35) return 'Raciocínio Lógico';
  if (number <= 40) return 'Atualidades';
  if (number <= 50) return 'Legislação';
  if ((number >= 51 && number <= 60) || (number >= 99 && number <= 108)) return 'Redes de Computadores';
  if (number >= 109) return 'Governança de TI';
  return 'Segurança da Informação';
}

const fgvRaw = rawText(fgvPdf);
const cebRaw = rawText(cebPdf);
const fgvParsed = parseFgv(fgvRaw);
const cebParsed = parseCebraspe(cebRaw);
if (fgvParsed.some((item) => item.options.length !== 5 || item.options.some((option) => !option))) throw new Error('Falha nas alternativas FGV');
if (cebParsed.some((item) => !item.statement)) throw new Error('Falha nos itens Cebraspe');

const textBases = {
  'dp-fgv24-en-1': { title:'Texto-base FGV 2024 — Technology Consultant Fast Track', text:contextBeforeQuestion(fgvRaw, 'Use the following TEXT to answer the next six questions.', 13), source:'FGV 2024' },
  'dp-fgv24-en-2': { title:'Texto-base FGV 2024 — MPrint MW-260', text:contextBeforeQuestion(fgvRaw, 'Use the following TEXT to answer the next two questions.', 19), source:'FGV 2024' },
  'dp-fgv24-en-3': { title:'Texto-base FGV 2024 — AppEco', text:contextBeforeQuestion(fgvRaw, 'Use the following TEXT to answer the next four questions.', 21), source:'FGV 2024' },
  'dp-ceb23-pt-1': { title:'Texto-base Cebraspe 2023 — Cibersegurança', text:sliceContext(cebRaw, 'A cibersegurança, embora', /Internet: <economiasc\.com>/), source:'Cebraspe 2023' },
  'dp-ceb23-pt-2': { title:'Texto-base Cebraspe 2023 — Expectativa de vida', text:sliceContext(cebRaw, 'A expectativa de vida da população', /Internet: <noticias\.uol\.com\.br>/), source:'Cebraspe 2023' },
  'dp-ceb23-en-1': { title:'Texto-base Cebraspe 2023 — Business Intelligence', text:sliceContext(cebRaw, 'Welcome To the Next Generation', /Internet: <www\.forbes\.com>/), source:'Cebraspe 2023' },
  'dp-ceb23-en-2': { title:'Texto-base Cebraspe 2023 — Microplastics', text:sliceContext(cebRaw, 'Microplastics found in human heart', /Internet: <www\.everydayhealth\.com>/), source:'Cebraspe 2023' },
  'dp-ceb23-logic': { title:'Premissas Cebraspe 2023 — Raciocínio Lógico', text:sliceContext(cebRaw, 'P1: “Se houver resistência', /C: “Houve resistência de populares\.”/), source:'Cebraspe 2023' },
};

const fgvContext = (number) => number >= 14 && number <= 18 ? 'dp-fgv24-en-1' : number <= 20 && number >= 19 ? 'dp-fgv24-en-2' : number >= 21 && number <= 24 ? 'dp-fgv24-en-3' : null;
const cebContext = (number) => number <= 10 ? 'dp-ceb23-pt-1' : number <= 20 ? 'dp-ceb23-pt-2' : number <= 25 ? 'dp-ceb23-en-1' : number <= 30 ? 'dp-ceb23-en-2' : number <= 35 ? 'dp-ceb23-logic' : null;

const fgvQuestions = fgvParsed.filter((item) => fgvKeys[item.number - 1] !== 'X').map((item) => {
  const key = fgvKeys[item.number - 1];
  const topic = disciplineTopic(item.number, 'FGV');
  return {
    id:`dp-fgv24-${String(item.number).padStart(3, '0')}`,
    lessonId:fgvLesson(item.number),
    topic,
    difficulty:'Histórica oficial',
    statement:item.statement,
    options:item.options,
    correct:key.charCodeAt(0) - 65,
    explanation:`Gabarito definitivo FGV: alternativa ${key}. Questão oficial de 2024; revise ${topic} e considere a legislação e as referências vigentes na data da prova.`,
    source:'DATAPREV 2024 — FGV — ATI Segurança Cibernética e Proteção de Dados — Tipo 1',
    sourceProof:'DATAPREV 2024 — FGV — Tipo 1',
    sourceStatus:'Questão oficial com gabarito definitivo; questão 13 anulada e omitida.',
    official:true,
    historical:true,
    board:'FGV',
    examYear:2024,
    questionNumber:item.number,
    examPart:item.number <= 40 ? 'gerais' : 'especificos',
    textBaseId:fgvContext(item.number),
    image:item.number === 29 ? 'assets/dataprev/fgv-2024-q029.svg' : null,
  };
});

const cebQuestions = cebParsed.filter((item) => cebKeys[item.number - 1] !== 'X').map((item) => {
  const key = cebKeys[item.number - 1];
  const topic = disciplineTopic(item.number, 'CEBRASPE');
  return {
    id:`dp-ceb23-${String(item.number).padStart(3, '0')}`,
    lessonId:cebLesson(item.number),
    topic,
    difficulty:'Histórica oficial · Certo ou Errado',
    statement:item.statement,
    options:item.options,
    correct:key === 'C' ? 0 : 1,
    explanation:`Gabarito definitivo Cebraspe: ${key === 'C' ? 'CERTO' : 'ERRADO'}. Item oficial de 2023; revise ${topic} e confira atualizações normativas posteriores à prova.`,
    source:'DATAPREV 2023 — Cebraspe — Cargo 19 Segurança Cibernética',
    sourceProof:'DATAPREV 2023 — Cebraspe — Cargo 19',
    sourceStatus:'Item oficial com gabarito definitivo; itens anulados 29, 47, 93, 99 e 101 omitidos.',
    official:true,
    historical:true,
    board:'CEBRASPE',
    examYear:2023,
    questionNumber:item.number,
    examPart:item.number <= 50 ? 'gerais' : 'especificos',
    textBaseId:cebContext(item.number),
    image:item.number === 119 ? 'assets/dataprev/cebraspe-2023-q119.svg' : item.number === 120 ? 'assets/dataprev/cebraspe-2023-q120.svg' : null,
  };
});

const questions = [...fgvQuestions, ...cebQuestions];
if (fgvQuestions.length !== 69 || cebQuestions.length !== 115 || questions.some((item) => !item.lessonId)) throw new Error('Contagem ou mapeamento histórico inválido');
if (new Set(questions.map((item) => item.id)).size !== questions.length) throw new Error('IDs históricos duplicados');

const payload = {
  version:'1.6.0',
  questions,
  textBases,
  proofs:[
    { id:'fgv2024', label:'Prova oficial FGV 2024', board:'FGV', year:2024, type:'multiple-choice', total:69, originalTotal:70, omitted:[13], durationSeconds:14400, scoring:'Pesos 1 e 2,5 conforme o bloco.', sourceFile:'documentos/dataprev/DATAPREV_2024_FGV_ATI_Seguranca_Cibernetica_Tipo_1.pdf', answerKeyUrl:'https://conhecimento.fgv.br/sites/default/files/concursos/dataprev_gabarito_definitivo-1.pdf' },
    { id:'cebraspe2023', label:'Prova oficial Cebraspe 2023', board:'CEBRASPE', year:2023, type:'true-false', total:115, originalTotal:120, omitted:[29,47,93,99,101], durationSeconds:210 * 60, scoring:'Certo: +1; errado: -1; em branco: 0.', sourceFile:'documentos/dataprev/DATAPREV_2023_CEBRASPE_Cargo_19_Seguranca_Cibernetica.pdf', generalKeyUrl:'https://cdn.cebraspe.org.br/concursos/dataprev_23/arquivos/GAB_DEFINITIVO_893_DATAPREV_CG1_01.PDF', answerKeyUrl:'https://cdn.cebraspe.org.br/concursos/dataprev_23/arquivos/GAB_DEFINITIVO_893_DATAPREV_019_01.PDF' },
  ],
};

const content = `/* Versa Concursos — banco histórico oficial DATAPREV v1.6.0. Gerado por tools/build-dataprev-history.js. */\n(() => {\n  "use strict";\n  window.DATAPREV_HISTORY_DATA = ${JSON.stringify(payload, null, 2)};\n})();\n`;
fs.writeFileSync(output, content);
console.log(JSON.stringify({ status:'passed', fgv:fgvQuestions.length, cebraspe:cebQuestions.length, total:questions.length, textBases:Object.keys(textBases).length, output:path.basename(output) }, null, 2));
