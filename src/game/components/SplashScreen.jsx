// SplashScreen.jsx
import { useEffect } from 'react';
import mascotImg from '../assets/mascot_main.png';

export default function SplashScreen({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2200);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="gm-splash">
      <img
        src={mascotImg}
        alt="Gappu Muni mascot"
        className="gm-splash-mascot"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
      <div className="gm-splash-logo">
        Gappu <span>Muni</span>
      </div>
      <div className="gm-splash-tagline">Oye, tu kaun hai? 🤔</div>
      <div className="gm-splash-loader">
        <div className="gm-splash-dot" />
        <div className="gm-splash-dot" />
        <div className="gm-splash-dot" />
      </div>
    </div>
  );
}
