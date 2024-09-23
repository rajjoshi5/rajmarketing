import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import KeyStatistics from './KeyStatistics';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Key Statistics Section */}
      <KeyStatistics />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
