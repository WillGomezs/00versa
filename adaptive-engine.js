/* Versa Concursos — motor adaptativo transparente v1.5.0. */
(() => {
  "use strict";

  const STATUS = Object.freeze({
    "not-started": { label: "Não estudado", short: "Novo" },
    learning: { label: "Em aprendizagem", short: "Reforçar" },
    consolidating: { label: "Em consolidação", short: "Consolidar" },
    mastered: { label: "Dominado", short: "Dominado" },
  });
  const clamp = (value, min, max) => Math.min(max, Math.max(min, Number(value) || 0));
  const isoDate = (value = Date.now()) => new Date(value).toISOString().slice(0, 10);
  const addDays = (date, days) => {
    const point = new Date(`${date}T12:00:00Z`);
    point.setUTCDate(point.getUTCDate() + days);
    return point.toISOString().slice(0, 10);
  };

  function normalizeAttempt(item) {
    const source = item && typeof item === "object" ? item : {};
    return {
      kind: ["lesson", "diagnostic", "simulation", "review"].includes(source.kind)
        ? source.kind
        : "lesson",
      questionId: String(source.questionId || "").slice(0, 100),
      lessonId: String(source.lessonId || "").slice(0, 100),
      correct: source.correct === true,
      selected: Number.isInteger(source.selected) ? source.selected : null,
      date: /^\d{4}-\d{2}-\d{2}$/.test(source.date || "") ? source.date : isoDate(),
    };
  }

  function normalizeStore(raw) {
    const source = raw && typeof raw === "object" ? raw : {};
    const attempts = (Array.isArray(source.attempts) ? source.attempts : [])
      .map(normalizeAttempt)
      .filter((item) => item.questionId && item.lessonId)
      .slice(-3000);
    const lessonReviews = {};
    if (source.lessonReviews && typeof source.lessonReviews === "object") {
      Object.entries(source.lessonReviews)
        .filter(([id]) => /^[a-z0-9][a-z0-9_-]{0,99}$/i.test(id))
        .slice(-2000)
        .forEach(([id, record]) => {
          const item = record && typeof record === "object" ? record : {};
          lessonReviews[id] = {
            due: /^\d{4}-\d{2}-\d{2}$/.test(item.due || "") ? item.due : null,
            intervalDays: clamp(item.intervalDays, 0, 3650),
            ease: clamp(item.ease || 2.3, 1.3, 3.2),
            repetitions: clamp(item.repetitions, 0, 10000),
            lapses: clamp(item.lapses, 0, 10000),
            lastScore: clamp(item.lastScore, 0, 100),
            lastReviewed: /^\d{4}-\d{2}-\d{2}$/.test(item.lastReviewed || "")
              ? item.lastReviewed
              : null,
          };
        });
    }
    return { version: 1, attempts, lessonReviews };
  }

  function recordAttempt(raw, attempt) {
    const store = normalizeStore(raw);
    store.attempts.push(normalizeAttempt(attempt));
    store.attempts = store.attempts.slice(-3000);
    return store;
  }

  function scheduleLesson(raw, lessonId, score, date = isoDate()) {
    const store = normalizeStore(raw);
    const previous = store.lessonReviews[lessonId] || {
      due: null,
      intervalDays: 0,
      ease: 2.3,
      repetitions: 0,
      lapses: 0,
      lastScore: 0,
      lastReviewed: null,
    };
    const next = { ...previous, lastScore: clamp(score, 0, 100), lastReviewed: date };
    if (score < 60) {
      next.intervalDays = 1;
      next.ease = Math.max(1.3, previous.ease - 0.2);
      next.repetitions = 0;
      next.lapses = previous.lapses + 1;
    } else if (score < 80) {
      next.intervalDays = previous.repetitions
        ? Math.max(2, Math.round(Math.max(previous.intervalDays, 1) * 1.4))
        : 2;
      next.ease = Math.max(1.3, previous.ease - 0.08);
      next.repetitions = previous.repetitions + 1;
    } else if (score < 90) {
      next.intervalDays = previous.repetitions
        ? Math.max(4, Math.round(Math.max(previous.intervalDays, 1) * previous.ease))
        : 4;
      next.repetitions = previous.repetitions + 1;
    } else {
      next.ease = Math.min(3.2, previous.ease + 0.1);
      next.intervalDays = previous.repetitions
        ? Math.max(7, Math.round(Math.max(previous.intervalDays, 1) * (next.ease + 0.25)))
        : 7;
      next.repetitions = previous.repetitions + 1;
    }
    next.due = addDays(date, next.intervalDays);
    store.lessonReviews[lessonId] = next;
    return store;
  }

  function flashScore(course, progress, lessonId) {
    const cards = (course.flashcards || []).filter((card) => card.lessonId === lessonId);
    const values = cards
      .map((card) => progress.flashcards?.cards?.[card.id]?.lastRating)
      .filter(Boolean)
      .map((rating) => ({ again: 25, hard: 55, good: 82, easy: 95 })[rating]);
    return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null;
  }

  function lessonMastery(course, progress, lesson) {
    const adaptive = normalizeStore(progress.adaptive);
    const attempts = adaptive.attempts.filter((item) => item.lessonId === lesson.id).slice(-30);
    const questionScore = attempts.length
      ? (attempts.filter((item) => item.correct).length / attempts.length) * 100
      : null;
    const lessonScore = Number.isFinite(Number(progress.scores?.[lesson.id]))
      ? clamp(progress.scores[lesson.id], 0, 100)
      : null;
    const cardsScore = flashScore(course, progress, lesson.id);
    const evidence = [
      lessonScore === null ? null : [lessonScore, 0.5],
      questionScore === null ? null : [questionScore, 0.3],
      cardsScore === null ? null : [cardsScore, 0.2],
    ].filter(Boolean);
    const activeErrors = (progress.errors || []).filter(
      (error) => error.lessonId === lesson.id && error.status !== "resolved",
    ).length;
    const weighted = evidence.length
      ? evidence.reduce((sum, [value, weight]) => sum + value * weight, 0) /
        evidence.reduce((sum, [, weight]) => sum + weight, 0)
      : 0;
    const score = Math.round(clamp(weighted - Math.min(20, activeErrors * 5), 0, 100));
    const review = adaptive.lessonReviews[lesson.id];
    const distinctDates = new Set(attempts.filter((item) => item.correct).map((item) => item.date)).size;
    const spacedEvidence = distinctDates >= 2 || (review?.repetitions || 0) >= 2;
    let status = "not-started";
    if (evidence.length) status = score < 60 ? "learning" : "consolidating";
    if (score >= 80 && spacedEvidence && activeErrors === 0) status = "mastered";
    const confidence = evidence.length >= 3 || attempts.length >= 5 ? "alta" : evidence.length >= 2 ? "média" : evidence.length ? "baixa" : "sem dados";
    return {
      lessonId: lesson.id,
      score,
      status,
      label: STATUS[status].label,
      short: STATUS[status].short,
      confidence,
      activeErrors,
      attempts: attempts.length,
      spacedEvidence,
      due: review?.due || null,
    };
  }

  function courseMastery(course, progress) {
    const lessons = course.lessons.map((lesson) => lessonMastery(course, progress, lesson));
    const studied = lessons.filter((item) => item.status !== "not-started");
    const score = studied.length
      ? Math.round(studied.reduce((sum, item) => sum + item.score, 0) / studied.length)
      : 0;
    const counts = Object.fromEntries(Object.keys(STATUS).map((status) => [status, lessons.filter((item) => item.status === status).length]));
    return { score, counts, studied: studied.length, lessons };
  }

  function buildDailyPlan(course, progress, minutes = 45, now = isoDate()) {
    const total = clamp(minutes, 20, 90);
    const mastery = courseMastery(course, progress);
    const byId = new Map(mastery.lessons.map((item) => [item.lessonId, item]));
    const adaptive = normalizeStore(progress.adaptive);
    const used = new Set();
    const blocks = [];
    const addLesson = (type, label, lesson, share, reason) => {
      if (!lesson || used.has(lesson.id)) return;
      used.add(lesson.id);
      blocks.push({ type, label, lessonId: lesson.id, title: lesson.title, minutes: Math.max(4, Math.round(total * share)), reason });
    };
    const due = course.lessons
      .filter((lesson) => adaptive.lessonReviews[lesson.id]?.due <= now)
      .sort((a, b) => (byId.get(a.id)?.score || 0) - (byId.get(b.id)?.score || 0))[0];
    const weak = course.lessons
      .filter((lesson) => {
        const value = byId.get(lesson.id);
        return value.status === "learning" || value.activeErrors > 0;
      })
      .sort((a, b) => {
        const av = byId.get(a.id), bv = byId.get(b.id);
        return (bv.activeErrors - av.activeErrors) || (av.score - bv.score);
      })[0];
    const completed = new Set(progress.completed || []);
    const unitOrder = new Map(course.units.map((unit, index) => [unit.id, index]));
    const ordered = course.lessons.slice().sort((a, b) => unitOrder.get(a.unitId) - unitOrder.get(b.unitId) || a.order - b.order);
    const next = ordered.find((lesson) => !completed.has(lesson.id) && (lesson.prerequisites || []).every((id) => completed.has(id))) || ordered.find((lesson) => !completed.has(lesson.id));
    addLesson("review", "Revisão vencida", due, 0.22, "Revisão agendada conforme o desempenho anterior.");
    addLesson("focus", "Ponto fraco prioritário", weak, 0.34, "Baixo domínio ou erros ativos neste conteúdo.");
    addLesson("new", "Conteúdo novo", next, 0.34, "Próxima etapa disponível na progressão da trilha.");
    const flashDue = (course.flashcards || []).filter((card) => {
      const record = progress.flashcards?.cards?.[card.id];
      return record?.due && record.due <= now;
    }).length;
    blocks.push({ type: "flashcards", label: "Recuperação ativa", view: "flashcards", title: flashDue ? `${flashDue} flashcards vencidos` : "Flashcards do plano", minutes: Math.max(4, total - blocks.reduce((sum, block) => sum + block.minutes, 0)), reason: flashDue ? "Cartões disponíveis para revisão agora." : "Reforce conceitos essenciais sem consultar a resposta." });
    const assigned = blocks.reduce((sum, block) => sum + block.minutes, 0);
    if (assigned !== total) blocks[blocks.length - 1].minutes = Math.max(1, blocks[blocks.length - 1].minutes + total - assigned);
    const priority = blocks.find((block) => block.type === "review") || blocks.find((block) => block.type === "focus") || blocks.find((block) => block.lessonId);
    return { totalMinutes: total, blocks, priorityLessonId: priority?.lessonId || next?.id || course.lessons[0]?.id };
  }

  function diagnosticSummary(course, details) {
    const rows = (Array.isArray(details) ? details : []).map((detail) => {
      const lesson = course.lessons.find((item) => item.id === detail.lessonId);
      const unit = lesson && course.units.find((item) => item.id === lesson.unitId);
      return { ...detail, lesson, unit, discipline: unit?.discipline || unit?.title || "Conteúdo" };
    }).filter((row) => row.lesson && row.unit);
    const aggregate = (key) => [...new Set(rows.map((row) => key(row)))].map((name) => {
      const selected = rows.filter((row) => key(row) === name);
      const correct = selected.filter((row) => row.correct).length;
      return { name, correct, total: selected.length, score: Math.round((correct / selected.length) * 100) };
    }).sort((a, b) => a.score - b.score || b.total - a.total);
    return {
      disciplines: aggregate((row) => row.discipline),
      units: aggregate((row) => row.unit.title),
      weakLessonIds: [...new Set(rows.filter((row) => !row.correct).map((row) => row.lesson.id))],
    };
  }

  window.VERSA_ADAPTIVE_ENGINE = Object.freeze({
    version: "1.5.0",
    statuses: STATUS,
    normalizeStore,
    recordAttempt,
    scheduleLesson,
    lessonMastery,
    courseMastery,
    buildDailyPlan,
    diagnosticSummary,
  });
})();
