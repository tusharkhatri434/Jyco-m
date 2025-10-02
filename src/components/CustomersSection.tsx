import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Train, Factory, Zap, Shield, Users, Phone, Award } from 'lucide-react';
const CustomersSection = () => {
  const majorClients = [{
    name: "Vodafone India",
    sector: "Telecommunications",
    projects: "Power infrastructure for telecom towers and data centers",
    icon: Phone,
    logo: "Telecom Giant"
  }, {
    name: "Airtel",
    sector: "Telecommunications",
    projects: "Distribution transformers for network infrastructure",
    icon: Phone,
    logo: "Leading Telecom"
  }, {
    name: "Indian Railways",
    sector: "Transportation",
    projects: "Railway electrification and station power systems",
    icon: Train,
    logo: "National Railways"
  }, {
    name: "Power Corporation Limited",
    sector: "Utilities",
    projects: "Grid transformers and distribution equipment",
    icon: Zap,
    logo: "Power Utility"
  }];
  const esteemedClients = [{
    name: "Jaipur Vidyut Vitran Nigam Ltd.",
    location: "Jaipur",
    description: "A major power distribution company serving the city of Jaipur and surrounding areas with reliable electricity solutions.",
    sector: "Power Distribution"
  }, {
    name: "Ajmer Vidyut Vitran Nigam Ltd.",
    location: "Ajmer",
    description: "Ensuring efficient power distribution across Ajmer and nearby districts with a focus on customer satisfaction.",
    sector: "Power Distribution"
  }, {
    name: "Jharkhand State Electricity Board",
    location: "Ranchi",
    description: "A key player in electricity distribution and management in Jharkhand, powering millions of homes and industries.",
    sector: "Power Distribution"
  }, {
    name: "Mahanadi Coal Fields",
    location: "India",
    description: "One of the largest coal-producing companies in India, vital for the nation's energy needs.",
    sector: "Energy"
  }, {
    name: "Dakshinanchal Vidyut Vitran Nigam Ltd.",
    location: "Agra",
    description: "Serving the Agra region with seamless power distribution and committed customer services.",
    sector: "Power Distribution"
  }, {
    name: "Chhattisgarh State Electricity Board",
    location: "Raipur",
    description: "Delivering reliable and efficient electricity across Chhattisgarh, empowering growth and development.",
    sector: "Power Distribution"
  }, {
    name: "UP Awas evam Vikas Parishad",
    location: "Lucknow",
    description: "A leading housing and development authority contributing to urban planning and residential infrastructure in UP.",
    sector: "Urban Development"
  }, {
    name: "Meerut Development Authority",
    location: "Meerut",
    description: "Spearheading urban development and infrastructure projects across Meerut city.",
    sector: "Urban Development"
  }, {
    name: "Mathura Development Authority",
    location: "Mathura",
    description: "Driving city development and infrastructural excellence in the historical city of Mathura.",
    sector: "Urban Development"
  }, {
    name: "Agra Development Authority",
    location: "Agra",
    description: "Managing urban growth and executing modern infrastructure projects in Agra.",
    sector: "Urban Development"
  }, {
    name: "Ghaziabad Development Authority",
    location: "Ghaziabad",
    description: "A key urban planner and infrastructure developer for Ghaziabad city.",
    sector: "Urban Development"
  }, {
    name: "BSNL",
    location: "India",
    description: "India's leading telecom service provider offering nationwide connectivity and communication solutions.",
    sector: "Telecommunications"
  }, {
    name: "Paschimanchal Vidyut Vitran Nigam Ltd.",
    location: "Western UP",
    description: "Delivering consistent electricity distribution across Western Uttar Pradesh regions.",
    sector: "Power Distribution"
  }, {
    name: "Dakshinanchal Vidyut Vitran Nigam Ltd. (DVVNL)",
    location: "Southern UP",
    description: "Efficiently managing power supply and distribution in Southern UP regions.",
    sector: "Power Distribution"
  }, {
    name: "Madhyanchal Vidyut Vitran Nigam",
    location: "Central UP",
    description: "Power distribution company ensuring reliable electricity to Central Uttar Pradesh.",
    sector: "Power Distribution"
  }, {
    name: "Tata Projects",
    location: "India",
    description: "One of India's top infrastructure and construction companies with a strong legacy of excellence.",
    sector: "Infrastructure"
  }, {
    name: "Airtel",
    location: "India",
    description: "India's largest telecom network providing superior data and voice connectivity across the country.",
    sector: "Telecommunications"
  }, {
    name: "Vodafone",
    location: "Global",
    description: "A global telecom leader offering innovative communication services and seamless connectivity.",
    sector: "Telecommunications"
  }];
  const industries = [{
    name: "Power Distribution",
    description: "Transformers for electrical utilities, grid substations, and power transmission networks",
    icon: Zap,
    applications: ["Grid substations", "Power transmission", "Distribution networks", "Utility infrastructure"],
    stats: "500+ Projects"
  }, {
    name: "Railways",
    description: "Specialized transformers for railway electrification, stations, and traction systems",
    icon: Train,
    applications: ["Railway electrification", "Station power systems", "Traction substations", "Signal systems"],
    stats: "200+ Installations"
  }, {
    name: "Steel & Furnace Plants",
    description: "Heavy-duty furnace transformers for metallurgical and steel manufacturing industries",
    icon: Factory,
    applications: ["Arc furnaces", "Steel plants", "Metallurgical operations", "Industrial heating"],
    stats: "150+ Units"
  }, {
    name: "Real Estate & Infrastructure",
    description: "Distribution transformers for residential complexes, commercial buildings, and infrastructure projects",
    icon: Building2,
    applications: ["Residential complexes", "Commercial buildings", "Shopping malls", "Office towers"],
    stats: "300+ Buildings"
  }, {
    name: "Renewable Energy",
    description: "Transformers for solar parks, wind farms, and renewable energy integration projects",
    icon: Zap,
    applications: ["Solar power plants", "Wind farms", "Grid integration", "Energy storage"],
    stats: "100+ MW Capacity"
  }, {
    name: "Government & Defense",
    description: "Specialized transformers for government facilities, defense establishments, and public sector projects",
    icon: Shield,
    applications: ["Government buildings", "Defense facilities", "Public sector", "Critical infrastructure"],
    stats: "Government Approved"
  }];
  const governmentApprovals = [{
    title: "Central Government Approved",
    description: "Approved vendor for Central Government departments and PSUs",
    icon: Award
  }, {
    title: "State Government Approved",
    description: "Approved vendor for various State Government projects",
    icon: Award
  }, {
    title: "Railway Approved",
    description: "Approved vendor for Indian Railways projects",
    icon: Train
  }, {
    title: "Defense Approved",
    description: "Approved for defense and security installations",
    icon: Shield
  }];
  const testimonials = [{
    company: "State Electricity Board",
    feedback: "Jayco Electricals has consistently delivered high-quality transformers that meet our stringent requirements. Their products have shown excellent performance in our distribution network.",
    designation: "Chief Engineer",
    sector: "Power Utility"
  }, {
    company: "Steel Manufacturing Unit",
    feedback: "The furnace transformers supplied by Jayco have exceeded our expectations in terms of reliability and efficiency. Their technical support is outstanding.",
    designation: "Plant Manager",
    sector: "Steel Industry"
  }, {
    company: "Telecom Infrastructure Provider",
    feedback: "We have been using Jayco's transformers for our telecom tower installations across multiple states. The quality and after-sales service are commendable.",
    designation: "Technical Director",
    sector: "Telecommunications"
  }];
  return <section id="customers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate-fade">
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-semibold scroll-animate-right scroll-stagger-2">
            Trusted by leading organizations across India - from government institutions 
            to private sector giants, powering progress since 1989.
          </p>
        </div>

        {/* Esteemed Clients Section */}
        <div className="mb-20 scroll-animate-slide-up" style={{
        backgroundColor: '#FFFFFF',
        padding: '60px 0',
        borderRadius: '20px'
      }}>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 scroll-animate-bounce">
            Our Esteemed Clients
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {esteemedClients.map((client, index) => <div key={index} style={{
            borderRadius: '20px',
            padding: '32px 24px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.4s ease',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            cursor: 'pointer'
          }} className="rounded-2xl bg-red-600 py-[20px] px-[20px]">
                {/* Logo Placeholder */}
                <div className="scroll-animate-bounce scroll-stagger-1" style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#f8f9fa',
              borderRadius: '50%',
              margin: '0 auto 20px auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #e9ecef'
            }}>
                  <Building2 size={36} style={{
                color: '#6c757d'
              }} />
                </div>
                
                {/* Client Name */}
                <h4 className="text-center font-extrabold text-lg text-zinc-50 scroll-animate-left scroll-stagger-2">
                  {client.name}
                </h4>
                
                {/* Location */}
                <p className="text-center font-bold text-zinc-50 scroll-animate-right scroll-stagger-3">
                  {client.location}
                </p>
                
                {/* Sector Badge */}
                <div className="text-center mb-4 scroll-animate-fade scroll-stagger-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-600 hover:bg-blue-100/80">
                    {client.sector}
                  </Badge>
                </div>
                
                {/* Description */}
                <p className="text-center text-sm font-semibold text-zinc-50 scroll-animate-slide-up scroll-stagger-5">
                  {client.description}
                </p>
              </div>)}
          </div>
        </div>

        {/* Major Clients */}
        

        {/* Industries We Serve */}
        <div className="mb-20 scroll-animate-fade">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 scroll-animate-bounce">
            Industries We Serve
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader className="rounded-2xl bg-red-600">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <industry.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">{industry.name}</CardTitle>
                      <Badge variant="outline" className='text-white'>{industry.stats}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed py-[10px]">{industry.description}</p>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Key Applications:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.applications.map((app, idx) => <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                          {app}
                        </div>)}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Government Approvals */}
        <div className="mb-20 scroll-animate-slide-up">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 scroll-animate-left">
            Government Approvals & Recognition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governmentApprovals.map((approval, index) => <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardHeader className="rounded-2xl bg-red-600 py-[10px]">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <approval.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-base">{approval.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-semibold py-[20px] text-center">{approval.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="scroll-animate-fade">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 scroll-animate-right">
            What Our Customers Say
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="rounded-3xl bg-red-600">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-white">{testimonial.company}</CardTitle>
                      <Badge variant="secondary" className='text-white'>{testimonial.sector}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic leading-relaxed text-base px-0 py-[10px]">
                    "{testimonial.feedback}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-red-500">{testimonial.designation}</p>
                    <p className="text-sm text-muted-foreground font-semibold">{testimonial.sector}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Stats Section */}
        <Card className="bg-gradient-to-br from-primary/5 to-electric-blue/5 border-primary/20 mt-16 scroll-animate-zoom">
          <CardContent className="p-8 rounded-2xl bg-red-600 text-white">
            <h3 className="text-3xl font-bold text-center text-foreground mb-8 scroll-animate-bounce">Our Impact</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="scroll-animate-scale scroll-stagger-1">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div className="scroll-animate-scale scroll-stagger-2">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Industries Served</p>
              </div>
              <div className="scroll-animate-scale scroll-stagger-3">
                <div className="text-4xl font-bold text-primary mb-2">35+</div>
                <p className="text-muted-foreground">Years of Trust</p>
              </div>
              <div className="scroll-animate-scale scroll-stagger-4">
                <div className="text-4xl font-bold text-primary mb-2">24000+</div>
                <p className="text-muted-foreground">Products Delivered</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>;
};
export default CustomersSection;