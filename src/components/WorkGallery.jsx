import React, { useState } from 'react';
import { ZoomIn, Store, Wrench, Package, ShieldCheck } from 'lucide-react';

export default function WorkGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Shop Counter & Proprietor Mr. Rajendra Kumar Nagar',
      category: 'Storefront & Owner',
      image: '/assets/storefront_owner.jpg',
      desc: 'Our physical shop counter located at Teen Bati Circle, Kota with owner Mr. Rajendra Kumar Nagar.'
    },
    {
      id: 2,
      title: 'Official Nagar Electrical Signboard',
      category: 'Shop Storefront',
      image: '/assets/storefront_sign.jpg',
      desc: 'Nagar Electricals prominent sign board and storefront at Teen Bati Circle, Kota.'
    },
    {
      id: 3,
      title: 'Store Front Entrance View',
      category: 'Shop Storefront',
      image: '/assets/storefront_view.jpg',
      desc: 'Full storefront entrance with display counter, fan components & repair work tools.'
    },
    {
      id: 4,
      title: 'Electrical Spare Parts Inventory Shelves',
      category: 'Store Inventory',
      image: '/assets/shop_inventory.jpg',
      desc: 'Inside shop view stocked with fan bearings (6201/02), capacitors, copper wire coils, switches & MCBs.'
    },
    {
      id: 5,
      title: 'Doorstep Electrical Repair Dispatch',
      category: 'Doorstep Service',
      image: '/assets/hero_technician.png',
      desc: 'Certified electrician carrying diagnostic meters and spare parts for home repair in Kota.'
    },
    {
      id: 6,
      title: 'Motor Rewinding & Testing Bench',
      category: 'Repair Workbench',
      image: '/assets/repair_workbench.png',
      desc: 'Precision repair workbench for fan motor testing, soldering, and appliance diagnostics.'
    }
  ];

  const categories = ['All', 'Storefront & Owner', 'Shop Storefront', 'Store Inventory', 'Doorstep Service', 'Repair Workbench'];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="section-padding" style={{ background: '#ffffff', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>
            📷 Real Shop Photos • Teen Bati Circle
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)', color: '#0f172a', marginBottom: '0.75rem' }}>
            Our Authentic Shop & Work Gallery
          </h2>
          <p style={{ fontSize: '0.98rem', color: '#475569' }}>
            Take a visual tour of our physical shop in Kota, stocked spare parts inventory, and doorstep service dispatches.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: 700,
                transition: 'var(--transition-smooth)',
                background: activeFilter === tab ? '#f59e0b' : '#f1f5f9',
                color: activeFilter === tab ? '#ffffff' : '#475569',
                border: '1px solid ' + (activeFilter === tab ? '#d97706' : '#e2e8f0')
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Cards Responsive Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              style={{
                background: '#f8fafc',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1.5px solid #e2e8f0',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition-bounce)',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedImage(item)}
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
              <div style={{ position: 'relative', height: '210px', overflow: 'hidden', background: '#0f172a' }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.4)', opacity: 0, transition: 'opacity 0.25s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="gallery-hover-overlay">
                  <span className="btn-primary" style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}>
                    <ZoomIn size={15} /> Expand Photo
                  </span>
                </div>
              </div>

              <div style={{ padding: '1.1rem' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {item.category}
                </span>
                <h3 style={{ fontSize: '1rem', color: '#0f172a', fontWeight: 800, margin: '0.25rem 0 0.4rem', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.45 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox Preview */}
        {selectedImage && (
          <div 
            style={{ 
              position: 'fixed', 
              inset: 0, 
              background: 'rgba(15, 23, 42, 0.88)', 
              backdropFilter: 'blur(8px)', 
              zIndex: 2000, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              padding: '1rem' 
            }}
            onClick={() => setSelectedImage(null)}
          >
            <div 
              style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', maxWidth: '750px', width: '100%', overflow: 'hidden', border: '2px solid #f59e0b', boxShadow: 'var(--shadow-xl)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ position: 'relative', maxHeight: '480px', background: '#0f172a' }}>
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  style={{ width: '100%', height: '100%', maxHeight: '460px', objectFit: 'contain', display: 'block', margin: '0 auto' }}
                />
              </div>
              <div style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#0f172a', fontWeight: 800 }}>{selectedImage.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.2rem' }}>{selectedImage.desc}</p>
                </div>
                <button onClick={() => setSelectedImage(null)} className="btn-dark" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', minHeight: '38px' }}>
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

