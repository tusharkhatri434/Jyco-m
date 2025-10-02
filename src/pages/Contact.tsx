
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';
import FloatingContactButton from '@/components/FloatingContactButton';
import { scrollToTopImmediate } from '@/utils/scrollToTop';
import { useEffect } from 'react';
import { initializeScrollAnimations, ensureContentVisibility } from '@/utils/scrollAnimations';
import GetInTouch from '@/components/GetInTouch';

const Contact = () => {
  useEffect(() => {
    scrollToTopImmediate();
    // Immediate initialization without delay
    ensureContentVisibility();
    initializeScrollAnimations();
  }, []);

  return (
    <div className="min-h-screen luxury-bg">
      <Header />
      <FloatingContactButton />
      <main>
        <HeroSection 
          title="Get In Touch"
          subtitle="Ready to Power Your Project?"
          description="Connect with our expert team for custom transformer solutions. We provide comprehensive support from design to installation."
          showCTA={false}
          backgroundImage="/lovable-uploads/contact_us/banner_img_3.jpeg"
        />
        {/* <GetInTouch /> */}
        <div className="section-light scroll-animate-fade">
          <ContactSection />
        </div>
      </main>
      <div className="scroll-animate-fade">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
