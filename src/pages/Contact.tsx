
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';
import FloatingContactButton from '@/components/FloatingContactButton';
import { scrollToTopImmediate } from '@/utils/scrollToTop';
import { useEffect } from 'react';
import { initializeScrollAnimations, ensureContentVisibility } from '@/utils/scrollAnimations';
import GetInTouch from '@/components/GetInTouch';
import { useScreen } from '@/hooks/ScreenContext';

const Contact = () => {
  useEffect(() => {
    scrollToTopImmediate();
    // Immediate initialization without delay
    ensureContentVisibility();
    initializeScrollAnimations();
  }, []);

    const { isMobile} = useScreen();

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
          backgroundImage={isMobile ? "/lovable-uploads/contact_us/ContactUsM.png" : "/lovable-uploads/contact_us/ContactUs.png" }
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
