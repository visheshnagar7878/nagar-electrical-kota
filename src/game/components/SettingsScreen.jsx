// SettingsScreen.jsx
export default function SettingsScreen({ onBack }) {
  return (
    <div className="gm-screen" style={{ animation: 'gm-fade-in 0.35s ease' }}>
      <div className="gm-topbar">
        <button
          className="gm-btn gm-btn-back"
          onClick={onBack}
          style={{ width: 'auto', minHeight: 'auto', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
        >
          ← Wapas
        </button>
        <span style={{ fontFamily: 'var(--gm-font-heading)', fontWeight: 800, fontSize: '1rem' }}>
          Settings
        </span>
        <span style={{ width: 80 }} />
      </div>

      <div className="gm-settings" style={{ overflowY: 'auto', flex: 1 }}>
        <div style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>
          <h1 style={{ fontFamily: 'var(--gm-font-heading)', fontWeight: 900, fontSize: '1.4rem' }}>
            Settings ⚙️
          </h1>
          <p className="gm-muted-text">Gappu Muni preferences</p>
        </div>

        {/* Game settings */}
        <div className="gm-settings-section">
          <div className="gm-settings-item" onClick={() => alert('Sound feature coming soon! 🎵')}>
            <span className="gm-settings-icon">🔊</span>
            <span>Sound Effects</span>
            <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--gm-text-muted)' }}>Coming Soon</span>
          </div>
          <div className="gm-settings-item" onClick={() => alert('Restore karne ki suvidha payment launch hone par aayegi.')}>
            <span className="gm-settings-icon">🔄</span>
            <span>Restore Purchases</span>
            <span className="gm-settings-arrow">›</span>
          </div>
        </div>

        {/* Legal */}
        <div className="gm-settings-section">
          <div className="gm-settings-item" onClick={() => alert('Privacy Policy: Hum koi personal data store nahi karte. Game sessions anonymously tracked hain.')}>
            <span className="gm-settings-icon">🔒</span>
            <span>Privacy Policy</span>
            <span className="gm-settings-arrow">›</span>
          </div>
          <div className="gm-settings-item" onClick={() => alert('Terms: Yeh app entertainment ke liye hai. Results scientifically validated nahi hain.')}>
            <span className="gm-settings-icon">📄</span>
            <span>Terms of Use</span>
            <span className="gm-settings-arrow">›</span>
          </div>
          <div className="gm-settings-item" onClick={() => window.open('mailto:support@gappumuni.app', '_blank')}>
            <span className="gm-settings-icon">💬</span>
            <span>Contact Support</span>
            <span className="gm-settings-arrow">›</span>
          </div>
        </div>

        {/* App info */}
        <div className="gm-settings-section">
          <div className="gm-settings-item" style={{ cursor: 'default' }}>
            <span className="gm-settings-icon">ℹ️</span>
            <span>Version</span>
            <span style={{ marginLeft: 'auto', fontSize: '0.85rem', color: 'var(--gm-text-muted)', fontWeight: 700 }}>
              1.0.0 MVP
            </span>
          </div>
        </div>

        <p className="gm-muted-text gm-text-center" style={{ marginTop: '1.5rem' }}>
          Made with ❤️ for Indian Gen-Z
        </p>
      </div>
    </div>
  );
}
