import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Shield, Globe, CheckCircle, Calendar, Building, ArrowRight, Target, TrendingUp } from 'lucide-react';
import { scrollToTopImmediate } from '@/utils/scrollToTop';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Certifications = () => {

  const navigate = useNavigate();

  useEffect(() => {
    scrollToTopImmediate();
  }, []);
  const certifications = [{
    id: "iso9001",
    title: "ISO 9001:2015",
    subtitle: "Quality Management",
    description: "International standard for quality management systems demonstrating our ability to consistently provide products that meet customer requirements.",
    scope: "Design, manufacture, installation, and servicing of power and distribution transformers",
    benefits: ["Consistent quality assurance", "Customer satisfaction focus", "Continuous improvement", "Risk-based approach"],
    validity: "2021-2024",
    certifiedBy: "Bureau Veritas",
    certificateNo: "IN-BV-QMS-2021-001",
    icon: Award
  }, {
    id: "iso14001",
    title: "ISO 14001:2015",
    subtitle: "Environmental Management",
    description: "Environmental management system standard ensuring we minimize our environmental impact while continuously improving our environmental performance.",
    scope: "Manufacturing operations and environmental impact management",
    benefits: ["Reduced environmental impact", "Waste minimization", "Energy efficiency", "Regulatory compliance"],
    validity: "2021-2024",
    certifiedBy: "SGS India",
    certificateNo: "IN-SGS-EMS-2021-015",
    icon: Globe
  }, {
    id: "ohsas18001",
    title: "OHSAS 18001",
    subtitle: "Occupational Health & Safety",
    description: "Occupational health and safety management system ensuring safe working conditions for all employees and stakeholders.",
    scope: "Workplace safety and health management across all operations",
    benefits: ["Zero accident policy", "Employee safety training", "Risk assessment protocols", "Emergency preparedness"],
    validity: "2021-2024",
    certifiedBy: "TUV India",
    certificateNo: "IN-TUV-OHS-2021-042",
    icon: Shield
  }, {
    id: "bis",
    title: "BIS Certification",
    subtitle: "Bureau of Indian Standards",
    description: "IS compliance certification for manufacturing and supplying transformers as per Indian standards in the domestic market.",
    scope: "Distribution transformers up to 2500 KVA as per IS 1180",
    benefits: ["Indian market compliance", "Government project eligibility", "Quality assurance", "Customer confidence"],
    validity: "2020-2025",
    certifiedBy: "Bureau of Indian Standards",
    certificateNo: "CM/L-9912830",
    icon: Building
  }, {
    id: "ce",
    title: "CE Marking",
    subtitle: "European Conformity",
    description: "European conformity marking indicating compliance with health, safety, and environmental protection standards for the European market.",
    scope: "Power and distribution transformers for European market",
    benefits: ["European market access", "Product safety compliance", "Quality assurance", "International recognition"],
    validity: "2020-2025",
    certifiedBy: "Notified Body 1234",
    certificateNo: "CE-1234-TR-2020-089",
    icon: Globe
  }, {
    id: "iec",
    title: "IEC Certification",
    subtitle: "International Standards",
    description: "International Electrotechnical Commission standards compliance for global transformer manufacturing and supply.",
    scope: "Power transformers as per IEC 60076 series standards",
    benefits: ["Global market access", "International quality standards", "Technical excellence", "Worldwide acceptance"],
    validity: "2020-2025",
    certifiedBy: "IECEx Certification Body",
    certificateNo: "IECEx-CB-2020-156",
    icon: Globe
  }];
  const qualityPolicies = [{
    title: "Zero Defect Policy",
    description: "Commitment to delivering defect-free products through rigorous quality control and testing procedures."
  }, {
    title: "Customer First Approach",
    description: "Customer satisfaction is our primary goal, driving all our quality initiatives and continuous improvement efforts."
  }, {
    title: "Continuous Improvement",
    description: "Regular review and enhancement of processes, technologies, and systems to maintain excellence."
  }, {
    title: "Compliance Assurance",
    description: "Strict adherence to all applicable national and international standards and regulatory requirements."
  }];
  const testingStandards = [{
    code: "IS 2026",
    description: "Indian Standard for Power Transformers"
  }, {
    code: "IS 1180",
    description: "Indian Standard for Distribution Transformers"
  }, {
    code: "IEC 60076",
    description: "International Standard for Power Transformers"
  }, {
    code: "IEC 60726",
    description: "Dry-type Power Transformers"
  }, {
    code: "IEEE C57.12.00",
    description: "General Requirements for Liquid-Immersed Distribution Transformers"
  }, {
    code: "BS 171",
    description: "British Standard for Power Transformers"
  }];
  const qualityStats = [{
    value: "6+",
    label: "International Certifications"
  }, {
    value: "35+",
    label: "Years of Excellence"
  }, {
    value: "100%",
    label: "Compliance Rate"
  }, {
    value: "Zero",
    label: "Major Non-Conformities"
  }];
  const scrollToContact = () => {
    navigate("/contact");
  };
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection title="Certifications & Quality Standards" subtitle="Our commitment to excellence is validated through rigorous quality management systems and international certifications" description="Ensuring reliable, world-class products meeting the highest industry standards through comprehensive quality assurance and compliance." showCTA={true} backgroundImage="/lovable-uploads/img/quality_page_slide1.jpg" />

        {/* Certifications Continuous Layout */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">
                Our Certifications & <span className="text-primary">Standards</span>
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed font-semibold text-base">
                Certified excellence in quality management, environmental sustainability, and safety standards that validate our commitment to delivering world-class transformer solutions.
              </p>
            </div>

            <div className="w-full h-full gap-5 grid md:grid-cols-2 items-center">
              {certifications.map((cert, index) =>
                  <Card className="bg-red-600 h-full overflow-hidden bg-gradient-to-br from-primary/90 to-primary/75 border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <CardContent className="p-12 h-full bg-red-600">
                      <div className="">
                        <div className="text-white">
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                              <cert.icon className="h-10 w-10 text-black bg-transparent" />
                            </div>
                            <div>
                              <h3 className="text-3xl font-bold text-zinc-950">{cert.title}</h3>
                              <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-white/30">
                                {cert.subtitle}
                              </Badge>
                            </div>
                          </div>
                          
                          <p className="text-xl text-white/95 mb-8 leading-relaxed">
                            {cert.description}
                          </p>
                          
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3">Scope of Certification:</h4>
                              <p className="text-white/95">{cert.scope}</p>
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                              <div className="grid md:grid-cols-2 gap-2">
                                {cert.benefits.map((benefit, idx) => <div key={idx} className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-white flex-shrink-0" />
                                    <span className="text-white/95">{benefit}</span>
                                  </div>)}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* <Card className="bg-white/15 backdrop-blur-sm border-white/25">
                          
                          
                        </Card> */}
                      </div>
                    </CardContent>
                  </Card>)}
            </div>
          </div>
        </section>

        {/* Quality Policies */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">
                Quality Policies & <span className="text-primary">Commitments</span>
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed font-semibold text-lg text-center">Our unwavering commitment to quality excellence drives everything we do, 
from design to delivery</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {qualityPolicies.map((policy, index) => <Card key={index} style={{
              animationDelay: `${index * 0.1}s`
            }} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary hover:-translate-y-1 rounded-2xl">
                  <CardHeader className="bg-red-600 rounded-2xl">
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2 text-primary" />
                      {policy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="py-px rounded-2xl bg-white">
                    <p className="leading-relaxed py-[10px] font-medium text-zinc-950">{policy.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Testing Standards */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">
                Testing Standards <span className="text-primary">Compliance</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-semibold">
                Our products are rigorously tested and certified according to leading national and international standards to ensure optimal performance and safety.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testingStandards.map((standard, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardHeader className="pb-3 rounded-2xl bg-red-600">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-white border-primary font-mono py-0 mx-0 px-[10px]">
                        {standard.code}
                      </Badge>
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                  </CardHeader>
                  <CardContent className="py-[10px]">
                    <p className="text-muted-foreground text-sm leading-relaxed">{standard.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Quality Stats */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">
                Quality Excellence <span className="text-primary">by Numbers</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityStats.map((stat, index) => <Card key={index} style={{
              animationDelay: `${index * 0.1}s`
            }} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-red-700">
                  <CardContent className="p-8 bg-red-700 rounded-2xl">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2 bg-transparent">{stat.value}</div>
                    <p className="text-zinc-50 font-bold">{stat.label}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/90 to-primary/75 bg-red-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Certified Quality, Guaranteed Performance
            </h2>
            <p className="text-xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
              Our internationally recognized certifications ensure that every transformer meets the highest standards of quality, safety, and performance for your critical applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={scrollToContact} size="lg" className="bg-white hover:bg-primary border border-white hover:border-white transition-all duration-300 transform hover:scale-105 rounded-2xl text-neutral-950">
                Quality Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button onClick={()=>navigate("/contact")} variant="outline" size="lg" className="border-white hover:bg-white transition-all duration-300 transform hover:scale-105 rounded-2xl text-white">
                Certification Details
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Certifications;