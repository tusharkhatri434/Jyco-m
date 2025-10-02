import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Factory, CheckCircle, Settings, Users } from 'lucide-react';
const WhyChooseUsSection = () => {
  const features = [{
    icon: Award,
    title: "35+ Years of Experience",
    description: "Trusted expertise since 1989 in transformer manufacturing and electrical solutions"
  }, {
    icon: Shield,
    title: "ISO 9001:2015 Certified",
    description: "Quality management systems ensuring consistent excellence in every product"
  }, {
    icon: Factory,
    title: "Advanced Manufacturing Facility",
    description: "State-of-the-art equipment and precision engineering capabilities"
  }, {
    icon: CheckCircle,
    title: "Government Approved",
    description: "Central & State Government approved for public sector projects"
  }, {
    icon: Settings,
    title: "Customization Available",
    description: "Tailored solutions to meet specific customer requirements and applications"
  }, {
    icon: Users,
    title: "Pan-India Clientele",
    description: "Serving Vodafone, Airtel, Indian Railways, and government sectors"
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">
            Why Choose <span className="text-primary text-5xl font-semibold">Jayco Electricals?</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg font-semibold">
            Discover what makes us the preferred choice for transformer solutions across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default WhyChooseUsSection;