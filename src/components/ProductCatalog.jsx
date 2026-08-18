import React, { useState } from 'react';
import { ShoppingBag, MapPin, Search, Tag, ExternalLink, Check, Sparkles, AlertCircle } from 'lucide-react';

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Lighting & Bulbs', 'Switches & Sockets', 'Wires & Boards', 'Motors & Bearings', 'Accessories & Spares'];

  const productsList = [
    { 
      id: 1, 
      name: 'LED Bulbs (9W / 12W / 15W)', 
      category: 'Lighting & Bulbs', 
      price: 'Available at Shop', 
      tag: 'High Efficiency', 
      image: '/assets/products/led_bulb.png',
      fallbackIcon: '💡' 
    },
    { 
      id: 2, 
      name: 'Modular Switches & Socket Plates', 
      category: 'Switches & Sockets', 
      price: 'Available at Shop', 
      tag: 'Heavy Duty', 
      image: '/assets/products/modular_switch.png',
      fallbackIcon: '🔘' 
    },
    { 
      id: 3, 
      name: 'Pure Copper Wires & Cables', 
      category: 'Wires & Boards', 
      price: 'Available at Shop', 
      tag: '100% Pure Copper', 
      image: '/assets/products/copper_wire.png',
      fallbackIcon: '🧵' 
    },
    { 
      id: 4, 
      name: 'Surge Protected Extension Boards', 
      category: 'Wires & Boards', 
      price: 'Available at Shop', 
      tag: 'Multi-Socket', 
      image: '/assets/products/extension_board.png',
      fallbackIcon: '🔌' 
    },
    { 
      id: 5, 
      name: 'T8 / T5 LED Tube Lights (4ft)', 
      category: 'Lighting & Bulbs', 
      price: 'Available at Shop', 
      tag: 'Bright White', 
      image: '/assets/products/led_bulb.png',
      fallbackIcon: '🔦' 
    },
    { 
      id: 6, 
      name: 'Fan & Motor Bearings (6201, 6202)', 
      category: 'Motors & Bearings', 
      price: 'Available at Shop', 
      tag: 'Precision Steel', 
      image: '/assets/repair_workbench.png',
      fallbackIcon: '⚙️' 
    },
    { 
      id: 7, 
      name: 'Heavy Insulation Electrical Tapes', 
      category: 'Accessories & Spares', 
      price: 'Available at Shop', 
      tag: 'Water Resistant', 
      image: '/assets/repair_workbench.png',
      fallbackIcon: '🧻' 
    },
    { 
      id: 8, 
      name: 'Mixer Jars & Stainless Blades', 
      category: 'Accessories & Spares', 
      price: 'Available at Shop', 
      tag: 'Food Grade', 
      image: '/assets/products/led_bulb.png',
      fallbackIcon: '🥤' 
    },
    { 
      id: 9, 
      name: 'Motor & Fan Capacitors (2.5uF - 3.15uF)', 
      category: 'Motors & Bearings', 
      price: 'Available at Shop', 
      tag: 'High Voltage', 
      image: '/assets/repair_workbench.png',
      fallbackIcon: '⚡' 
    },
    { 
      id: 10, 
      name: 'MCB Circuit Breakers & Main Switches', 
      category: 'Switches & Sockets', 
      price: 'Available at Shop', 
      tag: 'Short-Circuit Safe', 
      image: '/assets/products/modular_switch.png',
      fallbackIcon: '⚡' 
    },
  ];

  const filteredProducts = productsList.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="section-padding" style={{ background: '#ffffff', position: 'relative' }}>
      <div className="container">
        
        {/* Secondary Focus Visual Banner with Real Shop Photo */}
        <div style={{ 
          background: 'linear-gradient(135deg, #fffdf5 0%, #fef3c7 100%)', 
          border: '2px solid #f59e0b', 
          borderRadius: 'var(--radius-lg)', 
          padding: 'clamp(1.25rem, 3vw, 2.25rem)', 
          marginBottom: '3rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
            {/* Real Inventory Photo */}
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '220px', background: '#0f172a', border: '2px solid #ffffff', boxShadow: 'var(--shadow-md)' }}>
              <img 
                src="/assets/shop_inventory.jpg" 
                alt="Nagar Electrical real shop inventory shelves at Teen Bati Circle Kota"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Banner Text Details */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#ffffff', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-full)', border: '1px solid #f59e0b', marginBottom: '0.75rem' }}>
                <ShoppingBag size={15} style={{ color: '#d97706' }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  🏪 Physical Retail Store Spares
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)', color: '#0f172a', marginBottom: '0.65rem' }}>
                Need Electrical Products? Visit Our Shop
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                We stock high-grade electrical spares, LED bulbs, copper wires, modular switches, fan bearings, and motor capacitors. 
                <strong style={{ color: '#0f172a' }}> Available for direct in-store purchase at Teen Bati Circle, Kota.</strong>
              </p>

              <a 
                href="https://maps.google.com/?q=Teen+Bati+Circle+Kota+Rajasthan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-dark"
                style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem', display: 'inline-flex' }}
              >
                <MapPin size={16} style={{ color: '#f59e0b' }} />
                <span>Visit Store (Teen Bati Circle)</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Notice Callout */}
          <div style={{ 
            marginTop: '1.25rem', 
            paddingTop: '0.85rem', 
            borderTop: '1px solid rgba(245, 158, 11, 0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#78350f',
            fontSize: '0.84rem',
            fontWeight: 600
          }}>
            <AlertCircle size={15} style={{ color: '#d97706', flexShrink: 0 }} />
            <span>Note: Products listed below are available for direct purchase at our Teen Bati Circle shop. Doorstep technicians also bring common spares upon request.</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2.5rem' }}>
          
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem', maxWidth: '100%' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  transition: 'var(--transition-smooth)',
                  background: activeCategory === cat ? '#0f172a' : '#f1f5f9',
                  color: activeCategory === cat ? '#ffffff' : '#475569',
                  border: '1px solid transparent'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', minWidth: '260px' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            <input 
              type="text" 
              placeholder="Search products (bulb, wire, switch)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.6rem',
                borderRadius: 'var(--radius-full)',
                border: '1.5px solid #cbd5e1',
                fontSize: '0.9rem',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>
        </div>

        {/* Product Cards Grid with Real Generated Images */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.75rem' }}>
          {filteredProducts.map((prod) => (
            <div 
              key={prod.id}
              style={{
                background: '#f8fafc',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1.5px solid #e2e8f0',
                transition: 'var(--transition-bounce)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)'
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
              {/* Product Photo Thumbnail */}
              <div style={{ position: 'relative', height: '180px', background: '#ffffff', overflow: 'hidden', borderBottom: '1px solid #e2e8f0' }}>
                <img 
                  src={prod.image} 
                  alt={prod.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <span style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', fontSize: '0.72rem', fontWeight: 800, background: '#fef3c7', color: '#d97706', padding: '0.2rem 0.65rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(245,158,11,0.4)' }}>
                  {prod.tag}
                </span>
              </div>

              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.08rem', color: '#0f172a', fontWeight: 800, marginBottom: '0.4rem', lineHeight: 1.4 }}>
                    {prod.name}
                  </h3>
                  
                  <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', marginBottom: '1rem' }}>
                    Category: {prod.category}
                  </span>
                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Check size={14} /> In-Stock at Shop
                  </span>
                  <a 
                    href="https://maps.google.com/?q=Teen+Bati+Circle+Kota+Rajasthan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                  >
                    Directions <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
