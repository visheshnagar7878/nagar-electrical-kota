// useGameSession.js — Game state management hook
// Tracks screen navigation, answers, free play count, and result

import { useState, useCallback, useRef } from 'react';
import { findMatch, getTopUserTraits } from '../engine/matchingEngine.js';
import { getQuestionsByCategory } from '../engine/questions.js';

const FREE_GAMES_KEY = 'gm_free_games_used';
const FREE_GAMES_MAX = 5;

function getFreeGamesUsed() {
  try {
    return parseInt(localStorage.getItem(FREE_GAMES_KEY) || '0', 10);
  } catch {
    return 0;
  }
}

function incrementFreeGames() {
  try {
    const current = getFreeGamesUsed();
    localStorage.setItem(FREE_GAMES_KEY, String(current + 1));
    return current + 1;
  } catch {
    return 0;
  }
}

export const SCREENS = {
  SPLASH: 'splash',
  HOME: 'home',
  CATEGORY: 'category',
  INTRO: 'intro',
  QUESTION: 'question',
  THINKING: 'thinking',
  RESULT: 'result',
  PAYWALL: 'paywall',
  SETTINGS: 'settings',
};

export default function useGameSession() {
  const [screen, setScreen] = useState(SCREENS.SPLASH);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { questionId: answerOption }
  const [selectedAnswer, setSelectedAnswer] = useState(null); // current Q selection
  const [result, setResult] = useState(null);
  const [freeGamesUsed, setFreeGamesUsed] = useState(getFreeGamesUsed);
  const gameCompletedRef = useRef(false); // idempotency guard

  const freeGamesRemaining = Math.max(0, FREE_GAMES_MAX - freeGamesUsed);

  // Navigate to home after splash
  const onSplashDone = useCallback(() => setScreen(SCREENS.HOME), []);

  // Select a category and check paywall
  const selectCategory = useCallback((category) => {
    if (freeGamesUsed >= FREE_GAMES_MAX) {
      setScreen(SCREENS.PAYWALL);
      return;
    }
    setSelectedCategory(category);
    setScreen(SCREENS.INTRO);
  }, [freeGamesUsed]);

  // Start the game from the intro screen
  const startGame = useCallback(() => {
    if (!selectedCategory) return;
    const qs = getQuestionsByCategory(selectedCategory.id);
    setQuestions(qs);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setSelectedAnswer(null);
    setResult(null);
    gameCompletedRef.current = false;
    setScreen(SCREENS.QUESTION);
  }, [selectedCategory]);

  // Select an answer for the current question
  const selectAnswerOption = useCallback((answerOption) => {
    setSelectedAnswer(answerOption);
  }, []);

  // Confirm the current answer and advance
  const confirmAnswer = useCallback(() => {
    if (!selectedAnswer) return;

    const currentQ = questions[currentQuestionIndex];
    const newAnswers = { ...answers, [currentQ.id]: selectedAnswer };
    setAnswers(newAnswers);

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex >= questions.length) {
      // All questions answered — show thinking screen then compute result
      setScreen(SCREENS.THINKING);
      setSelectedAnswer(null);
      setTimeout(() => {
        computeResult(selectedCategory, newAnswers);
      }, 3000);
    } else {
      setCurrentQuestionIndex(nextIndex);
      // Pre-select answer if user already answered this question (going forward)
      setSelectedAnswer(newAnswers[questions[nextIndex]?.id] || null);
    }
  }, [selectedAnswer, questions, currentQuestionIndex, answers, selectedCategory]);

  // Go back to previous question
  const goBackQuestion = useCallback(() => {
    if (currentQuestionIndex === 0) {
      setScreen(SCREENS.INTRO);
      return;
    }
    const prevIndex = currentQuestionIndex - 1;
    setCurrentQuestionIndex(prevIndex);
    setSelectedAnswer(answers[questions[prevIndex]?.id] || null);
  }, [currentQuestionIndex, answers, questions]);

  // Compute final result (called after thinking screen)
  const computeResult = useCallback((category, finalAnswers) => {
    const answersArray = Object.values(finalAnswers);
    const matchResult = findMatch(category.id, answersArray);
    const topTraits = getTopUserTraits(matchResult.traitProfile || {});

    setResult({ ...matchResult, topTraits });
    setScreen(SCREENS.RESULT);

    // Count as completed only once
    if (!gameCompletedRef.current) {
      gameCompletedRef.current = true;
      const newCount = incrementFreeGames();
      setFreeGamesUsed(newCount);
    }
  }, []);

  // Replay — reset game state, go back to category select
  const playAgain = useCallback(() => {
    if (freeGamesUsed >= FREE_GAMES_MAX) {
      setScreen(SCREENS.PAYWALL);
      return;
    }
    setSelectedCategory(null);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setSelectedAnswer(null);
    setResult(null);
    gameCompletedRef.current = false;
    setScreen(SCREENS.HOME);
  }, [freeGamesUsed]);

  // Try another category — go to home
  const tryAnotherCategory = useCallback(() => {
    if (freeGamesUsed >= FREE_GAMES_MAX) {
      setScreen(SCREENS.PAYWALL);
      return;
    }
    setSelectedCategory(null);
    setResult(null);
    gameCompletedRef.current = false;
    setScreen(SCREENS.HOME);
  }, [freeGamesUsed]);

  // Navigate back from various screens
  const goBack = useCallback(() => {
    if (screen === SCREENS.INTRO) setScreen(SCREENS.HOME);
    else if (screen === SCREENS.QUESTION) goBackQuestion();
    else if (screen === SCREENS.RESULT) setScreen(SCREENS.HOME);
    else if (screen === SCREENS.PAYWALL) setScreen(SCREENS.HOME);
    else if (screen === SCREENS.SETTINGS) setScreen(SCREENS.HOME);
    else setScreen(SCREENS.HOME);
  }, [screen, goBackQuestion]);

  const openSettings = useCallback(() => setScreen(SCREENS.SETTINGS), []);

  const currentQuestion = questions[currentQuestionIndex] || null;
  const progress = questions.length > 0
    ? Math.round((currentQuestionIndex / questions.length) * 100)
    : 0;

  return {
    screen,
    selectedCategory,
    questions,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: questions.length,
    selectedAnswer,
    answers,
    result,
    freeGamesUsed,
    freeGamesRemaining,
    progress,
    // actions
    onSplashDone,
    selectCategory,
    startGame,
    selectAnswerOption,
    confirmAnswer,
    goBackQuestion,
    playAgain,
    tryAnotherCategory,
    goBack,
    openSettings,
  };
}
