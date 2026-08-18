import React from 'react';
import { Fan, Wind, Coffee, Flame, Zap, Home, Wrench, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import InteractiveApplianceSimulator from './InteractiveApplianceSimulator';

export default function ServicesSection({ onSelectService }) {
  const servicesList = [
    {
      id: 'fan',
      icon: Fan,
      title: 'Fan Repair & Service',
      desc: 'Ceiling fans, table fans, exhaust fans repair, rewinding, bearing replacement & capacitor changes.',
      tag: 'Doorstep Service',
      time: '30-45 Mins Visit',
      details: ['Bearing replacement (6201, 6202)', 'Capacitor fitting & speed regulator', 'Motor rewinding & coil fix', 'Noise & wobble elimination']
    },
    {
      id: 'cooler',
      icon: Wind,
      title: 'Cooler Repair & Service',
      desc: 'Electrical and component-related cooler repairs, motor replacement, pump fitting & wiring overhaul.',
      tag: 'Seasonal Special',
      time: 'Same Day Service',
      details: ['Submersible water pump replacement', 'Cooler motor rewinding/change', 'Wiring & switch replacement', 'Fan blade alignment & cleaning']
    },
    {
      id: 'mixer',
      icon: Coffee,
      title: 'Mixer & Grinder Repair',
      desc: 'Mixer motor repair, jar blade replacement, coupler fitting & speed switch repair.',
      tag: 'Kitchen Essential',
      time: 'Quick Repair',
      details: ['Motor coupler & socket replacement', 'Stainless steel blade sharpening/change', 'Jar socket & washer fitting', 'Overload protector switch fix']
    },
    {
      id: 'heater',
      icon: Flame,
      title: 'Heater & Geyser Repair',
      desc: 'Electric heater, room heater & water geyser element replacement, thermostat repair & wiring check.',
      tag: 'Safety Inspection',
      time: 'Express Repair',
      details: ['Heavy-duty heating element check', 'Thermostat & safety cutoff calibration', 'Geyser wiring & plug fitting', 'Power indicator light fix']
    },
    {
      id: 'iron',
      icon: Zap,
      title: 'Electric Iron Repair',
      desc: 'Electric iron troubleshooting, steam iron element repair, temperature control & thermal fuse replacement.',
      tag: 'Quick Fix',
      time: '30 Mins Repair',
      details: ['Thermostat temperature control', 'Power chord & plug replacement', 'Heating plate inspection', 'Thermal fuse safety fix']
    },
    {
      id: 'wiring',
      icon: Home,
      title: 'Home Electrical Work',
      desc: 'Switches, sockets, circuit breakers, main distribution box repair, MCB tripping & house wiring.',
      tag: 'Complete Home',
      time: 'Immediate Dispatch',
      details: ['Modular switch & socket installation', 'MCB trip diagnostic & box repair', 'New point & wiring extension', 'Short-circuit fault finding']
    },
  ];

  return (
    <section id="services" className="section-padding" style={{ background: '#f8fafc', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.85rem' }}>
            🔧 Primary Business Focus
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', letterSpacing: '-0.02em', color: '#0f172a', marginBottom: '1rem' }}>
            Door-to-Door Repair Services
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569' }}>
            We bring certified technicians, diagnostic tools, and genuine spare parts straight to your doorstep in Kota.
          </p>
        </div>

        {/* Hyper-Interactive Real Electrical Appliance Interactive Simulator Component */}
        <InteractiveApplianceSimulator onSelectService={onSelectService} />

        {/* Detailed Services Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '3.5rem' }}>
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                style={{
                  background: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  border: '1.5px solid #e2e8f0',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'var(--transition-bounce)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#f59e0b';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div style={{ 
                      width: '52px', 
                      height: '52px', 
                      borderRadius: 'var(--radius-sm)', 
                      background: '#fef3c7', 
                      color: '#d97706',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={28} />
                    </div>

                    <span style={{ 
                      fontSize: '0.78rem', 
                      fontWeight: 700, 
                      background: '#f1f5f9', 
                      color: '#475569', 
                      padding: '0.3rem 0.75rem', 
                      borderRadius: 'var(--radius-full)' 
                    }}>
                      {service.time}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: '#0f172a', marginBottom: '0.75rem' }}>
                    {service.title}
                  </h3>

                  <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                    {service.desc}
                  </p>

                  {/* Bullet Points */}
                  <ul style={{ listStyle: 'none', marginBottom: '1.75rem', padding: 0 }}>
                    {service.details.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#334155', marginBottom: '0.4rem' }}>
                        <CheckCircle size={15} style={{ color: '#f59e0b' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Button */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="btn-secondary"
                  style={{ 
                    width: '100%', 
                    borderColor: '#cbd5e1',
                    fontWeight: 700
                  }}
                >
                  <Wrench size={16} /> Book {service.title.split(' ')[0]} Service
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
