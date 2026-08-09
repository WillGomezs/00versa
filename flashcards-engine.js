/* Versa Concursos — agendamento local de flashcards v1.3.0. */
(() => {
  "use strict";

  const DAY = 24 * 60 * 60 * 1000;
  const MINUTE = 60 * 1000;
  const RATINGS = new Set(["again", "hard", "good", "easy"]);

  function normalizeStore(raw) {
    const source = raw && typeof raw === "object" ? raw : {};
    const cards = {};
    if (source.cards && typeof source.cards === "object") {
      Object.entries(source.cards)
        .filter(([id]) => /^[a-z0-9][a-z0-9_-]{0,99}$/i.test(id))
        .slice(-5000)
        .forEach(([id, card]) => {
          cards[id] = normalizeCard(card);
        });
    }
    return {
      cards,
      sessions: Array.isArray(source.sessions)
        ? source.sessions.slice(-60)
        : [],
    };
  }

  function normalizeCard(raw) {
    const source = raw && typeof raw === "object" ? raw : {};
    return {
      due: source.due || null,
      intervalDays: Number.isFinite(source.intervalDays)
        ? Math.max(0, source.intervalDays)
        : 0,
      ease: Number.isFinite(source.ease)
        ? Math.min(3.2, Math.max(1.3, source.ease))
        : 2.5,
      repetitions: Number.isInteger(source.repetitions)
        ? Math.max(0, source.repetitions)
        : 0,
      lapses: Number.isInteger(source.lapses) ? Math.max(0, source.lapses) : 0,
      reviewCount: Number.isInteger(source.reviewCount)
        ? Math.max(0, source.reviewCount)
        : 0,
      lastReviewed: source.lastReviewed || null,
      lastRating: RATINGS.has(source.lastRating) ? source.lastRating : null,
      lastXpDate: source.lastXpDate || null,
    };
  }

  function schedule(raw, rating, nowValue = Date.now()) {
    if (!RATINGS.has(rating))
      throw new Error(`Classificação inválida: ${rating}`);
    const previous = normalizeCard(raw);
    const next = { ...previous };
    const now = new Date(nowValue);
    let wait = DAY;

    if (rating === "again") {
      next.intervalDays = 0;
      next.ease = Math.max(1.3, next.ease - 0.2);
      next.repetitions = 0;
      next.lapses += 1;
      wait = 10 * MINUTE;
    } else if (rating === "hard") {
      next.intervalDays = previous.repetitions
        ? Math.max(1, Math.round(Math.max(previous.intervalDays, 1) * 1.2))
        : 1;
      next.ease = Math.max(1.3, next.ease - 0.15);
      next.repetitions += 1;
      wait = next.intervalDays * DAY;
    } else if (rating === "good") {
      next.intervalDays = previous.repetitions
        ? Math.max(
            2,
            Math.round(Math.max(previous.intervalDays, 1) * next.ease),
          )
        : 3;
      next.repetitions += 1;
      wait = next.intervalDays * DAY;
    } else {
      next.ease = Math.min(3.2, next.ease + 0.15);
      next.intervalDays = previous.repetitions
        ? Math.max(
            4,
            Math.round(Math.max(previous.intervalDays, 1) * (next.ease + 0.5)),
          )
        : 7;
      next.repetitions += 1;
      wait = next.intervalDays * DAY;
    }

    next.reviewCount += 1;
    next.lastReviewed = now.toISOString();
    next.lastRating = rating;
    next.due = new Date(nowValue + wait).toISOString();
    return next;
  }

  function isDue(raw, nowValue = Date.now()) {
    const card = normalizeCard(raw);
    return Boolean(card.due) && new Date(card.due).getTime() <= nowValue;
  }

  function dueLabel(raw, rating, nowValue = Date.now()) {
    const next = schedule(raw, rating, nowValue);
    if (rating === "again") return "10 min";
    if (next.intervalDays === 1) return "1 dia";
    return `${next.intervalDays} dias`;
  }

  window.VERSA_FLASHCARDS_ENGINE = Object.freeze({
    version: "1.3.0",
    normalizeStore,
    normalizeCard,
    schedule,
    isDue,
    dueLabel,
  });
})();
