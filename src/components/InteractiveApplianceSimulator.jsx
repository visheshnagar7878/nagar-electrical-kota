import React, { useState } from 'react';
import { Lightbulb, Fan, Wind, Coffee, Flame, Zap, CheckCircle2, Wrench, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

export default function InteractiveApplianceSimulator({ onSelectService }) {
  const [activeAppliance, setActiveAppliance] = useState('fan');

  const appliances = [
    {
      id: 'fan',
      name: 'Fan Repair & Service',
      shortName: 'Ceiling & Exhaust Fan',
      icon: Fan,
      tag: 'Most Requested',
      desc: 'Ceiling fans, table fans, and exhaust fan repairs. We fix slow speed, humming noise, capacitor failure, bearing wear, and motor burnt coiling.',
      time: '30-45 Mins Visit',
      issues: [
        'Bearing Replacement (6201, 6202)',
        'Capacitor & Regulator Fitting',
        'Copper Motor Rewinding',
        'Noise & Wobble Elimination'
      ]
    },
    {
      id: 'cooler',
      name: 'Cooler Repair & Service',
      shortName: 'Desert Air Cooler',
      icon: Wind,
      tag: 'Seasonal Special',
      desc: 'Complete air cooler electrical overhaul. Water pump fitting, motor rewinding, switch replacement, and blade balancing for cold airflow.',
      time: 'Same Day Service',
      issues: [
        'Submersible Water Pump Fitting',
        'Cooler Motor Repair & Rewinding',
        'Wiring & Switch Overhaul',
        'Fan Blade Alignment'
      ]
    },
    {
      id: 'mixer',
      name: 'Mixer & Grinder Repair',
      shortName: 'Mixer & Grinder',
      icon: Coffee,
      tag: 'Kitchen Essential',
      desc: 'Mixer motor repairs, jar coupler replacement, jar socket fitting, overload switch repair, and blade sharpening for all major brands.',
      time: '30 Mins Quick Fix',
      issues: [
        'Motor Coupler & Socket Repair',
        'Stainless Steel Blade Fitting',
        'Overload Switch Reset/Change',
        'Speed Controller Repair'
      ]
    },
    {
      id: 'heater',
      name: 'Heater & Geyser Repair',
      shortName: 'Heater & Water Geyser',
      icon: Flame,
      tag: 'Safety Checked',
      desc: 'Electric water geysers and room heaters element replacement, thermostat calibration, thermal cutoff repair, and safety wiring inspection.',
      time: 'Express Dispatch',
      issues: [
        'Heavy-Duty Element Replacement',
        'Thermostat Calibration',
        'Safety Cutoff & Fuse Fix',
        'Power Cord & Plug Fitting'
      ]
    },
    {
      id: 'bulb',
      name: 'Lighting & Switch Repair',
      shortName: 'LED Bulbs & Switches',
      icon: Lightbulb,
      tag: 'Fast Repair',
      desc: 'Modular switch replacement, LED bulb & tube light fitting, socket repair, holder changes, and main switchboard wiring troubleshooting.',
      time: '20 Mins Quick Visit',
      issues: [
        'Modular Switch & Socket Change',
        'Holder & Tube Light Fitting',
        'MCB Tripping Diagnostic',
        'Switchboard Rewiring'
      ]
    },
    {
      id: 'wiring',
      name: 'Home Electrical Work',
      shortName: 'House Wiring & MCB',
      icon: Zap,
      tag: 'Complete Home',
      desc: 'Comprehensive home electrical troubleshooting, distribution box repair, MCB tripping resolution, short-circuit diagnostic, and wiring points.',
      time: 'Immediate Dispatch',
      issues: [
        'Short Circuit Fault Finding',
        'MCB Tripping Fix',
        'Distribution Box Overhaul',
        'New Point Wiring Extension'
      ]
    }
  ];

  const current = appliances.find(a => a.id === activeAppliance) || appliances[0];
  const IconComponent = current.icon;

  return (
    <div style={{ margin: '1.5rem 0 2.5rem', width: '100%', boxSizing: 'border-box' }}>
      
      {/* Container Box */}
      <div style={{
        background: '#ffffff',
        borderRadius: 'var(--radius-lg)',
        border: '1.5px solid #cbd5e1',
        boxShadow: 'var(--shadow-md)',
        padding: 'clamp(1rem, 3vw, 2.25rem)',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}>
        
        {/* Header Bar */}
        <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <span className="badge-gold" style={{ marginBottom: '0.5rem', display: 'inline-flex', fontSize: '0.78rem' }}>
            ⚡ Select Your Electrical Issue
          </span>
          <h3 style={{ 
            fontSize: 'clamp(1.25rem, 3.5vw, 1.6rem)', 
            color: '#0f172a', 
            fontWeight: 800,
            lineHeight: 1.3,
            wordBreak: 'break-word'
          }}>
            Appliance Diagnostic & Repair Selector
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#64748b', marginTop: '0.35rem', lineHeight: 1.5 }}>
            Select an appliance category to see solutions & instant doorstep dispatch options in Kota.
          </p>
        </div>

        {/* Scrollable Category Tabs */}
        <div style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          overflowX: 'auto', 
          padding: '0.25rem 0.25rem 0.75rem', 
          marginBottom: '1.75rem', 
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: 'x mandatory',
          width: '100%',
          boxSizing: 'border-box'
        }}
        className="hide-scrollbar"
        >
          {appliances.map((app) => {
            const Icon = app.icon;
            const isActive = activeAppliance === app.id;
            return (
              <button
                key={app.id}
                onClick={() => setActiveAppliance(app.id)}
                style={{
                  padding: '0.55rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  background: isActive ? '#0f172a' : '#f1f5f9',
                  color: isActive ? '#ffffff' : '#334155',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  border: isActive ? '1.5px solid #0f172a' : '1px solid #cbd5e1',
                  transition: 'var(--transition-smooth)',
                  cursor: 'pointer',
                  flexShrink: 0,
                  scrollSnapAlign: 'start'
                }}
              >
                <Icon size={16} style={{ color: isActive ? '#f59e0b' : '#64748b', flexShrink: 0 }} />
                <span>{app.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Appliance Info Card */}
        <div style={{ 
          background: '#f8fafc', 
          borderRadius: 'var(--radius-md)', 
          padding: 'clamp(1rem, 2.5vw, 1.75rem)', 
          border: '1.5px solid #e2e8f0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          alignItems: 'start',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          
          {/* Left Side Details */}
          <div style={{ width: '100%', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
              <div style={{ 
                width: '42px', 
                height: '42px', 
                borderRadius: 'var(--radius-sm)', 
                background: '#fef3c7', 
                color: '#d97706',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <IconComponent size={22} />
              </div>
              <div style={{ flex: 1, minWidth: '160px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#d97706', background: '#ffffff', padding: '0.15rem 0.55rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(245,158,11,0.3)', display: 'inline-block' }}>
                  {current.tag}
                </span>
                <h4 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', color: '#0f172a', fontWeight: 800, marginTop: '0.2rem', lineHeight: 1.35 }}>
                  {current.name}
                </h4>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, marginBottom: '1.25rem' }}>
              {current.desc}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.82rem', color: '#334155', fontWeight: 600, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Clock size={15} style={{ color: '#f59e0b' }} />
                <span>{current.time}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <ShieldCheck size={15} style={{ color: '#10b981' }} />
                <span>Upfront Pricing</span>
              </div>
            </div>
          </div>

          {/* Right Side Common Solved Issues & CTA */}
          <div style={{ background: '#ffffff', padding: '1.15rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', width: '100%', boxSizing: 'border-box' }}>
            <strong style={{ fontSize: '0.82rem', color: '#0f172a', display: 'block', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Common Fixes Covered:
            </strong>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {current.issues.map((issue, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.84rem', color: '#334155', lineHeight: 1.4 }}>
                  <CheckCircle2 size={15} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                  <span>{issue}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => onSelectService(current.name)}
              className="btn-primary"
              style={{ width: '100%', fontSize: '0.88rem', padding: '0.75rem' }}
            >
              <Wrench size={16} /> Book {current.name.split(' ')[0]} Visit
              <ArrowRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

