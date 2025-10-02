import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote, Building, Factory, Zap, Users } from 'lucide-react';
const TestimonialsSection = () => {
  const testimonials = [{
    id: 1,
    name: "Rajesh Kumar",
    position: "Chief Electrical Engineer",
    company: "Steel Authority of India Ltd (SAIL)",
    rating: 5,
    quote: "Jayco's power transformers have been powering our steel manufacturing units for over 8 years without a single failure. Their 5 MVA transformers handle our heavy industrial loads with exceptional efficiency and reliability.",
    project: "10 MVA Power Transformer Installation",
    location: "Bokaro, Jharkhand",
    avatar: "R",
    companyType: "Steel Manufacturing",
    icon: Factory
  }, {
    id: 2,
    name: "Dr. Anita Sharma",
    position: "Project Director",
    company: "Uttar Pradesh Power Corporation Ltd",
    rating: 5,
    quote: "We've installed over 200 distribution transformers from Jayco across rural UP. Their star-rated transformers have significantly improved our distribution efficiency and reduced transmission losses by 15%.",
    project: "Rural Electrification Project",
    location: "Multiple Districts, UP",
    avatar: "A",
    companyType: "Power Utility",
    icon: Zap
  }, {
    id: 3,
    name: "Vikram Singh",
    position: "Plant Manager",
    company: "Hindalco Industries Ltd",
    rating: 5,
    quote: "Jayco's custom rectifier transformers for our aluminum smelting operations have exceeded expectations. The precision engineering and robust design ensure consistent performance even in harsh industrial environments.",
    project: "Custom Rectifier Transformers",
    location: "Renukoot, UP",
    avatar: "V",
    companyType: "Aluminum Production",
    icon: Building
  }, {
    id: 4,
    name: "Meera Patel",
    position: "Senior Electrical Manager",
    company: "Larsen & Toubro Construction",
    rating: 5,
    quote: "For our metro rail project, Jayco delivered specialized transformers meeting stringent specifications. Their technical support team worked closely with us to ensure seamless integration and commissioning.",
    project: "Metro Rail Infrastructure",
    location: "Delhi NCR",
    avatar: "M",
    companyType: "Infrastructure",
    icon: Users
  }, {
    id: 5,
    name: "Suresh Reddy",
    position: "Technical Head",
    company: "Indian Oil Corporation Ltd",
    rating: 5,
    quote: "Jayco's flame-proof transformers in our refinery have been operating flawlessly for 6 years. Their understanding of hazardous area requirements and safety standards is commendable.",
    project: "Refinery Electrical Systems",
    location: "Mathura, UP",
    avatar: "S",
    companyType: "Oil & Gas",
    icon: Factory
  }, {
    id: 6,
    name: "Priya Gupta",
    position: "Electrical Consultant",
    company: "DLF Limited",
    rating: 5,
    quote: "For our high-rise residential complexes, Jayco's compact distribution transformers provide reliable power supply. Their after-sales service and maintenance support is exceptional.",
    project: "Residential Complex Electrification",
    location: "Gurgaon, Haryana",
    avatar: "P",
    companyType: "Real Estate",
    icon: Building
  }];
  const stats = [{
    number: "500+",
    label: "Satisfied Clients",
    icon: Users
  }, {
    number: "10,000+",
    label: "Transformers Installed",
    icon: Zap
  }, {
    number: "25+",
    label: "States Covered",
    icon: Building
  }, {
    number: "99.8%",
    label: "Customer Satisfaction",
    icon: Star
  }];
  const industries = ["Steel & Metal", "Power Utilities", "Oil & Gas", "Infrastructure", "Manufacturing", "Real Estate", "Mining", "Railways"];
  return <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Customer <span className="text-primary text-5xl">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted by leading organizations across India for reliable transformer solutions 
            and exceptional service quality.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Carousel opts={{
          align: "start",
          loop: true
        }} className="w-full">
            <CarouselContent>
              {testimonials.map(testimonial => <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                    <CardContent className="p-6 h-full flex flex-col">
                      {/* Quote Icon */}
                      <div className="flex items-start justify-between mb-4">
                        <Quote className="h-8 w-8 text-primary/30" />
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                        </div>
                      </div>

                      {/* Quote */}
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow italic">
                        "{testimonial.quote}"
                      </p>

                      {/* Project Details */}
                      <div className="mb-4">
                        <Badge variant="secondary" className="mb-2">
                          {testimonial.project}
                        </Badge>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center space-x-3 mt-auto">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-semibold">{testimonial.avatar}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                          <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                        </div>
                        <testimonial.icon className="h-6 w-6 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Industries Served */}
        

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-br from-primary/5 to-electric-blue/5 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Join Our Success Stories
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the reliability and quality that has made us the preferred 
            choice for leading organizations across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="p-6 bg-white shadow-lg max-w-md mx-auto">
              <h4 className="font-semibold text-foreground mb-2">Ready to Get Started?</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Contact our technical team for a customized transformer solution.
              </p>
              <div className="flex items-center space-x-2 text-primary">
                <Zap className="h-4 w-4" />
                <span className="text-sm font-medium">Free Technical Consultation</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;