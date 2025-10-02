
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FloatingContactButton from '@/components/FloatingContactButton';
import { scrollToTopImmediate } from '@/utils/scrollToTop';
import { useEffect } from 'react';
import { initializeScrollAnimations, ensureContentVisibility } from '@/utils/scrollAnimations';
import { useLocation } from 'react-router-dom';
import { useScreen } from '@/hooks/ScreenContext';

const About = () => {

  const location = useLocation();
    const { isMobile } = useScreen();

  useEffect(() => {
    scrollToTopImmediate();
    // Immediate initialization without delay
    ensureContentVisibility();
    initializeScrollAnimations();

     const hash = location.hash.split('#')[1];
      console.log(hash)
    if (hash=="about") {
      const scrollToElement = () => {
        const element = document.getElementById(`about`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth',});
        }
      };

      // Wait for DOM to render the element
      setTimeout(scrollToElement, 200); // 200ms delay works well for most setups
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen luxury-bg">
      <Header />
      <FloatingContactButton />
      <main>
        <HeroSection
          title="About Us"
          subtitle=""
          description="Where cutting-edge technology meets traditional craftsmanship to deliver unparalleled quality in transformer solutions."
          showCTA={false}
          backgroundImage={isMobile ? "/lovable-uploads/about/AboutUsM.png" : "/lovable-uploads/about/About_Us.png" }
        />
        <div className="section-light scroll-animate-fade">
          <AboutSection />
        </div>
      </main>
      <div className="scroll-animate-fade">
        <Footer />
      </div>
    </div>
  );
};

export default About;
