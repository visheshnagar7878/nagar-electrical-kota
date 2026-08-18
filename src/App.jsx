import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DoorstepProcess from './components/DoorstepProcess';
import ServicesSection from './components/ServicesSection';
import ProductCatalog from './components/ProductCatalog';
import WhyUs from './components/WhyUs';
import WorkGallery from './components/WorkGallery';
import KotaServiceArea from './components/KotaServiceArea';
import ContactFooter from './components/ContactFooter';
import BookingModal from './components/BookingModal';

export default function App() {
  const [currentView, setCurrentView] = useState('service'); // 'service' | 'shop' | 'all'
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState('Fan Repair & Service');

  const handleOpenBooking = (serviceName = 'Fan Repair & Service') => {
    setBookingService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Top Header Navigation */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()}
          currentView={currentView}
          setCurrentView={setCurrentView}
        />

        {/* Doorstep Process (5-Step Circuit Timeline) */}
        <DoorstepProcess 
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Doorstep Services Section (#1 Primary Focus) */}
        <ServicesSection 
          onSelectService={(srvName) => handleOpenBooking(srvName)}
        />

        {/* Products Available at Shop (#2 Secondary Focus) */}
        <ProductCatalog />

        {/* Why Choose Nagar Electrical */}
        <WhyUs />

        {/* Kota Service Coverage & Dispatch Estimator */}
        <KotaServiceArea 
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Real Work & Shop Gallery */}
        <WorkGallery />
      </main>

      {/* Contact & Footer Section */}
      <ContactFooter 
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Doorstep Booking Wizard Modal */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={bookingService}
      />
    </div>
  );
}
