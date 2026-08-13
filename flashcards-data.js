/* Versa Concursos — catálogo de flashcards v1.7.1. */
(() => {
  'use strict';

  const clean = (value) => String(value || '').trim();

  function buildCourse(course) {
    if (!course || !Array.isArray(course.lessons) || !Array.isArray(course.units)) return [];
    const units = new Map(course.units.map((unit) => [unit.id, unit]));

    const lessons = new Map(course.lessons.map((lesson) => [lesson.id, lesson]));
    const baseCards = course.lessons.map((lesson) => {
      const unit = units.get(lesson.unitId) || {};
      const front = clean(lesson.recall) || `Qual é a ideia central de “${clean(lesson.title)}”?`;
      const back = clean(lesson.summary) || clean(lesson.objective);
      const details = Array.isArray(lesson.points)
        ? lesson.points.map(clean).filter(Boolean).slice(0, 6)
        : [];

      return {
        id: `${course.id}-fc-${lesson.id}`,
        courseId: course.id,
        lessonId: lesson.id,
        unitId: lesson.unitId,
        discipline: clean(lesson.discipline || unit.discipline || unit.title || 'Conteúdo'),
        topic: clean(lesson.title),
        front,
        back,
        details,
        tags: Array.isArray(lesson.tags) ? lesson.tags.map(clean).filter(Boolean) : [],
        difficulty: clean(lesson.difficulty || 'Básico'),
        source: 'microlição'
      };
    });

    const prioritySource = window.VERSA_PRIORITY_FLASHCARDS?.cardsByCourse?.[course.id] || [];
    const priorityCards = prioritySource.map((raw) => {
      const lesson = lessons.get(raw.lessonId);
      if (!lesson) return null;
      const unit = units.get(lesson.unitId) || {};
      return {
        id: clean(raw.id),
        courseId: course.id,
        lessonId: lesson.id,
        unitId: lesson.unitId,
        discipline: clean(lesson.discipline || unit.discipline || unit.title || 'Conteúdo'),
        topic: clean(lesson.title),
        front: clean(raw.front),
        back: clean(raw.back),
        details: Array.isArray(raw.details) ? raw.details.map(clean).filter(Boolean) : [],
        tags: [...new Set([...(Array.isArray(lesson.tags) ? lesson.tags : []), 'alta incidência'].map(clean).filter(Boolean))],
        difficulty: 'Estratégico',
        source: 'alta-incidencia',
        priority: raw.priority === 'high' ? 'high' : '',
        incidence: clean(raw.incidence),
        evidence: clean(window.VERSA_PRIORITY_FLASHCARDS?.basisByCourse?.[course.id]?.evidence)
      };
    }).filter(Boolean);

    return [...baseCards, ...priorityCards];
  }

  window.VERSA_FLASHCARDS = Object.freeze({
    version: '1.7.1',
    buildCourse
  });
})();
