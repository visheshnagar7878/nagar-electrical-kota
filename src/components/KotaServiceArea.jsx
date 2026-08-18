import React, { useState } from 'react';
import { MapPin, Navigation, Clock, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function KotaServiceArea({ onOpenBooking }) {
  const [selectedArea, setSelectedArea] = useState('Talwandi');

  const kotaAreas = [
    { name: 'Talwandi', time: '15-25 Mins', distance: '1.2 km', active: true },
    { name: 'Dadabari', time: '15-20 Mins', distance: '1.5 km', active: true },
    { name: 'Mahaveer Nagar 1, 2, 3', time: '20-30 Mins', distance: '2.0 km', active: true },
    { name: 'Vigyan Nagar', time: '20-30 Mins', distance: '2.4 km', active: true },
    { name: 'Teen Bati Circle (Shop Location)', time: 'Immediate (05 Mins)', distance: '0.1 km', active: true },
    { name: 'Groman & Shopping Centre', time: '15-25 Mins', distance: '1.0 km', active: true },
    { name: 'Kunhari & Landmark City', time: '25-35 Mins', distance: '4.5 km', active: true },
    { name: 'Kota Junction & Station Area', time: '30-40 Mins', distance: '5.2 km', active: true },
    { name: 'Nayapura', time: '25-35 Mins', distance: '3.8 km', active: true },
    { name: 'Chawani Circle', time: '20-30 Mins', distance: '2.8 km', active: true },
    { name: 'Aerodrome Circle', time: '20-25 Mins', distance: '2.1 km', active: true },
    { name: 'R K Puram', time: '25-35 Mins', distance: '3.5 km', active: true }
  ];

  const currentAreaInfo = kotaAreas.find(a => a.name === selectedArea) || kotaAreas[0];

  return (
    <section id="coverage" className="section-padding" style={{ background: '#f8fafc', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.85rem' }}>
            📍 Local Kota Service Coverage
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', color: '#0f172a', marginBottom: '1rem' }}>
            Doorstep Technician Dispatch Areas in Kota
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569' }}>
            Select your Kota neighborhood below to check estimated doorstep arrival time from our Teen Bati Circle shop.
          </p>
        </div>

        {/* Dispatch Estimator Interactive Widget Card */}
        <div style={{ 
          background: '#ffffff', 
          borderRadius: 'var(--radius-lg)', 
          border: '1.5px solid #cbd5e1', 
          padding: '2.5rem', 
          boxShadow: 'var(--shadow-lg)',
          marginBottom: '3rem'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            
            {/* Neighborhood Selector */}
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Select Your Kota Locality / Area:
              </label>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', maxHeight: '240px', overflowY: 'auto', paddingRight: '0.5rem' }}>
                {kotaAreas.map((area) => (
                  <button
                    key={area.name}
                    onClick={() => setSelectedArea(area.name)}
                    style={{
                      padding: '0.5rem 0.9rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      transition: 'var(--transition-fast)',
                      background: selectedArea === area.name ? '#0f172a' : '#f1f5f9',
                      color: selectedArea === area.name ? '#ffffff' : '#334155',
                      border: selectedArea === area.name ? '1px solid #0f172a' : '1px solid #e2e8f0'
                    }}
                  >
                    {area.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Estimated Arrival Gauge Display Box */}
            <div style={{ 
              background: 'linear-gradient(135deg, #fffdf5 0%, #fef3c7 100%)', 
              borderRadius: 'var(--radius-md)', 
              padding: '2rem', 
              border: '2px solid #f59e0b',
              textAlign: 'center',
              boxShadow: '0 8px 24px rgba(245, 158, 11, 0.2)'
            }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#d97706', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                <Clock size={16} /> Estimated Doorstep Dispatch
              </div>

              <h3 style={{ fontSize: '1.4rem', color: '#0f172a', fontWeight: 900, marginBottom: '0.2rem' }}>
                {currentAreaInfo.name}
              </h3>

              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#d97706', margin: '0.5rem 0', fontFamily: 'var(--font-heading)' }}>
                {currentAreaInfo.time}
              </div>

              <p style={{ fontSize: '0.88rem', color: '#78350f', marginBottom: '1.5rem', fontWeight: 600 }}>
                Approx distance from Teen Bati Circle: {currentAreaInfo.distance}
              </p>

              <button 
                onClick={onOpenBooking} 
                className="btn-primary"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                <MapPin size={18} /> Book Technician to {currentAreaInfo.name.split(' ')[0]}
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
