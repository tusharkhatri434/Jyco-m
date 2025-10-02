import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Settings, Factory, Shield, Wrench, Phone, Monitor, ArrowRight, CheckCircle, Clock, Users, MapPin, Headphones } from 'lucide-react';
import { scrollToTopImmediate } from '@/utils/scrollToTop';
import { useEffect } from 'react';
import { initializeScrollAnimations, ensureContentVisibility } from '@/utils/scrollAnimations';
import { useNavigate } from 'react-router-dom';
const Services = () => {

  const navigate = useNavigate();

  useEffect(() => {
    scrollToTopImmediate();
    // Immediate initialization without delay
    ensureContentVisibility();
    initializeScrollAnimations();
  }, []);
  const services = [{
    id: "design",
    title: "Custom Design & Engineering",
    img:"/lovable-uploads/service/Custom_design&Engineering.png",
    icon: Settings,
    description: "Our expert engineering team provides comprehensive design services tailored to your specific requirements, ensuring optimal performance and efficiency.",
    features: ["Load Analysis & Optimization", "3D CAD Design using Pro-E software", "Stress analysis and thermal optimization", "Custom voltage specifications"]
  }, {
    id: "manufacturing",
    title: "Manufacturing Excellence",
    img:"/lovable-uploads/service/Manufacturing_Excellence.png",
    icon: Factory,
    description: "State-of-the-art manufacturing facilities with precision equipment and quality control systems ensuring consistent, high-quality transformer production.",
    features: ["Automated Production Lines", "Computer-controlled manufacturing processes", "Quality Control Systems", "Multi-stage quality checks"]
  }, {
    id: "testing",
    title: "Testing & Quality Assurance",
    img:"/lovable-uploads/service/Testing&qualityAssurance.png",
    icon: Shield,
    description: "Comprehensive testing protocols ensuring every transformer meets the highest standards of performance, safety, and reliability before delivery.",
    features: ["Type Testing as per IS/IEC standards", "Routine Testing on every transformer", "Temperature rise and impulse tests", "Short circuit testing"]
  }, {
    id: "installation",
    title: "Installation & Commissioning",
    img:"/lovable-uploads/service/Installation&Commissioning.png",
    icon: Wrench,
    description: "Professional installation services by certified technicians ensuring safe, efficient setup and optimal performance of your transformer systems.",
    features: ["Site Preparation and survey", "Professional Installation by certified technicians", "Transportation and positioning", "Complete commissioning services"]
  }, {
    id: "maintenance",
    title: "Maintenance & Support",
    img:"/lovable-uploads/service/Maintenanceandsupport.png",
    icon: Monitor,
    description: "Comprehensive maintenance programs and technical support to ensure optimal performance and extend the operational life of your transformers.",
    features: ["Preventive Maintenance programs", "Condition Monitoring systems", "Performance tracking", "Predictive maintenance analytics"]
  }, {
    id: "support",
    title: "24/7 Technical Support",
    img:"/lovable-uploads/service/Services-support.png",
    icon: Phone,
    description: "Round-the-clock technical assistance and customer support ensuring immediate response to any queries or emergency situations.",
    features: ["Emergency Hotline: 1800-123-JAYCO", "Remote Monitoring capabilities", "< 4 Hours Response Time", "100+ Certified Engineers"]
  }];
  const supportStats = [{
    icon: Phone,
    title: "24/7 Emergency Hotline",
    value: "1800-123-JAYCO",
    description: "Immediate response to critical situations"
  }, {
    icon: MapPin,
    title: "Nationwide Service Network",
    value: "50+ Service Locations",
    description: "Service centers across major cities"
  }, {
    icon: Clock,
    title: "Rapid Response Time",
    value: "< 4 Hours Response",
    description: "Quick deployment of technical teams"
  }, {
    icon: Users,
    title: "Certified Technicians",
    value: "100+ Certified Engineers",
    description: "Highly trained professionals"
  }];
  const scrollToContact = () => {
    navigate("/contact");
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection
          title="Our Services"
          subtitle="End-to-end transformer solutions from design and manufacturing to installation, maintenance, and 24/7 support"
          description="Complete lifecycle management for all your transformer needs with expert consultation and round-the-clock support."
          showCTA={true}
          backgroundImage="/lovable-uploads/product/OurServices.png"
        />

        {/* Service Portfolio Continuous Layout */}
        <section className="py-10 bg-background">
          <div className="container mx-auto px-4">
            {/* <div className="text-center mb-16 scroll-animate-fade">
              <h2 className="text-4xl font-bold mb-6 md:text-5xl text-red-600 scroll-animate-left">
                Our Service <span className="text-primary">Portfolio</span>
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed font-semibold scroll-animate-right scroll-stagger-2 text-base">
                Comprehensive services covering every aspect of transformer lifecycle management
              </p>
            </div> */}

            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={service.id} className={`scroll-animate-zoom`}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-12 bg-white">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {(index + 1) % 2 == 0 && (
                          <div className="relative scroll-animate-zoom">
                            <img
                              alt={service.title}
                              className="rounded-2xl w-[33rem]"
                              src={service.img}
                            />
                          </div>
                        )}
                        <div className="text-black">
                          {/* <div className="flex items-center space-x-4 mb-6 scroll-animate-left scroll-stagger-2">
                            <div className="p-2 bg-white rounded-xl backdrop-blur-sm">
                              <service.icon className="h-6 w-10 text-black" />
                            </div>
                            <Badge variant="secondary" className="bg-white text-black border-black">
                              Professional Service
                            </Badge>
                          </div> */}
                          <h3 className="text-4xl text-red-600 font-bold mb-6 scroll-animate-right scroll-stagger-3">
                            {service.title}
                          </h3>
                          <p className="text-xl text-black/95 mb-8 leading-relaxed scroll-animate-fade scroll-stagger-4">
                            {service.description}
                          </p>
                          <div className="space-y-3 mb-8">
                            {service.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className={`flex items-center space-x-3 scroll-animate-left scroll-stagger-${
                                  idx + 5
                                }`}
                              >
                                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                                <span className="text-black/95">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <Button
                            onClick={scrollToContact}
                            size="lg"
                            className="bg-white hover:bg-red-600 font-bold hover:text-white border outline transition-all duration-300 transform hover:scale-105 rounded-2xl scroll-animate-bounce scroll-stagger-8"
                          >
                            Know More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                        {(index + 1) % 2 != 0 && (
                          <div className="relative scroll-animate-zoom">
                            <img
                              alt={service.title}
                              className="rounded-2xl w-[33rem]"
                              src={service.img}
                            />
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 24/7 Support Infrastructure */}
        {/* <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate-fade">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-600 scroll-animate-left">
                24/7 Support <span className="text-primary">Infrastructure</span>
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-base font-semibold scroll-animate-right scroll-stagger-2">
                Comprehensive support network ensuring you're never alone when you need assistance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportStats.map((stat, index) => <Card key={index} className={`text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 scroll-animate-zoom scroll-stagger-${index + 1} modern-card border-none`}>
                  <CardHeader className="pb-3 border-none rounded-2xl py-[5px] bg-gray-100">
                    <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="h-8 w-8 text-red-600" />
                    </div>
                    <CardTitle className="text-lg text-black">{stat.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="py-[10px]">
                    <p className="text-muted-foreground text-sm py-[10px]">{stat.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
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
                <Button
                  onClick={() => navigate("/contact")}
                  size="lg"
                  className="bg-white hover:bg-gray-200 text-red-600 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 rounded-3xl scroll-animate-zoom scroll-stagger-2"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  onClick={() => navigate("/products")}
                  variant="outline"
                  size="lg"
                  className="border-white hover:bg-gray-200 text-red-600 bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 rounded-3xl scroll-animate-zoom scroll-stagger-5"
                >
                  View Our Products
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
export default Services;