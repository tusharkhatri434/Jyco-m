import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSlideshow from '@/components/HeroSlideshow';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ProductGallerySection from '@/components/ProductGallerySection';
import ClientMarquee from '@/components/ClientMarquee';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Factory, 
  Building2, 
  Zap, 
  MapPin, 
  Wheat, 
  Mountain,
  ArrowRight,
  Award,
  Shield,
  Users,
  Phone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { scrollToTopImmediate } from '@/utils/scrollToTop';
import { useEffect } from 'react';
import { initializeScrollAnimations, ensureContentVisibility } from '@/utils/scrollAnimations';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    scrollToTopImmediate();
    // Immediate initialization without delay
    ensureContentVisibility();
    initializeScrollAnimations();
  }, []);

  const services = [
    {
      icon: Factory,
      title: "Custom Design & Engineering",
      description: "Expert engineering solutions tailored to your specific industrial requirements with precision and innovation"
    },
    {
      icon: Shield,
      title: "Manufacturing Excellence", 
      description: "State-of-the-art ISO certified facilities with advanced quality control and testing protocols"
    },
    {
      icon: Award,
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing procedures ensuring reliability, safety, and optimal performance standards"
    },
    {
      icon: Users,
      title: "Installation & Support",
      description: "Professional installation services with 24/7 technical support and maintenance solutions"
    }
  ];

  const industries = [
    {
      icon: Factory,
      title: "Manufacturing & Heavy Industries",
      capacity: "Up to 10 MVA",
      description: "Steel mills, cement plants, chemical industries"
    },
    {
      icon: Building2,
      title: "Commercial & Infrastructure",
      capacity: "25 KVA to 2500 KVA", 
      description: "Office buildings, hospitals, educational institutions"
    },
    {
      icon: Zap,
      title: "Renewable Energy",
      capacity: "100 KVA to 5 MVA",
      description: "Solar power plants, wind farms, grid integration"
    },
    {
      icon: MapPin,
      title: "Power Utilities",
      capacity: "1.5 MVA to 10 MVA",
      description: "Electricity boards, transmission networks"
    }
  ];

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management System" },
    { name: "ISO 14001", description: "Environmental Management" },
    { name: "OHSAS 18001", description: "Occupational Health & Safety" },
    { name: "BIS Certified", description: "Bureau of Indian Standards" },
    { name: "CE Marking", description: "European Conformity" },
    { name: "IEC Certified", description: "International Standards" }
  ];

  return (
    <div className="min-h-screen professional-bg">
      <Header />
      <main>
        <div className="scroll-animate-fade">
          <HeroSlideshow />
        </div>
        {/* <div className="scroll-animate-fade">
          <ClientMarquee />
        </div> */}

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate-fade">
              <h2 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6 scroll-animate-left">
                Comprehensive Electrical <span className="text-professional-red">Solutions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed scroll-animate-right scroll-stagger-2">
                End-to-end transformer solutions from design and manufacturing to installation and support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 scroll-animate-bounce scroll-stagger-3">
                <Button onClick={() => navigate('/contact')} size="lg" className="btn-professional group">
                  Get Expert Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button onClick={() => navigate('/products')} variant="outline" size="lg" className="border-professional-red text-professional-red hover:bg-professional-red hover:text-white">
                  View Products
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`professional-card text-center p-8 scroll-animate-zoom scroll-stagger-${index + 1} modern-card`}
                >
                  <div className="mx-auto w-16 h-16 bg-professional-red/10 rounded-full flex items-center justify-center mb-6 hover:bg-professional-red/20 transition-colors scroll-animate-bounce scroll-stagger-2">
                    <service.icon className="h-8 w-8 text-professional-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-grey mb-4 scroll-animate-left scroll-stagger-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed scroll-animate-fade scroll-stagger-4">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="scroll-animate-fade">
          <WhyChooseUsSection />
        </div>
        <div className="scroll-animate-fade">
          <ProductGallerySection />
        </div>

        {/* About Jayco Section */}
        <section className="py-20 bg-professional-grey scroll-animate-fade" id="about-section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="scroll-animate-left">
                <h2 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6 scroll-animate-left">
                  About <span className="text-professional-red">Jayco Electricals</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed scroll-animate-fade scroll-stagger-2">
                  Leading manufacturer of power and electrical transformers with over 30 years of excellence 
                  in engineering, quality, and customer satisfaction across India and beyond.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed scroll-animate-fade scroll-stagger-3">
                  Since our establishment, we have been at the forefront of electrical equipment manufacturing, 
                  specializing in high-performance power transformers, distribution transformers, and advanced control panels.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-8">
                  {[
                    { number: "24,000+", label: "Units Manufactured" },
                    { number: "35+", label: "Years Excellence" },
                    { number: "10 MVA", label: "Max Capacity" },
                    { number: "ISO", label: "Certified" }
                  ].map((stat, index) => (
                    <div key={index} className={`text-center scroll-animate-zoom scroll-stagger-${index + 4}`}>
                      <div className="text-3xl font-bold text-professional-red mb-2 scroll-animate-bounce scroll-stagger-5">{stat.number}</div>
                      <p className="text-muted-foreground text-sm scroll-animate-fade scroll-stagger-6">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 scroll-animate-bounce scroll-stagger-8">
                  <Button onClick={() => navigate('/about')} size="lg" className="btn-professional group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button onClick={() => navigate('/contact')} variant="outline" size="lg" className="border-professional-red text-professional-red hover:bg-professional-red hover:text-white">
                    Start Partnership
                  </Button>
                </div>
              </div>
              <div className="relative scroll-animate-right scroll-stagger-2">
                <div className="absolute inset-0 bg-gradient-to-r from-professional-red/10 to-transparent rounded-2xl"></div>
                <img
                  src="/lovable-uploads/a2a9380f-9e60-4f52-bd27-8f1676623beb.png"
                  alt="Jayco Manufacturing Facility"
                  className="professional-card-image rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate-fade">
              <h2 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6 scroll-animate-left">
                Industries We <span className="text-professional-red">Serve</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed scroll-animate-right scroll-stagger-2">
                Delivering specialized transformer solutions across diverse sectors with precision engineering
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className={`professional-card p-6 scroll-animate-zoom scroll-stagger-${index + 1} modern-card`}
                >
                  <div className="flex items-center justify-between mb-4 scroll-animate-left scroll-stagger-2">
                    <div className="p-3 bg-professional-red/10 rounded-lg hover:bg-professional-red/20 transition-colors">
                      <industry.icon className="h-6 w-6 text-professional-red" />
                    </div>
                    <span className="text-xs font-medium text-professional-red bg-professional-red/10 px-2 py-1 rounded scroll-animate-bounce scroll-stagger-3">{industry.capacity}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-grey mb-3 scroll-animate-right scroll-stagger-4">{industry.title}</h3>
                  <p className="text-muted-foreground text-sm scroll-animate-fade scroll-stagger-5">{industry.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center scroll-animate-bounce scroll-stagger-5">
              <Button onClick={() => navigate('/industries')} size="lg" className="btn-professional group">
                View All Industries
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-professional-grey">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate-fade">
              <h2 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6 scroll-animate-left">
                Quality <span className="text-professional-red">Certifications</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed scroll-animate-right scroll-stagger-2">
                Our commitment to quality validated by international certifications and standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className={`professional-card text-center p-6 scroll-animate-zoom scroll-stagger-${index + 1} modern-card`}
                >
                  <div className="mx-auto w-12 h-12 bg-professional-red/10 rounded-full flex items-center justify-center mb-4 hover:bg-professional-red/20 transition-colors scroll-animate-bounce scroll-stagger-2">
                    <Award className="h-6 w-6 text-professional-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-grey mb-2 scroll-animate-left scroll-stagger-3">{cert.name}</h3>
                  <p className="text-muted-foreground text-sm scroll-animate-fade scroll-stagger-4">{cert.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center scroll-animate-bounce scroll-stagger-7">
              <Button onClick={() => navigate('/certifications')} size="lg" className="btn-professional group">
                View All Certifications
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-professional text-white" id="contact-section">
          <div className="container mx-auto px-4 text-center">
            <div className="scroll-animate-fade">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 scroll-animate-left">
                Ready to Experience Excellence?
              </h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90 scroll-animate-right scroll-stagger-2">
                Our team of experienced engineers is ready to deliver world-class 
                transformer solutions tailored to your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate-bounce scroll-stagger-3">
                <Button 
                  onClick={() => navigate('/contact')} 
                  size="lg" 
                  className="bg-white text-professional-red hover:bg-gray-100 px-8 py-4 text-lg font-semibold group"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={() => navigate('/contact')} 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-professional-red px-8 py-4 text-lg font-semibold"
                >
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="scroll-animate-fade">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
