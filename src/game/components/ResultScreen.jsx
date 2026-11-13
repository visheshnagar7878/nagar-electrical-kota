// ResultScreen.jsx — Shows matched character with traits, score, and share/replay options
import { useRef } from 'react';

export default function ResultScreen({
  result,
  category,
  onPlayAgain,
  onTryAnother,
  freeGamesRemaining,
}) {
  const { result: character, score, explanation, topTraits } = result;
  const shareRef = useRef(null);

  if (!character) {
    return (
      <div className="gm-screen" style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Kuch gadbad ho gayi... 😅</p>
        <button className="gm-btn gm-btn-primary" onClick={onPlayAgain} style={{ marginTop: '1rem' }}>
          Dobara Try Karo
        </button>
      </div>
    );
  }

  const handleShare = async () => {
    const shareText = `🎮 Gappu Muni ne mujhe pakad liya!\n\nMain hoon: ${character.name}!\n"${character.shortDescription}"\n\nMatch Score: ${score}%\n\nTu bhi try kar! 👉 gappumuni.app`;
    
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Gappu Muni — Mera Character!', text: shareText });
      } catch {
        // User cancelled share, ignore
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(shareText);
        alert('Result copy ho gaya! Paste karke share karo 📋');
      } catch {
        alert(shareText);
      }
    }
  };

  return (
    <div className="gm-screen" style={{ animation: 'gm-fade-in 0.4s ease' }}>
      {/* Top bar */}
      <div className="gm-topbar">
        <button
          className="gm-btn gm-btn-back"
          onClick={onPlayAgain}
          style={{ width: 'auto', minHeight: 'auto', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
        >
          🏠 Home
        </button>
        <span className="gm-free-badge">
          {freeGamesRemaining > 0 ? `${freeGamesRemaining} free baaki` : 'Upgrade karo!'}
        </span>
      </div>

      <div className="gm-result-screen" ref={shareRef}>
        {/* Header badge */}
        <div className="gm-result-header">
          <div className="gm-result-badge">🎯 Gappu Muni ne pakad liya!</div>
          <p style={{ fontSize: '0.9rem', color: 'var(--gm-text-muted)', fontWeight: 600 }}>
            {category?.name} • Entertainment match
          </p>
        </div>

        {/* Character card */}
        <div className="gm-result-char-card">
          <div
            className="gm-char-artwork"
            style={{ background: character.artworkBg || 'var(--gm-purple-light)' }}
          >
            {character.artworkEmoji || '🎭'}
          </div>
          <div className="gm-char-name">{character.name}</div>
          <div className="gm-char-subtitle">{character.shortDescription}</div>
          <div className="gm-match-score">
            ⚡ Match Score: {score}%
          </div>
          <div className="gm-result-desc">{character.resultDescription}</div>
        </div>

        {/* Top traits */}
        {topTraits && topTraits.length > 0 && (
          <div className="gm-traits-card">
            <div className="gm-traits-title">🧬 Teri Top Qualities</div>
            <div className="gm-traits-list">
              {topTraits.map((trait) => (
                <span key={trait.id} className="gm-trait-chip">
                  {trait.emoji} {trait.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Explanation */}
        <div className="gm-explanation-card">
          <div className="gm-explanation-text">💡 {explanation}</div>
        </div>

        {/* Disclaimer for mythology */}
        {category?.id === 'mythology' && (
          <div
            style={{
              background: 'var(--gm-purple-light)',
              borderRadius: 'var(--gm-radius-md)',
              padding: '0.875rem 1rem',
              marginBottom: '1rem',
              fontSize: '0.8rem',
              color: 'var(--gm-purple-dark)',
              fontWeight: 700,
              lineHeight: 1.5,
            }}
          >
            🙏 Yeh match personality traits par based hai. Koi religious claim nahi hai.
          </div>
        )}

        {/* Action buttons */}
        <div className="gm-result-actions">
          <button className="gm-btn gm-btn-coral" onClick={handleShare} id="btn-share-result">
            📤 Result Share Karo
          </button>
          <button className="gm-btn gm-btn-primary" onClick={onPlayAgain} id="btn-play-again">
            🔄 Phir Khelo
          </button>
          <button className="gm-btn gm-btn-ghost" onClick={onTryAnother} id="btn-try-another">
            🎯 Doosri Category Try Karo
          </button>
        </div>

        {/* Entertainment disclaimer */}
        <p className="gm-muted-text gm-text-center" style={{ marginTop: '1rem' }}>
          Yeh result sirf entertainment ke liye hai. 🎉
        </p>
      </div>
    </div>
  );
}
