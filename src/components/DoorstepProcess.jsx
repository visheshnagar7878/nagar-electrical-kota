import React from 'react';
import { PhoneCall, MapPin, SearchCheck, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

export default function DoorstepProcess({ onOpenBooking }) {
  const steps = [
    {
      step: '01',
      icon: PhoneCall,
      title: 'Call / WhatsApp Us',
      desc: 'Tell us what electrical issue or appliance repair you need in Kota.',
      color: '#f59e0b',
    },
    {
      step: '02',
      icon: MapPin,
      title: 'We Visit Your Location',
      desc: 'Our technician dispatches directly to your address anywhere in Kota.',
      color: '#0284c7',
    },
    {
      step: '03',
      icon: SearchCheck,
      title: 'Inspect & Diagnose',
      desc: 'Full diagnostic check with upfront quote before starting any work.',
      color: '#8b5cf6',
    },
    {
      step: '04',
      icon: Wrench,
      title: 'Repair & Servicing',
      desc: 'High-quality repairs using tested spare parts & safety standards.',
      color: '#f59e0b',
    },
    {
      step: '05',
      icon: CheckCircle,
      title: 'Problem Solved!',
      desc: 'Appliance fully tested & working smoothly. Guaranteed satisfaction.',
      color: '#10b981',
    },
  ];

  return (
    <section id="process" className="section-padding" style={{ background: '#ffffff', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.85rem' }}>
            ⚡ How Our Doorstep Service Works
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', letterSpacing: '-0.02em', color: '#0f172a', marginBottom: '1rem', fontWeight: 900 }}>
            We Come To Your Doorstep
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.65 }}>
            No need to carry heavy fans or coolers across Kota. Simple 5-step process from issue report to completed repair.
          </p>
        </div>

        {/* Process Flow Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.75rem', position: 'relative' }}>
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.step}
                style={{
                  background: '#f8fafc',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem 1.35rem',
                  border: '1.5px solid #e2e8f0',
                  position: 'relative',
                  transition: 'var(--transition-smooth)',
                  boxShadow: 'var(--shadow-sm)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = item.color;
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                {/* Step Counter Badge */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  marginBottom: '1.5rem' 
                }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: 'var(--radius-sm)', 
                    background: '#ffffff', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: item.color,
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid #cbd5e1'
                  }}>
                    <Icon size={24} />
                  </div>
                  <span style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontWeight: 900, 
                    fontSize: '1.75rem', 
                    color: '#cbd5e1' 
                  }}>
                    {item.step}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.65rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Process CTA Banner */}
        <div style={{ 
          marginTop: '4rem', 
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
          borderRadius: 'var(--radius-lg)', 
          padding: '2.25rem 2.75rem', 
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div>
            <span style={{ color: '#f59e0b', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Your Problem → Our Technician → Your Solution
            </span>
            <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginTop: '0.35rem', fontWeight: 800 }}>
              Need an electrical repair technician in Kota right now?
            </h3>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenBooking} 
              className="btn-primary"
              style={{ fontSize: '0.95rem' }}
            >
              <Wrench size={18} /> Request Service Visit
            </button>
            <a 
              href="tel:+919352728931" 
              className="btn-secondary"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <PhoneCall size={18} style={{ color: '#f59e0b' }} /> Direct Call (9352728931)
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
