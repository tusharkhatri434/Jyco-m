import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Factory, Shield, Wrench, Monitor, Phone, ArrowRight, CheckCircle } from 'lucide-react';
const ServicesSection = () => {
  const services = [{
    id: "custom",
    title: "Custom Design & Engineering",
    icon: Settings,
    description: "Our expert engineering team provides comprehensive design services tailored to your specific requirements, ensuring optimal performance and efficiency for every application.",
    features: ["Load Analysis & Optimization", "3D CAD Design using Pro-E software", "Stress analysis and thermal optimization", "Custom voltage specifications", "Application-specific engineering", "Performance optimization"]
  }, {
    id: "manufacturing",
    title: "Manufacturing Excellence",
    icon: Factory,
    description: "State-of-the-art manufacturing facilities with precision equipment and quality control systems ensuring consistent, high-quality transformer production with international standards.",
    features: ["Automated Production Lines", "Computer-controlled manufacturing processes", "Quality Control Systems", "Multi-stage quality checks", "ISO 9001 certified processes", "Advanced testing equipment"]
  }, {
    id: "testing",
    title: "Testing & Quality Assurance",
    icon: Shield,
    description: "Comprehensive testing protocols ensuring every transformer meets the highest standards of performance, safety, and reliability before delivery to our valued customers.",
    features: ["Type Testing as per IS/IEC standards", "Routine Testing on every transformer", "Temperature rise and impulse tests", "Short circuit testing", "Insulation resistance testing", "Performance validation"]
  }, {
    id: "installation",
    title: "Installation & Commissioning",
    icon: Wrench,
    description: "Professional installation services by certified technicians ensuring safe, efficient setup and optimal performance of your transformer systems across various environments.",
    features: ["Site Preparation and survey", "Professional Installation by certified technicians", "Transportation and positioning", "Complete commissioning services", "Safety compliance checks", "Performance verification"]
  }, {
    id: "maintenance",
    title: "Maintenance & Support",
    icon: Monitor,
    description: "Comprehensive maintenance programs and technical support to ensure optimal performance and extend the operational life of your transformers with predictive analytics.",
    features: ["Preventive Maintenance programs", "Condition Monitoring systems", "Performance tracking", "Predictive maintenance analytics", "Oil analysis services", "Thermal imaging inspections"]
  }, {
    id: "support",
    title: "24/7 Technical Support",
    icon: Phone,
    description: "Round-the-clock technical assistance and customer support ensuring immediate response to any queries or emergency situations with our dedicated support team.",
    features: ["Emergency Hotline: 1800-123-JAYCO", "Remote Monitoring capabilities", "< 4 Hours Response Time", "100+ Certified Engineers", "Nationwide service network", "Emergency repair services"]
  }];
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 text-orange-700 text-center md:text-5xl">
            Our Service <span className="text-primary text-5xl">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive services covering every aspect of transformer lifecycle management with excellence and dedication.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => <div key={service.id} className="animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <Card className="overflow-hidden bg-gradient-to-br from-primary/80 to-primary/60 border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <CardContent className="p-12 bg-red-700">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                          <service.icon className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-4xl font-bold">{service.title}</h3>
                      </div>
                      
                      <p className="text-xl text-white/95 mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {service.features.map((feature, idx) => <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                            <span className="text-white/95">{feature}</span>
                          </div>)}
                      </div>
                      
                      <Button onClick={scrollToContact} size="lg" className="border border-white hover:border-white transition-all duration-300 transform hover:scale-105 text-zinc-950 rounded-2xl bg-zinc-400 hover:bg-zinc-300">
                        Know More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="relative lg:block hidden">
                      <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                        <service.icon className="h-32 w-32 text-white/30" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>)}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-primary/80 to-primary/60 border-primary/30">
            <CardContent className="p-12 bg-red-600 rounded-2xl">
              <h3 className="text-4xl font-bold text-white mb-6">
                Ready to Experience Excellence?
              </h3>
              <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed">
                Our team of experienced engineers and technicians is ready to deliver world-class 
                transformer solutions tailored to your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={scrollToContact} size="lg" className="bg-white text-primary hover:bg-white hover:text-white border border-white hover:border-white transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button onClick={scrollToContact} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105">
                  Get Service Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ServicesSection;