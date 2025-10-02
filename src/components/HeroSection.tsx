import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useScreen } from '@/hooks/ScreenContext';
interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaAction?: () => void;
  backgroundImage?: string;
  showScrollIndicator?: boolean;
}
const HeroSection = ({
  title,
  subtitle,
  description,
  showCTA = true,
  ctaText = "Get Started",
  ctaAction,
  backgroundImage,
  showScrollIndicator = true
}: HeroSectionProps) => {
 
      const { isMobile } = useScreen();

  const navigate = useNavigate();
  const handleCTAClick = () => {
    if (ctaAction) {
      ctaAction();
    } else {
      navigate('/contact');
    }
  };


  const scrollToNextSection = () => {
    const headerHeight = 80;
    const windowHeight = window.innerHeight;
    const scrollTarget = windowHeight - headerHeight;
    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    });
  };
  return <section className="relative min-w-[90vw] h-[60vh] md:h-[50vh] mt-20 lg:mt-28 overflow-hidden flex items-center justify-center" style={{
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: `${isMobile ? 'contain' : 'cover'}`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {!backgroundImage && <div className="absolute inset-0 bg-red-600/90"></div>}
      
      <div className="container mx-auto relative z-10 rounded-3xl px-[5px]">
        <div className="mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight scroll-animate-left text-shadow">
            {title}
          </h1>
          {/* {subtitle} */}
          {description && <p className="text-lg mb-12 max-w-4xl mx-auto leading-relaxed scroll-animate md:text-2xl font-semibold text-white">
              {/* {description} */}
            </p>}
          {showCTA && <div className="scroll-animate-bounce">
              {/* <Button onClick={handleCTAClick} size="lg" className="bg-white text-professional-red hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-scale group text-zinc-950 rounded-3xl shadow-2xl">
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button> */}
            </div>}
        </div>
      </div>

      {showScrollIndicator && <div className="scroll-indicator scroll-animate" onClick={scrollToNextSection}>
          <div className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors cursor-pointer">
            
            
          </div>
        </div>}
    </section>;
};
export default HeroSection;