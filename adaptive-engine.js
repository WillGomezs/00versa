/* Versa Concursos — Mastery Engine v2.0.0.
   Evolução aditiva do motor v1.5.0: preserva progresso legado e acrescenta
   calibração metacognitiva, retenção, ritmo, erros convictos e prática intercalada. */
(() => {
  "use strict";

  const STATUS = Object.freeze({
    "not-started": { label: "Desconhecido", short: "Novo" },
    learning: { label: "Familiar", short: "Familiar" },
    consolidating: { label: "Recuperável", short: "Recuperável" },
    mastered: { label: "Consolidado", short: "Consolidado" },
  });
  const CONFIDENCE = Object.freeze({
    guess: { label: "Chutei", value: 0.2 },
    low: { label: "Pouco certo", value: 0.45 },
    medium: { label: "Certo", value: 0.75 },
    high: { label: "Muito certo", value: 1 },
  });
  const ERROR_TYPES = Object.freeze({
    "erro-convicto": "Erro convicto",
    conteudo: "Não sabia o conteúdo",
    confusao: "Confundi conceitos",
    interpretacao: "Interpretei mal",
    desatencao: "Desatenção",
    chute: "Chute",
    procedimento: "Erro de procedimento",
  });

  const clamp = (value, min, max) => Math.min(max, Math.max(min, Number(value) || 0));
  const isoDate = (value = Date.now()) => new Date(value).toISOString().slice(0, 10);
  const addDays = (date, days) => {
    const point = new Date(`${date}T12:00:00Z`);
    point.setUTCDate(point.getUTCDate() + days);
    return point.toISOString().slice(0, 10);
  };
  const median = (values) => {
    const data = values.filter(Number.isFinite).slice().sort((a, b) => a - b);
    if (!data.length) return null;
    const middle = Math.floor(data.length / 2);
    return data.length % 2 ? data[middle] : (data[middle - 1] + data[middle]) / 2;
  };

  function normalizeAttempt(item) {
    const source = item && typeof item === "object" ? item : {};
    return {
      kind: ["lesson", "pretest", "diagnostic", "simulation", "review", "transfer", "mixed"].includes(source.kind)
        ? source.kind
        : "lesson",
      questionId: String(source.questionId || "").slice(0, 100),
      lessonId: String(source.lessonId || "").slice(0, 100),
      correct: source.correct === true,
      selected: Number.isInteger(source.selected) ? source.selected : null,
      date: /^\d{4}-\d{2}-\d{2}$/.test(source.date || "") ? source.date : isoDate(),
      confidence: Object.prototype.hasOwnProperty.call(CONFIDENCE, source.confidence) ? source.confidence : null,
      responseMs: Number.isFinite(Number(source.responseMs)) ? clamp(source.responseMs, 0, 60 * 60 * 1000) : null,
      recallUsed: source.recallUsed === true,
      transfer: source.transfer === true || source.kind === "transfer",
    };
  }

  function normalizeStore(raw) {
    const source = raw && typeof raw === "object" ? raw : {};
    const attempts = (Array.isArray(source.attempts) ? source.attempts : [])
      .map(normalizeAttempt)
      .filter((item) => item.questionId && item.lessonId)
      .slice(-5000);
    const lessonReviews = {};
    if (source.lessonReviews && typeof source.lessonReviews === "object") {
      Object.entries(source.lessonReviews)
        .filter(([id]) => /^[a-z0-9][a-z0-9_-]{0,99}$/i.test(id))
        .slice(-2500)
        .forEach(([id, record]) => {
          const item = record && typeof record === "object" ? record : {};
          lessonReviews[id] = {
            due: /^\d{4}-\d{2}-\d{2}$/.test(item.due || "") ? item.due : null,
            intervalDays: clamp(item.intervalDays, 0, 3650),
            ease: clamp(item.ease || 2.3, 1.3, 3.2),
            repetitions: clamp(item.repetitions, 0, 10000),
            lapses: clamp(item.lapses, 0, 10000),
            lastScore: clamp(item.lastScore, 0, 100),
            lastReviewed: /^\d{4}-\d{2}-\d{2}$/.test(item.lastReviewed || "") ? item.lastReviewed : null,
          };
        });
    }
    return { version: 2, attempts, lessonReviews };
  }

  function recordAttempt(raw, attempt) {
    const store = normalizeStore(raw);
    store.attempts.push(normalizeAttempt(attempt));
    store.attempts = store.attempts.slice(-5000);
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

  function confidenceQuality(attempt) {
    if (!attempt.confidence) return null;
    const level = attempt.confidence;
    if (attempt.correct) return ({ guess: 72, low: 82, medium: 94, high: 100 })[level];
    return ({ guess: 58, low: 44, medium: 25, high: 8 })[level];
  }

  function calibrationScore(attempts) {
    const values = attempts.map(confidenceQuality).filter(Number.isFinite);
    return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null;
  }

  function responseEfficiency(attempts) {
    const times = attempts.map((item) => item.responseMs).filter((value) => Number.isFinite(value) && value >= 1000);
    if (!times.length) return null;
    const med = median(times) / 1000;
    // Pequeno peso no domínio: não premia pressa; apenas sinaliza automatização excessivamente lenta.
    if (med <= 90) return 100;
    if (med <= 150) return 88;
    if (med <= 240) return 75;
    return 62;
  }

  function retentionScore(attempts, review) {
    const correctDates = new Set(attempts.filter((item) => item.correct).map((item) => item.date));
    if (correctDates.size >= 3 || (review?.repetitions || 0) >= 3) return 100;
    if (correctDates.size >= 2 || (review?.repetitions || 0) >= 2) return 90;
    if (correctDates.size >= 1 || (review?.repetitions || 0) >= 1) return 60;
    return 30;
  }

  function lessonMastery(course, progress, lesson) {
    const adaptive = normalizeStore(progress.adaptive);
    const attempts = adaptive.attempts.filter((item) => item.lessonId === lesson.id).slice(-40);
    const practiceAttempts = attempts.filter((item) => item.kind !== "pretest");
    const questionScore = practiceAttempts.length
      ? (practiceAttempts.filter((item) => item.correct).length / practiceAttempts.length) * 100
      : null;
    const lessonScore = Number.isFinite(Number(progress.scores?.[lesson.id]))
      ? clamp(progress.scores[lesson.id], 0, 100)
      : null;
    const cardsScore = flashScore(course, progress, lesson.id);
    const calibration = calibrationScore(practiceAttempts);
    const efficiency = responseEfficiency(practiceAttempts);
    const review = adaptive.lessonReviews[lesson.id];
    const retention = retentionScore(practiceAttempts, review);
    const evidence = [
      lessonScore === null ? null : [lessonScore, 0.35],
      questionScore === null ? null : [questionScore, 0.30],
      cardsScore === null ? null : [cardsScore, 0.15],
      calibration === null ? null : [calibration, 0.10],
      practiceAttempts.length ? [retention, 0.07] : null,
      efficiency === null ? null : [efficiency, 0.03],
    ].filter(Boolean);
    const lessonErrors = (progress.errors || []).filter(
      (error) => error.lessonId === lesson.id && error.status !== "resolved",
    );
    const activeErrors = lessonErrors.length;
    const convictionErrors = lessonErrors.filter((error) => error.category === "erro-convicto").length;
    const weighted = evidence.length
      ? evidence.reduce((sum, [value, weight]) => sum + value * weight, 0) /
        evidence.reduce((sum, [, weight]) => sum + weight, 0)
      : 0;
    const penalty = Math.min(28, activeErrors * 4 + convictionErrors * 5);
    const score = Math.round(clamp(weighted - penalty, 0, 100));
    const distinctDates = new Set(practiceAttempts.filter((item) => item.correct).map((item) => item.date)).size;
    const spacedEvidence = distinctDates >= 2 || (review?.repetitions || 0) >= 2;
    let status = "not-started";
    if (evidence.length || attempts.length) status = score < 60 ? "learning" : "consolidating";
    if (score >= 80 && spacedEvidence && activeErrors === 0 && retention >= 80) status = "mastered";
    const confidence = evidence.length >= 4 || practiceAttempts.length >= 6
      ? "alta"
      : evidence.length >= 2 || practiceAttempts.length >= 3
        ? "média"
        : evidence.length || attempts.length
          ? "baixa"
          : "sem dados";
    return {
      lessonId: lesson.id,
      score,
      status,
      label: STATUS[status].label,
      short: STATUS[status].short,
      confidence,
      activeErrors,
      convictionErrors,
      attempts: practiceAttempts.length,
      spacedEvidence,
      retention,
      calibration: calibration === null ? null : Math.round(calibration),
      medianResponseSeconds: efficiency === null ? null : Math.round((median(practiceAttempts.map((item) => item.responseMs).filter(Number.isFinite)) || 0) / 1000),
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
    const retentionValues = studied.map((item) => item.retention).filter(Number.isFinite);
    const calibrationValues = studied.map((item) => item.calibration).filter(Number.isFinite);
    return {
      score,
      counts,
      studied: studied.length,
      lessons,
      retention: retentionValues.length ? Math.round(retentionValues.reduce((a, b) => a + b, 0) / retentionValues.length) : 0,
      calibration: calibrationValues.length ? Math.round(calibrationValues.reduce((a, b) => a + b, 0) / calibrationValues.length) : 0,
    };
  }

  function errorSummary(progress) {
    const active = (progress.errors || []).filter((error) => error.status !== "resolved");
    const byType = {};
    active.forEach((error) => {
      const key = Object.prototype.hasOwnProperty.call(ERROR_TYPES, error.category) ? error.category : "conteudo";
      byType[key] = (byType[key] || 0) + 1;
    });
    return {
      total: active.length,
      conviction: byType["erro-convicto"] || 0,
      byType,
      labels: ERROR_TYPES,
    };
  }

  function paceSummary(course, progress) {
    const adaptive = normalizeStore(progress.adaptive);
    const valid = adaptive.attempts.filter((item) => Number.isFinite(item.responseMs) && item.responseMs >= 1000 && item.kind !== "pretest");
    const lessonById = new Map(course.lessons.map((lesson) => [lesson.id, lesson]));
    const unitById = new Map(course.units.map((unit) => [unit.id, unit]));
    const disciplineOf = (attempt) => {
      const lesson = lessonById.get(attempt.lessonId);
      const unit = lesson && unitById.get(lesson.unitId);
      return unit?.discipline || unit?.title || "Conteúdo";
    };
    const disciplines = [...new Set(valid.map(disciplineOf))].map((name) => {
      const rows = valid.filter((item) => disciplineOf(item) === name);
      const avgSeconds = rows.reduce((sum, item) => sum + item.responseMs, 0) / rows.length / 1000;
      return { name, attempts: rows.length, avgSeconds: Math.round(avgSeconds) };
    }).sort((a, b) => b.avgSeconds - a.avgSeconds);
    const avgSeconds = valid.length ? valid.reduce((sum, item) => sum + item.responseMs, 0) / valid.length / 1000 : 0;
    const projectedSeconds = avgSeconds && Number(course.exam?.questions) ? Math.round(avgSeconds * Number(course.exam.questions)) : 0;
    return { attempts: valid.length, avgSeconds: Math.round(avgSeconds), projectedSeconds, disciplines };
  }

  function buildDailyPlan(course, progress, minutes = 45, now = isoDate()) {
    const total = clamp(minutes, 20, 90);
    const mastery = courseMastery(course, progress);
    const byId = new Map(mastery.lessons.map((item) => [item.lessonId, item]));
    const adaptive = normalizeStore(progress.adaptive);
    const used = new Set();
    const candidates = [];
    const push = (type, label, lesson, weight, reason, extra = {}) => {
      if (!lesson || used.has(lesson.id)) return;
      used.add(lesson.id);
      candidates.push({ type, label, lessonId: lesson.id, title: lesson.title, weight, reason, ...extra });
    };

    const activeErrors = (progress.errors || []).filter((error) => error.status !== "resolved");
    const conviction = activeErrors.find((error) => error.category === "erro-convicto");
    const convictionLesson = conviction && course.lessons.find((lesson) => lesson.id === conviction.lessonId);
    push("conviction", "Corrigir erro convicto", convictionLesson, 0.22, "Você errou este conceito com alta confiança; ele recebe prioridade máxima.");

    const due = course.lessons
      .filter((lesson) => adaptive.lessonReviews[lesson.id]?.due && adaptive.lessonReviews[lesson.id].due <= now)
      .sort((a, b) => (byId.get(a.id)?.score || 0) - (byId.get(b.id)?.score || 0))[0];
    push("review", "Revisão em risco de esquecimento", due, 0.23, "A revisão está vencida e protege a retenção de longo prazo.");

    const weak = course.lessons
      .filter((lesson) => {
        const value = byId.get(lesson.id);
        return value.status === "learning" || value.activeErrors > 0;
      })
      .sort((a, b) => {
        const av = byId.get(a.id), bv = byId.get(b.id);
        return (bv.activeErrors - av.activeErrors) || (av.score - bv.score);
      })[0];
    push("focus", "Ponto fraco prioritário", weak, 0.20, "Baixo domínio, erro ativo ou recuperação ainda instável.");

    const completed = new Set(progress.completed || []);
    const unitOrder = new Map(course.units.map((unit, index) => [unit.id, index]));
    const ordered = course.lessons.slice().sort((a, b) => unitOrder.get(a.unitId) - unitOrder.get(b.unitId) || a.order - b.order);
    const next = ordered.find((lesson) => !completed.has(lesson.id) && (lesson.prerequisites || []).every((id) => completed.has(id))) || ordered.find((lesson) => !completed.has(lesson.id));
    push("new", "Conteúdo novo", next, 0.25, "Próxima etapa disponível na progressão da trilha.");

    // A prática intercalada não duplica uma lição: ela abre um treino misto com assuntos estudados.
    if (mastery.studied >= 2) {
      candidates.push({
        type: "mixed",
        label: "Prática intercalada",
        title: "Misturar assuntos já estudados",
        weight: 0.12,
        reason: "Treine identificar qual conceito usar, como acontece na prova.",
        simType: "adaptive-mixed",
        view: "simulation",
      });
    }

    const flashDue = (course.flashcards || []).filter((card) => {
      const record = progress.flashcards?.cards?.[card.id];
      return record?.due && record.due <= now;
    }).length;
    candidates.push({
      type: "flashcards",
      label: "Recuperação ativa",
      view: "flashcards",
      title: flashDue ? `${flashDue} flashcards vencidos` : "Flashcards do plano",
      weight: 0.10,
      reason: flashDue ? "Cartões disponíveis para revisão agora." : "Recupere conceitos essenciais sem consultar a resposta.",
    });

    // Evita excesso de microtarefas em sessões curtas.
    const maxBlocks = total <= 30 ? 4 : total <= 45 ? 5 : 6;
    const blocks = candidates.slice(0, maxBlocks);
    const weightSum = blocks.reduce((sum, block) => sum + block.weight, 0) || 1;
    let assigned = 0;
    blocks.forEach((block, index) => {
      const minutesForBlock = index === blocks.length - 1
        ? total - assigned
        : Math.max(4, Math.round(total * (block.weight / weightSum)));
      block.minutes = minutesForBlock;
      assigned += minutesForBlock;
    });
    if (assigned !== total && blocks.length) blocks[blocks.length - 1].minutes += total - assigned;
    const priority = blocks.find((block) => block.lessonId) || blocks[0];
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
    version: "2.0.0",
    statuses: STATUS,
    confidence: CONFIDENCE,
    errorTypes: ERROR_TYPES,
    normalizeStore,
    recordAttempt,
    scheduleLesson,
    lessonMastery,
    courseMastery,
    buildDailyPlan,
    diagnosticSummary,
    errorSummary,
    paceSummary,
    calibrationScore,
  });
})();
