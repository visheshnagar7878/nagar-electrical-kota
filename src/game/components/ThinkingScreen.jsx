// ThinkingScreen.jsx — Gappu Muni "analysing" animation
import { useState, useEffect } from 'react';
import mascotThinking from '../assets/mascot_thinking.png';
import mascotMain from '../assets/mascot_main.png';

const THINKING_MESSAGES = [
  'Tere vibes check kar raha hoon... 🔍',
  'Clues mil rahe hain... 🧩',
  'Teri energy analyze ho rahi hai... ⚡',
  'Character pakad liya almost! 🎯',
  'Bas, mil gaya! 🎉',
];

export default function ThinkingScreen() {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((i) => (i + 1) % THINKING_MESSAGES.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gm-thinking">
      <img
        src={mascotThinking}
        alt="Gappu Muni thinking"
        className="gm-thinking-mascot"
        onError={(e) => {
          e.target.src = mascotMain;
        }}
      />
      <div className="gm-thinking-text" key={msgIndex} style={{ animation: 'gm-fade-in 0.3s ease' }}>
        {THINKING_MESSAGES[msgIndex]}
      </div>
      <div className="gm-thinking-dots">
        <span /><span /><span />
      </div>
    </div>
  );
}
