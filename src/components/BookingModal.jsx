import React, { useState } from 'react';
import { X, Wrench, MapPin, Phone, User, CheckCircle2, MessageSquare, Send, Camera } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialService = '' }) {
  const [serviceType, setServiceType] = useState(initialService || 'Fan Repair & Service');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('Talwandi');
  const [address, setAddress] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const buildWhatsAppMessage = () => {
    return `⚡ *NEW DOORSTEP SERVICE BOOKING* ⚡
-----------------------------------
📌 *Service*: ${serviceType}
👤 *Customer*: ${customerName || 'Valued Customer'}
📞 *Phone*: ${phone}
📍 *Kota Area*: ${locality}
🏠 *Address*: ${address}
🔧 *Issue Details*: ${issueDescription || 'Doorstep Electrical Service Requested'}

📷 *(Note: Feel free to send/attach a photo of your faulty appliance below)*
-----------------------------------
*Nagar Electrical Kota* • Teen Bati Circle`;
  };

  const triggerWhatsAppRedirect = () => {
    const text = buildWhatsAppMessage();
    const whatsappUrl = `https://wa.me/917878314215?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Directly launch WhatsApp with prefilled booking details
    triggerWhatsAppRedirect();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 2500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.25rem'
    }}
    onClick={onClose}
    >
      <div 
        style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          maxWidth: '560px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-xl)',
          border: '2px solid #f59e0b',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div style={{ background: '#0f172a', padding: '1.25rem 1.5rem', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#f59e0b', color: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Wrench size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>Book Doorstep Electrical Visit</h3>
              <span style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>Nagar Electrical • Teen Bati Circle, Kota</span>
            </div>
          </div>
          <button onClick={onClose} style={{ color: '#cbd5e1', padding: '0.4rem', cursor: 'pointer' }}>
            <X size={22} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '1.5rem' }}>
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#dcfce7', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <CheckCircle2 size={38} />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '0.4rem', fontWeight: 800 }}>
                Redirecting to WhatsApp...
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#475569', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                Thank you <strong>{customerName || 'Valued Customer'}</strong>! Your booking details have been prepared for <strong>7878314215</strong>. If WhatsApp did not open automatically, click the button below.
              </p>

              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', textAlign: 'left', fontSize: '0.85rem', color: '#334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0f172a', fontWeight: 700, marginBottom: '0.4rem' }}>
                  <Camera size={16} style={{ color: '#f59e0b' }} /> Attach Appliance Photo in WhatsApp
                </div>
                You can attach or capture a picture of your faulty appliance directly inside the WhatsApp chat to help our technician bring the exact spare part!
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={triggerWhatsAppRedirect} className="btn-primary" style={{ background: '#10b981', borderColor: '#10b981' }}>
                  <MessageSquare size={18} /> Open WhatsApp (7878314215)
                </button>
                <a href="tel:+919352728931" className="btn-secondary">
                  <Phone size={16} /> Call 93527-28931
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              
              {/* Select Service */}
              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Select Service Needed *
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.9rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.92rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    background: '#f8fafc'
                  }}
                  required
                >
                  <option>Fan Repair & Service</option>
                  <option>Cooler Repair & Service</option>
                  <option>Mixer & Grinder Repair</option>
                  <option>Heater & Geyser Repair</option>
                  <option>Electric Iron Repair</option>
                  <option>Home Electrical Wiring & Switch/Socket Work</option>
                  <option>Electrical Appliance Troubleshooting</option>
                  <option>Other Electrical Repair</option>
                </select>
              </div>

              {/* Name & Phone Inputs */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }} className="form-two-col">
                <div>
                  <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                    Your Full Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={16} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                    <input 
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.8rem 0.65rem 2.4rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                    Mobile Number *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={16} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                    <input 
                      type="tel"
                      placeholder="93527-XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.8rem 0.65rem 2.4rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Locality & Address */}
              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Kota Locality / Neighborhood *
                </label>
                <select
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.9rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    background: '#ffffff'
                  }}
                >
                  <option>Talwandi</option>
                  <option>Dadabari</option>
                  <option>Mahaveer Nagar 1, 2, 3</option>
                  <option>Vigyan Nagar</option>
                  <option>Teen Bati Circle Area</option>
                  <option>Groman / Shopping Centre</option>
                  <option>Kunhari / Landmark City</option>
                  <option>Kota Junction Area</option>
                  <option>Nayapura</option>
                  <option>Chawani / Aerodrome Circle</option>
                  <option>Other Kota Locality</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Complete Address / House No. *
                </label>
                <input 
                  type="text"
                  placeholder="House No, Landmark, Colony Name in Kota"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.9rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Issue Description */}
              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Brief Problem Details (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Fan running slow, cooler motor noise, switch sparking..."
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.9rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Notice Banner */}
              <div style={{ background: '#fef3c7', padding: '0.6rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid #f59e0b', fontSize: '0.78rem', color: '#78350f', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MessageSquare size={16} style={{ color: '#d97706', flexShrink: 0 }} />
                <span>Clicking Submit will instantly open <strong>WhatsApp (7878314215)</strong> with your booking details so you can also attach an image of your appliance!</span>
              </div>

              {/* Action Button */}
              <div style={{ marginTop: '0.25rem' }}>
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.85rem', background: '#10b981', borderColor: '#10b981' }}>
                  <Send size={18} /> Submit & Open WhatsApp (7878314215)
                </button>
              </div>

            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 520px) {
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

