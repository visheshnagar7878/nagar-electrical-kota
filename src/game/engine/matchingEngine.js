// matchingEngine.js — Core game logic (pure functions, no UI, no Firebase)
// Deterministic, testable, and separated from presentation

import { TRAITS } from './traits.js';
import { getCharactersByCategory } from './characters.js';

/**
 * Aggregates all selected answers into a trait score map.
 * @param {Array} selectedAnswers — array of answerOption objects chosen by the user
 * @returns {Object} traitScores — { traitId: cumulativeScore }
 */
export function buildTraitProfile(selectedAnswers) {
  const traitScores = {};

  for (const answer of selectedAnswers) {
    if (!answer || !answer.traitMappings) continue;

    for (const [traitId, weight] of Object.entries(answer.traitMappings)) {
      traitScores[traitId] = (traitScores[traitId] || 0) + weight;
    }
  }

  // Normalise so that maximum score = 1.0 (prevents extreme answer counts skewing heavily)
  const maxScore = Math.max(...Object.values(traitScores), 0.001);
  const normalised = {};
  for (const [traitId, score] of Object.entries(traitScores)) {
    normalised[traitId] = score / maxScore;
  }

  return normalised;
}

/**
 * Scores a single character against the user's trait profile.
 * Score = sum of (userTraitScore[trait] * character.traitWeights[trait]) for all shared traits
 * @param {Object} character
 * @param {Object} traitProfile — normalised { traitId: 0.0–1.0 }
 * @returns {number} compatibility score
 */
export function scoreCharacter(character, traitProfile) {
  let score = 0;
  let totalPossible = 0;

  for (const [traitId, charWeight] of Object.entries(character.traitWeights)) {
    const userScore = traitProfile[traitId] || 0;
    score += userScore * charWeight;
    totalPossible += charWeight;
  }

  // Return as a percentage (0–100)
  return totalPossible > 0 ? Math.round((score / totalPossible) * 100) : 0;
}

/**
 * Tie-breaker: when two characters have the same score,
 * the one with higher total trait weight wins (more defined personality).
 * This is deterministic — same inputs always produce same output.
 */
function getTotalTraitWeight(character) {
  return Object.values(character.traitWeights).reduce((sum, w) => sum + w, 0);
}

/**
 * Main matching function.
 * @param {string} categoryId — which category to filter characters from
 * @param {Array} selectedAnswers — user's chosen answer objects
 * @returns {{ result: Character, score: number, explanation: string, ranked: Array }}
 */
export function findMatch(categoryId, selectedAnswers) {
  const characters = getCharactersByCategory(categoryId);

  if (!characters || characters.length === 0) {
    return { result: null, score: 0, explanation: 'No characters available for this category.', ranked: [] };
  }

  if (!selectedAnswers || selectedAnswers.length === 0) {
    // Fallback: return first character with 50% score
    return { result: characters[0], score: 50, explanation: 'Based on vibes only! 😄', ranked: [] };
  }

  const traitProfile = buildTraitProfile(selectedAnswers);

  // Score all characters
  const ranked = characters
    .map((character) => ({
      character,
      score: scoreCharacter(character, traitProfile),
      totalWeight: getTotalTraitWeight(character),
    }))
    .sort((a, b) => {
      // Primary: score descending
      if (b.score !== a.score) return b.score - a.score;
      // Tie-breaker: totalWeight descending (more defined character wins)
      return b.totalWeight - a.totalWeight;
    });

  const best = ranked[0];
  const explanation = generateExplanation(best.character, traitProfile);

  return {
    result: best.character,
    score: best.score,
    explanation,
    ranked: ranked.slice(0, 3), // top 3 for debugging
    traitProfile, // expose for result screen
  };
}

/**
 * Generates a short explanation of WHY this character was matched.
 * Uses the top 3 strongest matching traits.
 */
function generateExplanation(character, traitProfile) {
  // Find traits where both user and character score high
  const sharedStrengths = Object.entries(character.traitWeights)
    .map(([traitId, charWeight]) => ({
      traitId,
      charWeight,
      userScore: traitProfile[traitId] || 0,
      combined: charWeight * (traitProfile[traitId] || 0),
    }))
    .filter((t) => t.combined > 0.2)
    .sort((a, b) => b.combined - a.combined)
    .slice(0, 3);

  if (sharedStrengths.length === 0) {
    return `Teri personality unique hai — ${character.name} ke saath kuch vibes match karte hain! ✨`;
  }

  const traitNames = sharedStrengths
    .map((t) => TRAITS[t.traitId]?.name || t.traitId)
    .join(', ');

  return `Teri ${traitNames} qualities ne ${character.name} se tera connection strong banaya! ⚡`;
}

/**
 * Returns the top 3 traits from the user's profile (for display on result screen).
 */
export function getTopUserTraits(traitProfile, limit = 3) {
  return Object.entries(traitProfile)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([traitId, score]) => ({
      ...(TRAITS[traitId] || { id: traitId, name: traitId, emoji: '✨' }),
      score: Math.round(score * 100),
    }));
}

// ─── Unit-testable exports ───────────────────────────────────────────────────
export { buildTraitProfile as _buildTraitProfile };
