
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CustomersSection from '@/components/CustomersSection';
import FloatingContactButton from '@/components/FloatingContactButton';
import { scrollToTopImmediate } from '@/utils/scrollToTop';
import { useEffect } from 'react';
import { initializeScrollAnimations, ensureContentVisibility } from '@/utils/scrollAnimations';

const Customers = () => {
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
          title="Our Valued Customers"
          subtitle="Trusted by Industry Leaders Across India"
          description="Building lasting partnerships with power utilities, industries, and government organizations nationwide."
          showCTA={false}
          backgroundImage="/lovable-uploads/img/customer_page_slide1.jpg"
        />
        <div className="section-light scroll-animate-fade">
          <CustomersSection />
        </div>
      </main>
      <div className="scroll-animate-fade">
        <Footer />
      </div>
    </div>
  );
};

export default Customers;
