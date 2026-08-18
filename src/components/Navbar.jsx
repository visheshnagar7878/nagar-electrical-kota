import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, MapPin, Wrench, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenBooking, currentView, setCurrentView }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', view: 'all' },
    { name: 'Services', href: '#services', view: 'service' },
    { name: 'Shop', href: '#products', view: 'shop' },
    { name: 'Process', href: '#process', view: 'all' },
    { name: 'Why Us', href: '#why-us', view: 'all' },
    { name: 'Gallery', href: '#gallery', view: 'all' },
    { name: 'Coverage', href: '#coverage', view: 'all' },
    { name: 'Contact', href: '#contact', view: 'all' },
  ];

  return (
    <header className="header-glass">
      {/* Top Banner Notice */}
      <div style={{ background: '#0f172a', color: '#94a3b8', padding: '0.3rem 0.85rem', fontSize: '0.78rem', fontWeight: 500 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.35rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span className="status-led"></span>
            <span style={{ color: '#f8fafc' }}>
              <strong>Doorstep Service:</strong> Teen Bati Circle, Kota
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a 
              href="tel:+919352728931" 
              style={{ color: '#f59e0b', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.2rem', transition: 'color 0.2s' }}
            >
              <Phone size={12} /> Call: 93527-28931
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1.25rem' }}>
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={() => setCurrentView && setCurrentView('all')} 
          style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', textDecoration: 'none' }}
        >
          <img 
            src="/logo.png" 
            alt="Nagar Electrical Kota Logo" 
            style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em', color: '#0f172a', lineHeight: 1 }}>
              NAGAR <span style={{ color: '#f59e0b' }}>ELECTRICAL</span>
            </span>
            <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#64748b', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '2px' }}>
              Services & Products • Kota
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', gap: '0.3rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = currentView === link.view && link.view !== 'all';
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  if (link.view !== 'all' && setCurrentView) setCurrentView(link.view);
                }}
                className={`minimal-nav-link ${isActive ? 'active' : ''}`}
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: isActive ? '#d97706' : '#475569',
                  padding: '0.4rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Header Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <a
            href="https://wa.me/917878314215?text=Hello%20Nagar%20Electrical,%20I%20need%20doorstep%20electrical%20service%20in%20Kota."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary desktop-whatsapp-btn"
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', minHeight: '36px', borderRadius: 'var(--radius-full)' }}
            title="Chat on WhatsApp"
          >
            <MessageSquare size={14} style={{ color: '#10b981' }} />
            <span style={{ fontWeight: 600 }}>WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            className="btn-primary"
            style={{ padding: '0.4rem 0.95rem', fontSize: '0.82rem', minHeight: '36px', borderRadius: 'var(--radius-full)' }}
          >
            <Wrench size={14} />
            <span style={{ fontWeight: 700 }}>Book Visit</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ padding: '0.35rem 0.5rem', color: '#0f172a', background: '#f1f5f9', borderRadius: '8px', border: '1px solid #cbd5e1', marginLeft: '0.15rem' }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '1rem 1.25rem', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (link.view !== 'all' && setCurrentView) setCurrentView(link.view);
                }}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: currentView === link.view && link.view !== 'all' ? '#fef3c7' : 'transparent'
                }}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} style={{ color: '#94a3b8' }} />
              </a>
            ))}
            <div style={{ borderTop: '1px solid #f1f5f9', marginTop: '0.5rem', paddingTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
              <a href="tel:+919352728931" className="btn-dark" style={{ flex: 1, fontSize: '0.82rem', minHeight: '40px' }}>
                <Phone size={14} /> Call 9352728931
              </a>
              <a
                href="https://wa.me/917878314215?text=Hello%20Nagar%20Electrical,%20I%20need%20doorstep%20electrical%20service%20in%20Kota."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, fontSize: '0.82rem', minHeight: '40px' }}
              >
                <MessageSquare size={14} style={{ color: '#10b981' }} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .minimal-nav-link:hover {
          background-color: #f1f5f9;
          color: #0f172a !important;
        }
        .minimal-nav-link.active {
          background-color: #fef3c7;
        }
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 640px) {
          .desktop-whatsapp-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}


