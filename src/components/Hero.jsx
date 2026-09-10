import React, { useEffect } from 'react';
import { Wrench, Phone, ShieldCheck, MapPin, ArrowRight, CheckCircle2, Store } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  useEffect(() => {
    const scriptSrc = "https://pl31275079.profitableratecpmnetwork.com/ac/66/4c/ac664ca497f2e898f1501b1cf17a3a86.js";
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);
  return (
    <section id="home" style={{ position: 'relative', background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)', padding: 'clamp(2.5rem, 5vw, 5rem) 0 clamp(3rem, 6vw, 6rem)', overflow: 'hidden' }}>
      {/* Background Subtle Grid */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.5,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Responsive Hero Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column Text Content */}
          <div>
            {/* Top Badge */}
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="badge-gold">
                <ShieldCheck size={16} /> Certified Electricians & Physical Shop • Kota
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{ fontSize: 'clamp(2.1rem, 4.8vw, 3.6rem)', letterSpacing: '-0.03em', color: '#0f172a', marginBottom: '1.25rem', lineHeight: 1.15, fontWeight: 900 }}>
              Electrical Problems?<br />
              <span style={{ color: '#f59e0b', position: 'relative', display: 'inline-block' }}>
                We Come To Your Doorstep.
                <svg style={{ position: 'absolute', bottom: '-6px', left: 0, width: '100%', height: '8px' }} viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="#f59e0b" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', color: '#475569', maxWidth: '580px', marginBottom: '2rem', lineHeight: 1.6 }}>
              Doorstep appliance repair, ceiling fan service, cooler motors & house wiring in Kota. Visit our physical shop at <strong>Teen Bati Circle</strong> or call for instant home service!
            </p>

            {/* Responsive Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '2.25rem' }}>
              <button 
                onClick={() => onOpenBooking()}
                className="btn-primary"
                style={{ fontSize: '0.98rem', padding: '0.85rem 1.6rem', flex: '1 1 200px' }}
              >
                <Wrench size={18} />
                <span>Book Doorstep Visit</span>
                <ArrowRight size={18} />
              </button>

              <a 
                href="tel:+919352728931"
                className="btn-secondary"
                style={{ fontSize: '0.98rem', padding: '0.85rem 1.5rem', flex: '1 1 200px' }}
              >
                <Phone size={18} style={{ color: '#f59e0b' }} />
                <span>Call: 93527-28931</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', paddingTop: '1.5rem', borderTop: '1.5px solid #e2e8f0', color: '#334155', fontSize: '0.88rem', fontWeight: 600 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                <span>On-Duty Technicians</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                <span>Transparent Quotes</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                <span>Physical Shop Storefront</span>
              </div>
            </div>
          </div>

          {/* Right Column Visual Media - Real Shop & Owner Photo */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '3px solid #ffffff', background: '#0f172a' }}>
              <img 
                src="/assets/storefront_owner.jpg" 
                alt="Nagar Electrical storefront at Teen Bati Circle Kota with owner Rajendra Kumar Nagar"
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '480px', objectFit: 'cover' }}
              />

              {/* Real Physical Store Banner Badge */}
              <div style={{ 
                position: 'absolute', 
                bottom: '1rem', 
                left: '1rem', 
                right: '1rem', 
                background: 'rgba(15, 23, 42, 0.88)', 
                backdropFilter: 'blur(10px)',
                padding: '0.9rem 1.1rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                color: '#ffffff',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f59e0b', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: '#0f172a', flexShrink: 0 }}>
                    <Store size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>Nagar Electrical Shop</h4>
                    <p style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>Teen Bati Circle, Basant Vihar, Kota</p>
                  </div>
                </div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#10b981', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', background: 'rgba(16,185,129,0.15)', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(16,185,129,0.3)' }}>
                  <span className="status-led"></span> Open Daily
                </span>
              </div>
            </div>

            {/* Corner Location Pin Badge */}
            <div style={{ position: 'absolute', top: '12px', right: '12px', background: '#0f172a', color: '#ffffff', padding: '0.5rem 0.9rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(245,158,11,0.5)', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 700 }}>
              <MapPin size={14} style={{ color: '#f59e0b' }} /> Teen Bati Circle, Kota
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}

