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
  'transpetro-cyber-data.js',
  'flashcards-priority-data.js',
  'flashcards-data.js',
  'flashcards-engine.js',
  'adaptive-engine.js',
]) {
  vm.runInNewContext(fs.readFileSync(path.join(root, filename), 'utf8'), sandbox, { filename });
}

let main = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
main = main.replace(
  /render\(\);\s*\}\)\(\);?\s*$/,
  'window.__VERSA_COURSES=COURSES;})()',
);
vm.runInNewContext(main, sandbox, { filename: 'app.js', timeout: 15000 });

const courses = sandbox.window.__VERSA_COURSES;
const expectedCounts = { dataprev: 50, ason: 50, ibge: 80, cfaq: 17, 'transpetro-cyber': 40 };
const reviewDates = { dataprev:'09/08/2026', ason:'09/08/2026', ibge:'09/08/2026', cfaq:'09/08/2026', 'transpetro-cyber':'13/08/2026' };
const retiredReferences = [
  'qTW-CayLSSM',
  'cHcFDNkxpmQ',
  'bSeZlT7Og8I',
  'Iw4h88BY3A4',
  'v8fo_hSpo-k',
  'sboHNl5HZgw',
  '45thlAoGOGUT',
  '@EnglishinBrazil',
];

assert(Boolean(courses), 'Catálogo de cursos carregado');
let total = 0;
const directIds = new Set();
const allUrls = [];

for (const [courseId, expectedCount] of Object.entries(expectedCounts)) {
  const course = courses[courseId];
  assert(Boolean(course), `Curso ${courseId} existe`);
  assert(course.videoCatalog.length === expectedCount, `${courseId} preserva ${expectedCount} vídeos/coleções`);
  assert(course.videoReviewDate === reviewDates[courseId], `${courseId} registra revisão em ${reviewDates[courseId]}`);
  assert(new Set(course.videoCatalog.map((video) => video.id)).size === expectedCount, `IDs de vídeos são únicos em ${courseId}`);

  const videoIds = new Set(course.videoCatalog.map((video) => video.id));
  for (const lesson of course.lessons) {
    assert((lesson.videoIds || []).every((id) => videoIds.has(id)), `Referências de vídeo válidas em ${lesson.id}`);
  }

  for (const video of course.videoCatalog) {
    total += 1;
    allUrls.push(video.url);
    assert(Boolean(video.title), `Título preenchido em ${courseId}/${video.id}`);
    assert(Boolean(video.channel), `Canal ou origem preenchido em ${courseId}/${video.id}`);
    assert(/^https:\/\//.test(video.url), `HTTPS obrigatório em ${courseId}/${video.id}`);

    let parsed;
    try {
      parsed = new URL(video.url);
      assert(true, `URL válida em ${courseId}/${video.id}`);
    } catch {
      assert(false, `URL válida em ${courseId}/${video.id}`);
      continue;
    }

    if (courseId === 'transpetro-cyber') {
      assert(video.type === 'video' && video.curated === true, `TRANSPETRO usa somente vídeo curado em ${video.id}`);
      assert(Boolean(video.youtubeId), `TRANSPETRO possui youtubeId direto em ${video.id}`);
      assert(!video.url.includes('/results?search_query='), `TRANSPETRO não usa busca temática em ${video.id}`);
    }

    if (video.youtubeId) {
      directIds.add(video.youtubeId);
      assert(parsed.hostname === 'www.youtube.com', `Host do vídeo direto válido em ${courseId}/${video.id}`);
      assert(parsed.pathname === '/watch', `Rota /watch no vídeo direto ${courseId}/${video.id}`);
      assert(parsed.searchParams.get('v') === video.youtubeId, `youtubeId corresponde à URL em ${courseId}/${video.id}`);
    } else if (parsed.hostname === 'www.youtube.com') {
      assert(parsed.pathname !== '/watch', `Recurso sem youtubeId não aponta para vídeo direto em ${courseId}/${video.id}`);
    }
  }
}

const serializedUrls = allUrls.join('\n');
for (const retired of retiredReferences) {
  assert(!serializedUrls.includes(retired), `Referência aposentada removida: ${retired}`);
}
assert(total === 237, 'Catálogo total possui 237 vídeos/coleções');
assert(allUrls.includes('https://www.youtube.com/playlist?list=PLPmRk_xSwrYQk07Q2LVPglr8QPmV1Difz'), 'Playlist ISO substituta registrada');
assert(directIds.has('IIU6i3UXyi0'), 'Aula substituta de coesão registrada');
assert(directIds.has('su5NeDlSJjI'), 'Aula substituta de Present Continuous registrada');
assert(directIds.has('VCf4tMPUtSw'), 'Aula substituta de tendência central registrada');
assert(directIds.has('XsN0e_xPyNI'), 'Aula substituta de interpretação registrada');

const report = {
  status: failures.length ? 'failed' : 'passed',
  auditedAt: '2026-08-13',
  checks,
  summary: {
    courses: Object.keys(expectedCounts).length,
    catalogEntries: total,
    directVideoIds: directIds.size,
    counts: expectedCounts,
    retiredReferencesBlocked: retiredReferences.length,
  },
  failures,
};

fs.writeFileSync(
  path.join(root, 'AUDITORIA_VIDEOAULAS_V1.7.1.json'),
  `${JSON.stringify(report, null, 2)}\n`,
);

if (failures.length) {
  console.error(JSON.stringify(report, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(report, null, 2));
