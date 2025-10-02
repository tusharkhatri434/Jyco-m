
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, Settings, Factory, CircuitBoard, Shield, Gauge, ArrowRight, Power } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductGallerySection = () => {
  const navigate = useNavigate();

  const products = [{
    name: "Power Transformers",
    icon: Zap,
    category: "Power"
  }, {
    name: "Distribution Transformers",
    icon: Settings,
    category: "Distribution"
  }, {
    name: "Dry Type Transformers",
    icon: Shield,
    category: "Special"
  }, {
    name: "Furnace Transformers",
    icon: Factory,
    category: "Industrial"
  }, {
    name: "Auxiliary Transformers",
    icon: CircuitBoard,
    category: "Special"
  }, {
    name: "Combined CT-PT Units",
    icon: Gauge,
    category: "Measurement"
  }, {
    name: "Current Transformers",
    icon: CircuitBoard,
    category: "Measurement"
  }, {
    name: "Potential Transformers",
    icon: Gauge,
    category: "Measurement"
  }, {
    name: "Metering Cubicles",
    icon: Gauge,
    category: "Metering"
  }, {
    name: "Control Panels",
    icon: Settings,
    category: "Control"
  }, {
    name: "Servo Voltage Stabilizers",
    icon: Shield,
    category: "Protection"
  }, {
    name: "Earthing Transformers",
    icon: Zap,
    category: "Grounding"
  }, {
    name: "Converter Transformers",
    icon: Power,
    category: "Conversion"
  }, {
    name: "Auto Transformers",
    icon: Zap,
    category: "Auto"
  }, {
    name: "Dual Ratio Transformers",
    icon: Settings,
    category: "Flexible"
  }, {
    name: "Automatic Power Factor Controllers",
    icon: Gauge,
    category: "Control"
  }, {
    name: "Ultra Isolation Transformers",
    icon: Shield,
    category: "Isolation"
  }, {
    name: "Automatic Power Booster Units",
    icon: Power,
    category: "Boosting"
  }, {
    name: "Isolation Transformers",
    icon: Shield,
    category: "Isolation"
  }];

  const categories = [{
    name: "Power",
    color: "bg-red-100 text-red-800"
  }, {
    name: "Distribution",
    color: "bg-blue-100 text-blue-800"
  }, {
    name: "Special",
    color: "bg-green-100 text-green-800"
  }, {
    name: "Industrial",
    color: "bg-orange-100 text-orange-800"
  }, {
    name: "Measurement",
    color: "bg-purple-100 text-purple-800"
  }, {
    name: "Metering",
    color: "bg-indigo-100 text-indigo-800"
  }, {
    name: "Control",
    color: "bg-yellow-100 text-yellow-800"
  }, {
    name: "Protection",
    color: "bg-pink-100 text-pink-800"
  }, {
    name: "Grounding",
    color: "bg-teal-100 text-teal-800"
  }, {
    name: "Conversion",
    color: "bg-cyan-100 text-cyan-800"
  }, {
    name: "Auto",
    color: "bg-lime-100 text-lime-800"
  }, {
    name: "Flexible",
    color: "bg-amber-100 text-amber-800"
  }, {
    name: "Isolation",
    color: "bg-emerald-100 text-emerald-800"
  }, {
    name: "Boosting",
    color: "bg-violet-100 text-violet-800"
  }];

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.name === category);
    return categoryData ? categoryData.color : "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6">
            Our Product <span className="text-professional-red">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of electrical transformers and equipment engineered for excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card 
                key={index} 
                className="professional-card hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-professional-red/10 rounded-lg hover:bg-professional-red/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-professional-red" />
                    </div>
                    <Badge className={getCategoryColor(product.category)}>
                      {product.category}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-grey mb-3">{product.name}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => navigate('/products')} 
            size="lg" 
            className="btn-professional group"
          >
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGallerySection;
