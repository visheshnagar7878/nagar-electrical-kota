// PaywallScreen.jsx — Shown after 5 free games
export default function PaywallScreen({ freeGamesUsed, onBack }) {
  return (
    <div className="gm-screen" style={{ animation: 'gm-fade-in 0.4s ease' }}>
      <div className="gm-topbar">
        <button
          className="gm-btn gm-btn-back"
          onClick={onBack}
          style={{ width: 'auto', minHeight: 'auto', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
        >
          ← Wapas
        </button>
      </div>

      <div className="gm-paywall" style={{ overflowY: 'auto', flex: 1 }}>
        <div className="gm-paywall-header">
          <span className="gm-paywall-emoji">😅</span>
          <div className="gm-paywall-title">Free Games Khatam!</div>
          <div className="gm-paywall-subtitle">
            Tu {freeGamesUsed} games khel chuka hai — aur bhi khelna hai?
          </div>
          <div className="gm-price-tag">₹15</div>
          <div className="gm-price-note">
            Exact pricing model confirm hone par update hoga.
          </div>
        </div>

        {/* Benefits */}
        <div className="gm-benefits-list">
          <div className="gm-benefit-row">
            <span className="gm-benefit-icon">♾️</span>
            <div>Unlimited games — jitna khelo utna khelo</div>
          </div>
          <div className="gm-benefit-row">
            <span className="gm-benefit-icon">🎭</span>
            <div>Sabhi categories unlock — Mystery Mode bhi</div>
          </div>
          <div className="gm-benefit-row">
            <span className="gm-benefit-icon">🆕</span>
            <div>Naye characters aur questions regularly</div>
          </div>
          <div className="gm-benefit-row">
            <span className="gm-benefit-icon">🚫</span>
            <div>Ad-free experience</div>
          </div>
        </div>

        {/* CTA — disabled until payment is configured */}
        <button
          className="gm-btn gm-btn-primary"
          onClick={() => alert('Payment integration coming soon! 🚀 Distribution platform confirm hone par launch hoga.')}
          id="btn-purchase"
          style={{ marginBottom: '0.75rem' }}
        >
          🚀 Unlock Karo ₹15 Mein
        </button>

        <button
          className="gm-btn gm-btn-ghost"
          onClick={onBack}
        >
          Abhi Nahi
        </button>

        <p className="gm-muted-text gm-text-center" style={{ marginTop: '1rem' }}>
          Yeh price aur billing model abhi finalize ho raha hai.
          Exact terms purchase ke waqt dikhaaye jaayenge. ℹ️
        </p>
      </div>
    </div>
  );
}
