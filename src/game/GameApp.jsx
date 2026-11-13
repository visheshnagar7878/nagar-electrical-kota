// GameApp.jsx — Root game controller / router
// Renders the correct screen based on game session state

import './game.css';
import useGameSession, { SCREENS } from './hooks/useGameSession.js';

// Screens
import SplashScreen from './components/SplashScreen.jsx';
import HomeScreen from './components/HomeScreen.jsx';
import GameIntroScreen from './components/GameIntroScreen.jsx';
import QuestionScreen from './components/QuestionScreen.jsx';
import ThinkingScreen from './components/ThinkingScreen.jsx';
import ResultScreen from './components/ResultScreen.jsx';
import PaywallScreen from './components/PaywallScreen.jsx';
import SettingsScreen from './components/SettingsScreen.jsx';

export default function GameApp() {
  const session = useGameSession();

  return (
    <div className="gm-root">
      {session.screen === SCREENS.SPLASH && (
        <SplashScreen onDone={session.onSplashDone} />
      )}

      {session.screen === SCREENS.HOME && (
        <HomeScreen
          onSelectCategory={session.selectCategory}
          freeGamesRemaining={session.freeGamesRemaining}
          onOpenSettings={session.openSettings}
        />
      )}

      {session.screen === SCREENS.INTRO && session.selectedCategory && (
        <GameIntroScreen
          category={session.selectedCategory}
          onStart={session.startGame}
          onBack={session.goBack}
          freeGamesRemaining={session.freeGamesRemaining}
        />
      )}

      {session.screen === SCREENS.QUESTION && session.currentQuestion && (
        <QuestionScreen
          question={session.currentQuestion}
          questionIndex={session.currentQuestionIndex}
          totalQuestions={session.totalQuestions}
          selectedAnswer={session.selectedAnswer}
          onSelectAnswer={session.selectAnswerOption}
          onConfirm={session.confirmAnswer}
          onBack={session.goBack}
          progress={session.progress}
        />
      )}

      {session.screen === SCREENS.THINKING && (
        <ThinkingScreen />
      )}

      {session.screen === SCREENS.RESULT && session.result && (
        <ResultScreen
          result={session.result}
          category={session.selectedCategory}
          onPlayAgain={session.playAgain}
          onTryAnother={session.tryAnotherCategory}
          freeGamesRemaining={session.freeGamesRemaining}
        />
      )}

      {session.screen === SCREENS.PAYWALL && (
        <PaywallScreen
          freeGamesUsed={session.freeGamesUsed}
          onBack={session.goBack}
        />
      )}

      {session.screen === SCREENS.SETTINGS && (
        <SettingsScreen onBack={session.goBack} />
      )}
    </div>
  );
}
