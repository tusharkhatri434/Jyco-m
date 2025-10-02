
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSlideshow from '@/components/HeroSlideshow';
import ClientMarquee from '@/components/ClientMarquee';
import FloatingContactButton from '@/components/FloatingContactButton';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';
import HomePageSummaries from '@/components/HomePageSummaries';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Factory, Shield, Users, Award, ArrowRight, Phone, Zap, Settings, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { scrollToTopImmediate } from '@/utils/scrollToTop';
import { useEffect } from 'react';
import { initializeScrollAnimations, optimizeScrollPerformance } from '@/utils/scrollAnimations';
import Certifications from '../components/Certifications';
import CustomerCarousel from '@/components/CustomerCarousel';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    scrollToTopImmediate();
    setTimeout(() => {
      initializeScrollAnimations();
      optimizeScrollPerformance();
    }, 100);
  }, []);

  const quickServices = [{
    icon: Factory,
    title: "Power Transformers",
    description: "High-quality transformers up to 10 MVA for industrial applications",
    link: "/products"
  }, {
    icon: Zap,
    title: "Voltage Stabilizers",
    description: "Advanced stabilizers ensuring consistent power supply",
    link: "/products"
  }, {
    icon: Settings,
    title: "Custom Solutions",
    description: "Tailored electrical solutions for your specific needs",
    link: "/services"
  }, {
    icon: Shield,
    title: "Quality Assurance",
    description: "ISO certified with comprehensive testing protocols",
    link: "/certifications"
  }];

  const companyStats = [{
    number: "35+",
    label: "Years Experience"
  }, {
    number: "24,000+",
    label: "Units Manufactured"
  }, {
    number: "10 MVA",
    label: "Max Capacity"
  }, {
    number: "ISO",
    label: "Certified"
  }];



  return (
    <div className="min-h-screen professional-bg">
      <PerformanceOptimizer />
      <Header />
      <FloatingContactButton />
      <main>
        <div className="scroll-animate-fade">
          <HeroSlideshow />
        </div>
        
        {/* Client Marquee */}
        {/* <div className="bg-white scroll-animate-slide-up">
          <ClientMarquee />
        </div> */}

        {/* Company Introduction - Enhanced with comprehensive scroll animations */}
        {/* <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-animate-left">
                Welcome to <span className="text-red-600">Jayco Electricals</span>
              </h2>
              <p className="max-w-3xl mx-auto leading-relaxed text-base font-semibold text-zinc-950 scroll-animate-right scroll-stagger-1">
                India's premier manufacturer of high-quality power transformers and electrical equipment. 
                For over three decades, we've been powering industries with innovative, reliable solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {companyStats.map((stat, index) => (
                <Card key={index} className={`text-center luxury-card scroll-animate-zoom scroll-stagger-${index + 1}`}>
                  <CardContent className="rounded-xl h-full p-6 bg-red-600">
                    <div className="text-3xl font-bold text-white mb-2 scroll-animate-bounce scroll-stagger-${index + 2}">{stat.number}</div>
                    <p className="text-sm text-white font-normal scroll-animate-fade scroll-stagger-${index + 2}">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Quick Services - Enhanced with comprehensive scroll animations */}
        {/* <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-animate-left">
                Our Key <span className="text-red-600">Solutions</span>
              </h2>
              <p className="max-w-2xl mx-auto text-base text-zinc-950 font-bold scroll-animate-right scroll-stagger-1">
                Comprehensive electrical solutions designed for excellence and reliability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {quickServices.map((service, index) => (
                <Card key={index} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-2 luxury-card scroll-animate-zoom scroll-stagger-${index + 1}`}>
                  <CardHeader className="text-center pb-4 bg-red-700 rounded-3xl scroll-animate-fade scroll-stagger-${index + 1}">
                    <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 scroll-animate-bounce scroll-stagger-${index + 1}">
                      <service.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-white scroll-animate-slide-up scroll-stagger-${index + 1}">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center scroll-animate-fade scroll-stagger-${index + 5}">
                    <p className="text-sm mb-4 py-[10px] text-zinc-950 font-normal scroll-animate-slide-up scroll-stagger-${index + 1}">{service.description}</p>
                    <Button 
                      onClick={() => navigate(service.link)} 
                      variant="outline" 
                      size="sm" 
                      className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-3xl scroll-animate-bounce scroll-stagger-${index + 6}"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Homepage Summaries - Enhanced with scroll animations */}
        <div className="scroll-animate-fade">
          <HomePageSummaries />
        </div>
          
         
        {/* Call to Action - Enhanced with comprehensive scroll animations */}
        <section className="py-16 bg-gray-100 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="scroll-animate-slide-up">
              <h2 className="text-3xl text-red-600 md:text-4xl font-bold mb-6 scroll-animate-left">
                Ready to Power Your Project?
              </h2>
              <p className="text-xl text-black mb-8 max-w-3xl mx-auto opacity-90 scroll-animate-right scroll-stagger-2">
                Get expert consultation and world-class transformer solutions 
                tailored to your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate-bounce scroll-stagger-2">
                <Button onClick={() => navigate('/contact')} size="lg" className="bg-white hover:bg-gray-200 text-red-600 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 rounded-3xl scroll-animate-zoom scroll-stagger-2">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button onClick={() => navigate('/products')} variant="outline" size="lg" className="border-white hover:bg-gray-200 text-red-600 bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 rounded-3xl scroll-animate-zoom scroll-stagger-5">
                  View Our Products
                </Button>
              </div>
            </div>
          </div>
        </section>
           <div className='py-24'>
              <CustomerCarousel />
              </div>
      </main>
      <div className="scroll-animate-fade">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
