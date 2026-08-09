#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
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
main = main.replace(/render\(\);\s*\}\)\(\);?\s*$/, 'window.__VERSA_COURSES=COURSES;})()');
vm.runInNewContext(main, sandbox, { filename: 'app.js', timeout: 15000 });

const courses = sandbox.window.__VERSA_COURSES;
const report = {};

for (const [courseId, course] of Object.entries(courses)) {
  const counts = new Map();
  for (const question of course.questions || []) {
    const key = question.lessonId || 'sem-licao';
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  report[courseId] = course.lessons
    .map((lesson) => ({
      lessonId: lesson.id,
      discipline: lesson.discipline || course.units.find((unit) => unit.id === lesson.unitId)?.discipline || '',
      title: lesson.title,
      activeQuestions: counts.get(lesson.id) || 0,
      historicalQuestions: Number(lesson.bankQuestionCount || 0),
    }))
    .sort((a, b) => (b.historicalQuestions - a.historicalQuestions) || (b.activeQuestions - a.activeQuestions) || a.title.localeCompare(b.title));
}

console.log(JSON.stringify(report, null, 2));
