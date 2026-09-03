import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, Wrench, ArrowUp, Navigation, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ContactFooter({ onOpenBooking, setCurrentView }) {
  const localities = [
    'Talwandi', 'Dadabari', 'Mahaveer Nagar', 'Vigyan Nagar', 
    'Teen Bati Circle', 'Kunhari', 'Landmark City', 'Kota Junction', 
    'Groman', 'Nayapura', 'Chawani'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" style={{ background: '#090d16', color: '#f8fafc', position: 'relative', overflow: 'hidden', borderTop: '1px solid #1e293b' }}>
      
      {/* Sleek CTA Banner Block */}
      <div className="container" style={{ paddingTop: '3.5rem' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
          border: '1px solid rgba(255, 255, 255, 0.1)', 
          borderRadius: 'var(--radius-lg)', 
          padding: 'clamp(2rem, 3.5vw, 3rem)', 
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle Ambient Glow */}
          <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center', position: 'relative', zIndex: 2 }}>
            <div>
              <span style={{ 
                background: 'rgba(245, 158, 11, 0.12)', 
                color: '#f59e0b', 
                fontSize: '0.78rem', 
                fontWeight: 700, 
                padding: '0.3rem 0.85rem', 
                borderRadius: 'var(--radius-full)', 
                border: '1px solid rgba(245, 158, 11, 0.25)', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.4rem',
                letterSpacing: '0.03em'
              }}>
                <Sparkles size={13} /> Fast Doorstep Dispatch in Kota
              </span>

              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#ffffff', margin: '0.75rem 0 0.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                Need Fast Doorstep Electrical Repair?
              </h2>

              <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6, maxWidth: '520px' }}>
                Expert fan, cooler, appliance repair & house wiring directly at your doorstep in Kota. Or visit our shop at Teen Bati Circle.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a 
                  href="tel:+919352728931" 
                  className="btn-primary"
                  style={{ fontSize: '0.9rem', padding: '0.75rem 1.4rem', flex: 1, minWidth: '160px', borderRadius: 'var(--radius-full)' }}
                >
                  <Phone size={16} /> Call 93527-28931
                </a>

                <a 
                  href="https://wa.me/917878314215?text=Hello%20Nagar%20Electrical,%20I%20need%20doorstep%20service%20in%20Kota."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ background: '#10b981', borderColor: '#10b981', color: '#ffffff', fontSize: '0.9rem', padding: '0.75rem 1.4rem', flex: 1, minWidth: '160px', borderRadius: 'var(--radius-full)' }}
                >
                  <MessageSquare size={16} /> WhatsApp Us
                </a>
              </div>

              <button
                onClick={onOpenBooking}
                className="btn-secondary"
                style={{ background: 'rgba(255,255,255,0.06)', color: '#f8fafc', borderColor: 'rgba(255,255,255,0.15)', fontSize: '0.88rem', width: '100%', borderRadius: 'var(--radius-full)' }}
              >
                <Wrench size={15} style={{ color: '#f59e0b' }} /> Book Doorstep Technician Online
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information Grid */}
      <div className="container" style={{ padding: '3.5rem 1.25rem 2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          
          {/* Column 1: Brand Profile */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <img 
                src="/logo.png" 
                alt="Nagar Electrical Kota Logo" 
                style={{ height: '32px', width: 'auto', background: '#ffffff', padding: '3px', borderRadius: '6px' }}
                onError={(e) => e.target.style.display = 'none'}
              />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.15rem', color: '#ffffff', letterSpacing: '-0.01em' }}>
                NAGAR <span style={{ color: '#f59e0b' }}>ELECTRICAL</span>
              </span>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
               Kota's trusted destination for doorstep electrical repair, home wiring & genuine spare parts since 2012.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#1e293b', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-full)', border: '1px solid #334155', fontSize: '0.78rem', color: '#cbd5e1' }}>
              <ShieldCheck size={14} style={{ color: '#f59e0b' }} /> Verified Electricians
            </div>
          </div>

          {/* Column 2: Quick Repairs */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Doorstep Repairs
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.86rem', color: '#94a3b8' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={13} style={{ color: '#f59e0b' }} /> Ceiling & Exhaust Fans</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={13} style={{ color: '#f59e0b' }} /> Desert Cooler Motors</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={13} style={{ color: '#f59e0b' }} /> House Wiring & MCB</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={13} style={{ color: '#f59e0b' }} /> Modular Switch & Socket</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={13} style={{ color: '#f59e0b' }} /> Mixer Grinder Service</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={13} style={{ color: '#f59e0b' }} /> Geyser & Heater Repair</li>
            </ul>
          </div>

          {/* Column 3: Shop Supplies */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Store Supplies
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.86rem', color: '#94a3b8' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={13} style={{ color: '#10b981' }} /> LED Bulbs & Tubes</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Modular Switches</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Pure Copper Wires</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Fan Bearings (6201/02)</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Extension Boards</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={13} style={{ color: '#10b981' }} /> PVC Tapes & Capacitors</li>
            </ul>
          </div>

          {/* Column 4: Store Location & Hours */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Location & Hours
            </h4>

            {/* Real Storefront Photo Thumbnail */}
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '110px', marginBottom: '1rem', border: '1px solid #334155', background: '#0f172a' }}>
              <img 
                src="/assets/storefront_sign.jpg" 
                alt="Nagar Electrical signboard Teen Bati Circle Kota"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <MapPin size={16} style={{ color: '#f59e0b', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.88rem' }}>Nagar Electrical Shop</strong>
                  <span style={{ color: '#94a3b8' }}>Teen Bati Circle, Kota, RJ - 324009</span>
                  <br />
                  <a 
                    href="https://maps.google.com/?q=Teen+Bati+Circle+Kota+Rajasthan"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#f59e0b', fontSize: '0.78rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.25rem' }}
                  >
                    Google Maps <Navigation size={11} />
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <Clock size={16} style={{ color: '#f59e0b', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.88rem' }}>Store Timings:</strong>
                  <span style={{ color: '#94a3b8' }}>Mon - Sun: 8:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Locality Tags */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.75rem' }}>
            Service Areas in Kota:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {localities.map((loc) => (
              <span 
                key={loc}
                style={{
                  background: '#0f172a',
                  color: '#94a3b8',
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid #1e293b'
                }}
              >
                {loc}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.82rem', color: '#64748b' }}>
          <p>© {new Date().getFullYear()} Nagar Electrical Kota. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span onClick={() => { setCurrentView('privacy'); scrollToTop(); }} style={{ cursor: 'pointer', transition: 'color 0.2s' }} className="footer-link">Privacy</span>
            <span onClick={() => { setCurrentView('terms'); scrollToTop(); }} style={{ cursor: 'pointer', transition: 'color 0.2s' }} className="footer-link">Terms</span>
            <button 
              onClick={scrollToTop}
              style={{ color: '#f59e0b', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', background: 'transparent' }}
            >
              Top <ArrowUp size={13} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .footer-link:hover { color: #f8fafc; }
      `}</style>
    </footer>
  );
}

