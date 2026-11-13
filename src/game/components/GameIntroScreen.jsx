// GameIntroScreen.jsx — Shows category details and Start button
export default function GameIntroScreen({ category, onStart, onBack, freeGamesRemaining }) {
  return (
    <div className="gm-screen" style={{ animation: 'gm-fade-in 0.4s ease' }}>
      {/* Top bar */}
      <div className="gm-topbar">
        <button className="gm-btn gm-btn-back" onClick={onBack} style={{ width: 'auto', minHeight: 'auto', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
          ← Wapas
        </button>
        <span className="gm-free-badge">{freeGamesRemaining} free baaki</span>
      </div>

      <div className="gm-intro-screen">
        {/* Category banner */}
        <div
          className="gm-intro-category-banner"
          style={{ background: `linear-gradient(135deg, ${category.gradientFrom}, ${category.gradientTo})` }}
        >
          <span className="gm-intro-emoji">{category.emoji}</span>
          <div className="gm-intro-title">{category.name}</div>
          <div className="gm-intro-desc">{category.description}</div>
        </div>

        {/* Info cards */}
        <div className="gm-info-card">
          <span className="gm-info-icon">❓</span>
          <div className="gm-info-text">
            <strong>10 sawalon</strong> mein Gappu Muni tera character pakad lega.
            Seedha sach sach jawab dena! 😄
          </div>
        </div>

        <div className="gm-info-card">
          <span className="gm-info-icon">⏱️</span>
          <div className="gm-info-text">
            <strong>2-3 minute</strong> lagenge. Beech mein wapas bhi ja sakta hai.
          </div>
        </div>

        <div className="gm-info-card">
          <span className="gm-info-icon">🎯</span>
          <div className="gm-info-text">
            Yeh <strong>entertainment ke liye hai</strong> — scientific assessment nahi.
            Enjoy karo! ✨
          </div>
        </div>

        {category.id === 'mythology' && (
          <div className="gm-info-card" style={{ borderColor: 'rgba(112,71,235,0.35)', background: 'var(--gm-purple-light)' }}>
            <span className="gm-info-icon">🙏</span>
            <div className="gm-info-text">
              Mythological results <strong>personality traits</strong> share karte hain —
              yeh religious claim nahi hai. Respectful entertainment hai. 🕊️
            </div>
          </div>
        )}

        <div className="gm-spacer" style={{ minHeight: '1.5rem' }} />

        <button className="gm-btn gm-btn-primary" onClick={onStart} id="btn-start-game">
          🎮 Khel Shuru Karo!
        </button>
      </div>
    </div>
  );
}
