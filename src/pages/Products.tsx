import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';
import FloatingContactButton from '@/components/FloatingContactButton';
import { Card, CardContent } from '@/components/ui/card';
import { scrollToTopImmediate } from '@/utils/scrollToTop';
import { useEffect } from 'react';
import { initializeScrollAnimations, ensureContentVisibility } from '@/utils/scrollAnimations';
import { useScreen } from '@/hooks/ScreenContext';
const Products = () => {

  const {isMobile} = useScreen();

  useEffect(() => {
    scrollToTopImmediate();
    // Immediate initialization without delay
    ensureContentVisibility();
    initializeScrollAnimations();
  }, []);
  return (
    <div className="min-h-screen professional-bg">
      <PerformanceOptimizer />
      <Header />
      <FloatingContactButton />
      <main>
        <HeroSection
          title="Our Product Range"
          subtitle="Comprehensive Transformer Solutions"
          description="From power transformers to voltage stabilizers, discover our complete range of electrical solutions designed for every industry need."
          showCTA={false}
          backgroundImage={isMobile ? "/lovable-uploads/product/ProductRangeM.png" : "/lovable-uploads/product/Productrange.png"}
        />

        {/* Manufacturing Excellence Section */}
        {/* <section className="py-20 section-grey">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate-fade">
              <h2 className="text-4xl font-bold text-dark-grey mb-6 text-red-600 md:text-5xl scroll-animate-left">
                Manufacturing <span className="text-primary">Excellence</span>
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed scroll-animate-right scroll-stagger-2 font-semibold text-lg">
                Where cutting-edge technology meets traditional craftsmanship to deliver unparalleled quality
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[{
              step: '1',
              title: 'Design & Engineering',
              desc: 'Advanced CAD design and precision engineering'
            }, {
              step: '2',
              title: 'Core Assembly',
              desc: 'High-grade core materials and assembly'
            }, {
              step: '3',
              title: 'Winding Process',
              desc: 'Precision winding with copper foils'
            }, {
              step: '4',
              title: 'Quality Testing',
              desc: 'Comprehensive testing and certification'
            }].map((item, index) => <Card key={index} className={`rounded-2xl bg-zinc-300 scroll-animate-zoom scroll-stagger-${index + 1} modern-card`}>
                  <CardContent className="p-8">
                    
                    <h3 className="text-xl font-semibold text-dark-grey mb-4 text-red-600 scroll-animate-left scroll-stagger-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed scroll-animate-fade scroll-stagger-4">{item.desc}</p>
                  </CardContent>
                </Card>)}
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[{
              stat: 'ISO 9001',
              label: 'Certified',
              desc: 'State-of-the-Art Facilities'
            }, {
              stat: '99.7%',
              label: 'Efficiency Rating',
              desc: 'Advanced Testing Labs'
            }, {
              stat: '<45dB',
              label: 'Noise Level',
              desc: 'Noiseless Core Design'
            }, {
              stat: '25+',
              label: 'Years Lifespan',
              desc: 'Precision Winding Process'
            }].map((item, index) => <div key={index} className={`text-center scroll-animate-bounce scroll-stagger-${index + 1}`}>
                  <div className="text-4xl font-bold text-primary mb-3 hover:scale-110 transition-transform duration-300 scroll-animate-zoom scroll-stagger-2">
                    {item.stat}
                  </div>
                  <p className="text-muted-foreground font-semibold text-lg mb-2 scroll-animate-fade scroll-stagger-3">{item.label}</p>
                  <p className="text-sm text-muted-foreground scroll-animate-fade scroll-stagger-4">{item.desc}</p>
                </div>)}
            </div>
          </div>
        </section> */}

        <div className="section-light scroll-animate-fade">
          <ProductsSection />
        </div>
      </main>
      <div className="scroll-animate-fade">
        <Footer />
      </div>
    </div>
  );
};
export default Products;