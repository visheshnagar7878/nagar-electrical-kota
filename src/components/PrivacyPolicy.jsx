import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ padding: '8rem 1.25rem 6rem', color: '#f8fafc', background: '#090d16', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: '#0f172a', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid #1e293b' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#ffffff' }}>Privacy Policy</h1>
        <p style={{ marginBottom: '2.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>Last updated: {new Date().toLocaleDateString()}</p>
        
        <div style={{ lineHeight: 1.8, fontSize: '1.05rem', color: '#cbd5e1' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            At Nagar Electrical, accessible from nagar-electrical-kota.vercel.app, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Nagar Electrical and how we use it.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#ffffff' }}>1. Information We Collect</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>
          
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#ffffff' }}>2. How We Use Your Information</h2>
          <p style={{ marginBottom: '1rem' }}>We use the information we collect in various ways, including to:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Provide, operate, and maintain our website and services</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#ffffff' }}>3. Log Files</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Nagar Electrical follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
          </p>
          
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#ffffff' }}>4. Third Party Privacy Policies</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Nagar Electrical's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
          </p>
        </div>
      </div>
    </div>
  );
}
