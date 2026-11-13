// QuestionScreen.jsx — One question at a time with 4 answer cards
import { useState, useEffect } from 'react';

export default function QuestionScreen({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onConfirm,
  onBack,
  progress,
}) {
  const [animKey, setAnimKey] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastTap, setLastTap] = useState(0); // double-tap prevention

  // Animate in on new question
  useEffect(() => {
    setAnimKey((k) => k + 1);
    setIsSubmitting(false);
  }, [questionIndex]);

  const handleConfirm = () => {
    if (isSubmitting || !selectedAnswer) return;
    const now = Date.now();
    if (now - lastTap < 500) return; // debounce double-tap
    setLastTap(now);
    setIsSubmitting(true);
    onConfirm();
  };

  if (!question) return null;

  return (
    <div className="gm-screen" style={{ animation: 'gm-fade-in 0.35s ease' }}>
      {/* Top bar */}
      <div className="gm-topbar">
        <button
          className="gm-btn gm-btn-back"
          onClick={onBack}
          style={{ width: 'auto', minHeight: 'auto', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
        >
          ←
        </button>
        <span style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--gm-text-muted)' }}>
          Sawaal {questionIndex + 1} / {totalQuestions}
        </span>
        <span style={{ width: 70 }} /> {/* spacer */}
      </div>

      <div className="gm-question-screen">
        {/* Progress */}
        <div className="gm-progress-wrap">
          <div className="gm-progress-label">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="gm-progress-track">
            <div className="gm-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Question card */}
        <div className="gm-question-card gm-question-enter" key={animKey}>
          <div className="gm-question-num">Sawaal {questionIndex + 1}</div>
          <div className="gm-question-text">{question.text}</div>
          {question.subtext && (
            <div className="gm-question-subtext">{question.subtext}</div>
          )}
        </div>

        {/* Answer cards */}
        <div className="gm-answers-grid" key={`answers-${animKey}`} style={{ animation: 'gm-slide-up 0.4s 0.1s both' }}>
          {question.answerOptions.map((option) => {
            const isSelected = selectedAnswer?.id === option.id;
            return (
              <button
                key={option.id}
                className={`gm-answer-card ${isSelected ? 'selected' : ''}`}
                onClick={() => onSelectAnswer(option)}
                aria-pressed={isSelected}
                aria-label={option.text}
              >
                <span className="gm-answer-check">✓</span>
                <span>{option.text}</span>
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="gm-nav-buttons">
          <button
            className="gm-btn gm-btn-back"
            onClick={onBack}
            style={{ flex: '0 0 auto', width: 'auto', padding: '0.875rem 1.25rem' }}
          >
            ←
          </button>
          <button
            className="gm-btn gm-btn-primary"
            onClick={handleConfirm}
            disabled={!selectedAnswer || isSubmitting}
            style={{ flex: 1 }}
            id="btn-next-question"
          >
            {questionIndex + 1 >= totalQuestions ? '🎯 Result Dekho!' : 'Aage Bado →'}
          </button>
        </div>
      </div>
    </div>
  );
}
