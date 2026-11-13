// HomeScreen.jsx
import mascotImg from '../assets/mascot_main.png';
import { CATEGORIES } from '../engine/categories.js';

export default function HomeScreen({ onSelectCategory, freeGamesRemaining, onOpenSettings }) {
  return (
    <div className="gm-screen" style={{ animation: 'gm-fade-in 0.4s ease' }}>
      {/* Top bar */}
      <div className="gm-topbar">
        <span className="gm-topbar-logo">Gappu <span>Muni</span></span>
        <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
          <span className="gm-free-badge">
            {freeGamesRemaining > 0 ? `${freeGamesRemaining} free 🎮` : '0 free 😬'}
          </span>
          <button
            onClick={onOpenSettings}
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'var(--gm-purple-light)', border: 'none',
              cursor: 'pointer', fontSize: '1.1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--gm-purple)',
            }}
            aria-label="Settings"
          >
            ⚙️
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="gm-home" style={{ overflowY: 'auto', flex: 1 }}>
        {/* Hero */}
        <div className="gm-hero-section">
          <img
            src={mascotImg}
            alt="Gappu Muni"
            className="gm-hero-mascot"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <h1 className="gm-hero-title">
            Oye, <span className="highlight-purple">tu</span>{' '}
            <span className="highlight-yellow">kaun</span> hai? 🤔
          </h1>
          <p className="gm-hero-subtitle">
            Gappu Muni tujhe 10 sawalon mein pakad lega —
            tera Bollywood match, meme alter ego, ya mythological vibe! 🎯
          </p>
        </div>

        {/* Categories */}
        <div className="gm-section-title">🎮 Category Choose Karo</div>
        <div className="gm-categories-grid">
          {CATEGORIES.filter((c) => c.isActive).map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              onClick={() => onSelectCategory(cat)}
            />
          ))}
        </div>

        {/* Footer note */}
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p className="gm-muted-text">
            {freeGamesRemaining > 0
              ? `${freeGamesRemaining} free game${freeGamesRemaining !== 1 ? 's' : ''} baaki hain 🎁`
              : 'Free games khatam! Unlock karo ₹15 mein 🚀'}
          </p>
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ category, onClick }) {
  return (
    <button
      className="gm-category-card"
      style={{ '--card-color': category.themeColor }}
      onClick={onClick}
      aria-label={`Play ${category.name}`}
    >
      <span className="gm-category-emoji">{category.emoji}</span>
      <span className="gm-category-name">{category.name}</span>
      <span className="gm-category-desc">{category.description}</span>
    </button>
  );
}
