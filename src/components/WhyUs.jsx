import React from 'react';
import { DoorOpen, Wrench, Zap, DollarSign, MapPin, ShieldCheck, Store, CheckCircle2 } from 'lucide-react';

export default function WhyUs() {
  const benefits = [
    {
      icon: DoorOpen,
      title: 'Door-to-Door Service 🚪',
      desc: 'We visit your home, office, or hostel across Kota for all electrical repairs & servicing.',
      color: '#f59e0b',
    },
    {
      icon: Wrench,
      title: 'Multiple Appliance Repairs 🔧',
      desc: 'From ceiling fans & cooler motors to kitchen mixers, electric irons, geysers, and house wiring.',
      color: '#0284c7',
    },
    {
      icon: Zap,
      title: 'Physical Store & Spare Parts ⚡',
      desc: 'Electrical products, switches, copper wires, LED bulbs, and motor bearings available off-the-shelf.',
      color: '#8b5cf6',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing 💰',
      desc: 'Clear, honest upfront pricing before starting any electrical repair work. No hidden charges.',
      color: '#10b981',
    },
    {
      icon: MapPin,
      title: 'Local & Accessible in Kota 📍',
      desc: 'A trusted local Kota shop located at Teen Bati Circle that you can visit or call anytime.',
      color: '#f59e0b',
    },
  ];

  return (
    <section id="why-us" className="section-padding" style={{ background: '#f8fafc', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.85rem' }}>
            ⭐ Local Shop Trust Since 2012
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)', color: '#0f172a', marginBottom: '0.85rem' }}>
            Why Choose Nagar Electrical?
          </h2>
          <p style={{ fontSize: '0.98rem', color: '#475569' }}>
            Real practical reasons why homeowners, students, and shopkeepers in Kota rely on our doorstep service.
          </p>
        </div>

        {/* Real Shop Photo Feature Card */}
        <div style={{ 
          background: '#ffffff', 
          borderRadius: 'var(--radius-lg)', 
          border: '1px solid #e2e8f0', 
          padding: 'clamp(1.25rem, 3vw, 2rem)', 
          marginBottom: '3rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
            {/* Store Photos Dual Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '180px', background: '#0f172a' }}>
                <img 
                  src="/assets/storefront_view.jpg" 
                  alt="Nagar Electrical storefront Teen Bati Circle Kota"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '180px', background: '#0f172a' }}>
                <img 
                  src="/assets/shop_inventory.jpg" 
                  alt="Nagar Electrical inside spare parts shelf inventory"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Content text */}
            <div>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                📍 Physical Shop Verification
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: '0.4rem 0 0.6rem' }}>
                Authentic Retail Store at Teen Bati Circle
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1rem' }}>
                Unlike anonymous online portals, Nagar Electrical is a genuine physical store located at Teen Bati Circle, Kota. You get guaranteed work, genuine spare parts, and direct accountability.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: '#fef3c7', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)' }}>
                  <Store size={14} style={{ color: '#d97706' }} /> Shop Open 8 AM - 9 PM
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: '#e0f2fe', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)' }}>
                  <ShieldCheck size={14} style={{ color: '#0284c7' }} /> Certified Technician
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                style={{
                  background: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  border: '1.5px solid #e2e8f0',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'var(--transition-bounce)'
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
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: 'var(--radius-sm)', 
                  background: '#fef3c7', 
                  color: '#d97706',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <Icon size={22} />
                </div>

                <h3 style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 800, marginBottom: '0.4rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

