import React from 'react';

export default function TermsConditions() {
  return (
    <div className="container" style={{ padding: '8rem 1.25rem 6rem', color: '#f8fafc', background: '#090d16', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: '#0f172a', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid #1e293b' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#ffffff' }}>Terms and Conditions</h1>
        <p style={{ marginBottom: '2.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>Last updated: {new Date().toLocaleDateString()}</p>
        
        <div style={{ lineHeight: 1.8, fontSize: '1.05rem', color: '#cbd5e1' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Welcome to Nagar Electrical! These terms and conditions outline the rules and regulations for the use of Nagar Electrical's Website, located at nagar-electrical-kota.vercel.app.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Nagar Electrical if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#ffffff' }}>1. Services Provided</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Nagar Electrical provides doorstep electrical repair and maintenance services in Kota, Rajasthan, including but not limited to fan repair, cooler motor service, home wiring, and appliance diagnostics. We also sell electrical spare parts and supplies at our physical store at Teen Bati Circle, Kota.
          </p>
          
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#ffffff' }}>2. Booking and Dispatch</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            When you book a service via our website, WhatsApp, or phone call, you agree to provide accurate location and contact information. Dispatch times are estimates and may vary based on technician availability and location within our service areas in Kota.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#ffffff' }}>3. Warranty and Liability</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We guarantee the quality of our repair services and parts provided directly by us. However, Nagar Electrical shall not be held liable for indirect damages, pre-existing faults, or issues arising from parts sourced by the customer. Warranty on parts is subject to the original manufacturer's terms.
          </p>
          
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#ffffff' }}>4. Cookies</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We employ the use of cookies. By accessing Nagar Electrical, you agreed to use cookies in agreement with the Nagar Electrical's Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#ffffff' }}>5. License</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Unless otherwise stated, Nagar Electrical and/or its licensors own the intellectual property rights for all material on Nagar Electrical. All intellectual property rights are reserved. You may access this from Nagar Electrical for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Republish material from Nagar Electrical</li>
            <li>Sell, rent or sub-license material from Nagar Electrical</li>
            <li>Reproduce, duplicate or copy material from Nagar Electrical</li>
            <li>Redistribute content from Nagar Electrical</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
