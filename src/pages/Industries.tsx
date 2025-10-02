import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FloatingContactButton from '@/components/FloatingContactButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Factory, Building2, Zap, MapPin, Wheat, Mountain, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { scrollToTopImmediate } from '@/utils/scrollToTop';
import { useEffect } from 'react';
import { initializeScrollAnimations, ensureContentVisibility } from '@/utils/scrollAnimations';
import { useNavigate } from 'react-router-dom';
const Industries = () => {
 
  const navigate = useNavigate();


  useEffect(() => {
    scrollToTopImmediate();
    // Immediate initialization without delay
    ensureContentVisibility();
    initializeScrollAnimations();
  }, []);
  const industries = [{
    id: "manufacturing",
    title: "Manufacturing & Heavy Industries",
    icon: Factory,
    capacity: "Up to 10 MVA",
    voltage: "33 kV Class",
    description: "Custom power solutions for steel mills, cement plants, chemical industries, and heavy manufacturing facilities requiring reliable, high-capacity transformers.",
    features: ["Heavy-duty industrial transformers", "Custom voltage specifications", "High-temperature resistance", "Robust construction for harsh environments"],
    applications: ["Steel Mills", "Cement Plants", "Chemical Industries", "Heavy Manufacturing"],
    image: "/lovable-uploads/img/industries_page_manufacturing_heavy_Industries.jpeg"
  }, {
    id: "commercial",
    title: "Commercial & Infrastructure",
    icon: Building2,
    capacity: "25 KVA to 2500 KVA",
    voltage: "11 kV Class",
    description: "Reliable distribution transformers for office complexes, shopping malls, hospitals, educational institutions, and urban infrastructure projects.",
    features: ["Compact design for urban spaces", "Low noise operation", "Energy efficient performance", "Easy maintenance access"],
    applications: ["Office Buildings", "Shopping Centers", "Hospitals", "Educational Institutions"],
    image: "/lovable-uploads/img/industries_page_commerical_infrastructure.jpeg"
  }, {
    id: "renewable",
    title: "Renewable Energy",
    icon: Zap,
    capacity: "100 KVA to 5 MVA",
    voltage: "33 kV Class",
    description: "Specialized transformers for solar power plants, wind farms, and renewable energy integration with superior efficiency and grid compatibility.",
    features: ["Solar inverter duty transformers", "Grid integration solutions", "Weather resistant design", "High efficiency ratings"],
    applications: ["Solar Power Plants", "Wind Farms", "Hydroelectric Projects", "Grid Integration"],
    image: "/lovable-uploads/img/industries_page_renewable_energy.jpeg"
  }, {
    id: "utilities",
    title: "Power Utilities",
    icon: MapPin,
    capacity: "1.5 MVA to 10 MVA",
    voltage: "33 kV Class",
    description: "High-capacity power transformers for electricity boards, power generation plants, and transmission networks across India.",
    features: ["High voltage capacity", "Grid-compliant design", "Remote monitoring capability", "Long-term reliability"],
    applications: ["State Electricity Boards", "Power Plants", "Transmission Networks", "Substations"],
    image: "/lovable-uploads/img/industries_page_power_utilities.jpeg"
  }, {
    id: "rural",
    title: "Rural Electrification",
    icon: Wheat,
    capacity: "25 KVA to 500 KVA",
    voltage: "11 kV Class",
    description: "Efficient distribution transformers designed for rural areas, supporting agricultural development and village electrification programs.",
    features: ["Weatherproof construction", "Low maintenance design", "Cost-effective solutions", "Easy transportation"],
    applications: ["Village Electrification", "Agricultural Pumps", "Rural Industries", "Community Centers"],
    image: "/lovable-uploads/img/industries_page_rural_electrification.jpeg"
  }, {
    id: "mining",
    title: "Mining & Oil",
    icon: Mountain,
    capacity: "100 KVA to 5 MVA",
    voltage: "33 kV Class",
    description: "Rugged transformers built for extreme conditions in mining operations, oil refineries, and petrochemical plants with enhanced safety features.",
    features: ["Explosion-proof design", "Corrosion resistant materials", "Extreme weather capability", "Enhanced safety features"],
    applications: ["Mining Operations", "Oil Refineries", "Petrochemical Plants", "Offshore Platforms"],
    image: "/lovable-uploads/img/industries_page_mining_oil.jpeg"
  }];
  const stats = [{
    value: "15+",
    label: "Industries Served"
  }, {
    value: "500+",
    label: "Industrial Clients"
  }, {
    value: "1000+",
    label: "Projects Completed"
  }, {
    value: "99.5%",
    label: "Reliability Rate"
  }];
  const scrollToContact = () => {
    navigate("/contact");
  };
  return <div className="min-h-screen luxury-bg">
      <Header />
      <FloatingContactButton />
      <main>
        <HeroSection title="Industries We Serve" subtitle="Delivering specialized transformer solutions across diverse sectors with precision engineering and industry expertise" description="Tailored power solutions engineered for the unique demands of each industry sector with proven reliability and performance." showCTA={true} backgroundImage="/lovable-uploads/img/industries_slide1.jpg" />

        {/* Industry Solutions */}
        <section className="py-20 section-light bg-red-500">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate-fade">
              <h2 className="text-4xl font-bold mb-6 text-red-600 md:text-5xl scroll-animate-left">
                Industry Solutions <span className="text-primary">Portfolio</span>
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-base font-semibold scroll-animate-right scroll-stagger-2">
                Tailored transformer solutions engineered for the unique demands of each industry sector
              </p>
            </div>

            {/* <div className="space-y-20">
              {industries.map((industry, index) => <div key={industry.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <Card className={`bg-red-200 rounded-2xl scroll-animate-zoom scroll-stagger-${index % 4 + 1} modern-card`}>
                    <CardContent className="p-0 bg-red-600 rounded-2xl px-[15px] py-[15px]">
                      <div className="flex items-center space-x-3 mb-6 scroll-animate-left scroll-stagger-2">
                        <div className="p-3 bg-primary/10 rounded-xl hover-scale">
                          <industry.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="scroll-animate-bounce scroll-stagger-3">{industry.capacity}</Badge>
                          <Badge variant="outline" className="scroll-animate-bounce scroll-stagger-4">{industry.voltage}</Badge>
                        </div>
                      </div>
                      <h3 className="text-3xl mb-6 scroll-animate-right scroll-stagger-5 font-bold text-zinc-50">{industry.title}</h3>
                      <p className="text-muted-foreground mb-8 leading-relaxed text-lg scroll-animate-fade scroll-stagger-6">
                        {industry.description}
                      </p>
                      
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4 scroll-animate-left scroll-stagger-7 text-zinc-50">Key Features:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {industry.features.map((feature, idx) => <div key={idx} className={`flex items-center space-x-3 scroll-animate-left scroll-stagger-${idx + 8}`}>
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>)}
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4 scroll-animate-right scroll-stagger-8 text-zinc-50 px-0">Applications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.applications.map((app, idx) => <Badge key={idx} variant="outline" className={`text-xs scroll-animate-zoom scroll-stagger-${idx + 9}`}>{app}</Badge>)}
                        </div>
                      </div>

                      <Button onClick={scrollToContact} size="lg" className="btn-primary group scroll-animate-bounce scroll-stagger-8 rounded-2xl text-zinc-950 bg-zinc-50">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                  <div className={`h-52 scroll-animate-zoom scroll-stagger-${index % 4 + 2} ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <img src={industry.image} alt={industry.title} className="rounded-2xl shadow-2xl w-full hover-lift transition-all duration-500" />
                  </div>
                </div>)}
            </div> */}

            <div className="space-y-20">
  {industries.map((industry, index) => (
    <div
      key={industry.id}
      className={`grid lg:grid-cols-2 gap-8 items-stretch ${
        index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
      }`}
    >
      {/* Text Card */}
      <Card className="bg-red-200 text-white rounded-2xl scroll-animate-zoom scroll-stagger-1 modern-card h-full">
        <CardContent className="p-0 bg-red-600 rounded-2xl px-4 py-5 h-full flex flex-col justify-between">
          {/* Header Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6 scroll-animate-left scroll-stagger-2">
              <div className="p-3 bg-primary/10 rounded-xl hover-scale">
                <industry.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary" className="scroll-animate-bounce scroll-stagger-3">
                  {industry.capacity}
                </Badge>
                <Badge variant="outline" className="scroll-animate-bounce scroll-stagger-4">
                  {industry.voltage}
                </Badge>
              </div>
            </div>

            <h3 className="text-3xl mb-6 scroll-animate-right scroll-stagger-5 font-bold text-zinc-50">
              {industry.title}
            </h3>

            <p className="text-muted-foreground mb-8 leading-relaxed text-lg scroll-animate-fade scroll-stagger-6">
              {industry.description}
            </p>

            {/* Key Features */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 scroll-animate-left scroll-stagger-7 text-zinc-50">
                Key Features:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {industry.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center space-x-3 scroll-animate-left scroll-stagger-${idx + 8}`}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 scroll-animate-right scroll-stagger-8 text-zinc-50">
                Applications:
              </h4>
              <div className="flex flex-wrap gap-2">
                {industry.applications.map((app, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className={`text-xs scroll-animate-zoom scroll-stagger-${idx + 9}`}
                  >
                    {app}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToContact}
            size="lg"
            className="btn-primary group scroll-animate-bounce scroll-stagger-8 rounded-2xl text-zinc-950 bg-zinc-50 mt-auto"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>

      {/* Image Section */}
      <div
        className={`rounded-2xl overflow-hidden max-h-[86vh] ${
          index % 2 === 1 ? 'lg:col-start-1' : ''
        }`}
      >
        <img
          src={industry.image}
          alt={industry.title}
          className="w-full h-full object-cover hover-lift transition-all duration-500"
        />
      </div>
    </div>
  ))}
</div>

          </div>
        </section>

        {/* Industry Impact Stats */}
        <section className="py-20 section-grey">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate-fade">
              <h2 className="text-4xl font-bold mb-6 text-red-600 md:text-5xl scroll-animate-left">
                Industry <span className="text-primary">Impact</span>
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-xl font-semibold scroll-animate-right scroll-stagger-2">
                Delivering measurable value across diverse industrial sectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => <Card key={index} className={`professional-card text-center group scroll-animate-bounce scroll-stagger-${index + 1} modern-card`}>
                  <CardContent className="p-8 rounded-2xl bg-red-600">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors hover-scale">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-3 hover:scale-110 transition-transform duration-300 scroll-animate-zoom scroll-stagger-2">{stat.value}</div>
                    <p className="text-white font-semibold scroll-animate-fade scroll-stagger-3">{stat.label}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-accent bg-red-600 py-0">
          <div className="container mx-auto text-center px-0 py-[50px] bg-red-600">
            <div className="scroll-animate-fade bg-red-600 rounded-2xl py-[30px]">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-50 scroll-animate-left">
                Partner with Industry Leaders
              </h2>
              <p className="text-muted-foreground text-white mb-12 max-w-3xl mx-auto leading-relaxed text-lg font-semibold scroll-animate-right scroll-stagger-2">
                Join hundreds of satisfied clients across diverse industries who trust our transformer 
                solutions for their critical power requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate-bounce scroll-stagger-3">
                <Button onClick={scrollToContact} size="lg" className="hover-lift font-semibold rounded-2xl text-black bg-white hover:bg-white hover:text-black">
                  Discuss Your Requirements
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button onClick={scrollToContact} variant="outline" size="lg" className="hover-lift rounded-2xl font-semibold text-zinc-950 bg-zinc-50 hover:bg-white hover:text-black">
                  Get Industry Quote
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="scroll-animate-fade">
        <Footer />
      </div>
    </div>;
};
export default Industries;