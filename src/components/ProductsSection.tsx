import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Shield,
  Factory,
  Settings,
  Gauge,
  Power,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
} from "lucide-react";
import { getImageLoadingProps } from "@/utils/imageOptimization";
import ProductNavigation from "@/components/ProductNavigation";
import { useNavigate, useLocation } from "react-router-dom";
import RenderDetailedProductCard from "./RenderDetailedProductCard";

const ProductsSection = () => {
  const [currentCategory, setCurrentCategory] = useState("all-products");
  const navigate = useNavigate();

  const loaction = useLocation();
  const productArray = [
    "Power-Transformers",
    "Solar-Inverter-Duty-Transformers",
    "Distribution-Transformers",
    "Dry-Type-Transformers",
    "Furnace-Transformers",
    "Auto-Transformers",
    "Isolation-Transformers",
    "Servo-Voltage-Stabilizers",
  ];

  useEffect(() => {
    const hash = location.hash.split("#")[1];
    const index = productArray.indexOf(hash);
    console.log(index);

    if (index !== -1) {
      const scrollToElement = () => {
        const element = document.getElementById(`product-${index}`);
        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 120; // 120px offset for header

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      };

      // Wait for DOM to render the element
      setTimeout(scrollToElement, 150); // 200ms delay works well for most setups
    }
  }, [productArray]);

  const transformers = [
    {
      name: "Power Transformers",
      capacity: "Up to 33 KVA",
      category: "Transformers",
      introduction:
        "Power transformers up to 33 KVA are engineered to step up or step down voltage levels efficiently across energy networks. These transformers are essential in ensuring reliable power transmission and distribution across large-scale utility and industrial environments.",
      features: [
        "Oil-cooled systems for efficient heat management",
        "Customizable voltage ratios to meet diverse operational needs",
        "High-efficiency design that minimizes energy losses",
        "Superior reliability with durable construction",
      ],
      advantages: [
        "Enhanced Energy Efficiency: Reduces operational losses for long-term cost savings",
        "Customizable: Tailored to specific voltage and capacity requirements",
        "Robust Performance: Suitable for continuous operation under varying load conditions",
      ],
      technicalUseCases: [
        "Ideal for high-load centers such as substations",
        "Manufacturing units and power distribution hubs",
        "Continuous operation under varying load conditions",
      ],
      applications:
        "Energy utilities, industrial applications, power distribution networks",
      image: "/lovable-uploads/019ba40d-ff7c-47df-95c4-6d8eab242ec0.png",
    },
    {
      name: "Distribution Transformers",
      capacity: "Various ratings",
      category: "Transformers",
      introduction:
        "Distribution transformers are compact, highly efficient units that deliver power from transmission systems to end users. They are designed to operate reliably in outdoor environments with minimal energy loss.",
      features: [
        "Compact design for space-constrained installations",
        "Minimal energy losses, ensuring high efficiency",
        "Weather-resistant housing for outdoor use",
        "Long service life with low maintenance requirements",
      ],
      advantages: [
        "Durable & Low Maintenance: Withstands harsh environments with minimal upkeep",
        "Energy Saving: Designed to minimize transmission losses",
        "Versatile Installations: Suitable for both ground-mounted and pole-mounted applications",
      ],
      technicalUseCases: [
        "Residential complexes and commercial facilities",
        "Utility distribution grids",
        "Ground-mounted and pole-mounted applications",
      ],
      applications:
        "Commercial power distribution, residential power distribution, utility networks",
      image: "/lovable-uploads/681b394a-91b6-4595-86ef-c9c0157b8646.png",
    },
    {
      name: "Dry Type Transformers",
      capacity: "IEC 726 compliant",
      category: "Transformers",
      introduction:
        "Dry Type Transformers offer a safe and eco-friendly alternative to oil-filled transformers. Built to IEC 726 standards, they are perfect for indoor and environmentally sensitive areas.",
      features: [
        "Class H/F insulation for high thermal endurance",
        "NOMEX paper construction ensuring flame resistance",
        "Weather-proof enclosures for reliable outdoor/indoor operation",
        "Integrated temperature indicators for safety monitoring",
      ],
      advantages: [
        "Fire-Safe Design: Eliminates oil-related fire risks",
        "Low Maintenance: No oil means less upkeep and lower operational costs",
        "Environmentally Safe: No risk of oil leakage or contamination",
      ],
      technicalUseCases: [
        "Hospitals and commercial buildings",
        "Multi-story complexes and confined industrial spaces",
        "Environmentally sensitive areas",
      ],
      applications:
        "Indoor operations, commercial buildings, industrial facilities",
      image: "/lovable-uploads/642bd8ac-3417-4f22-8c1a-540c299e6c9a.png",
    },
    {
      name: "Furnace Transformers",
      capacity: "High current rating",
      category: "Transformers",
      introduction:
        "Furnace transformers are specialized for supplying power to electric arc furnaces and induction heating systems. They are built to handle extreme electrical and mechanical stresses during furnace operations.",
      features: [
        "Oil-to-water heat exchangers for superior cooling",
        "High short-circuit capacity to withstand intensive furnace cycles",
        "Space-efficient design tailored for furnace installations",
        "Optimized for arc furnace performance",
      ],
      advantages: [
        "High Thermal Stability: Designed for the demanding thermal cycles of furnace operations",
        "Superior Cooling: Oil-to-water systems prevent overheating during heavy-duty processes",
        "Space Saving: Compact footprint for constrained industrial setups",
      ],
      technicalUseCases: [
        "Metallurgical industries and steel production",
        "Arc furnace plants and induction heating systems",
        "Extreme electrical and mechanical stress environments",
      ],
      applications:
        "Steel plants, arc furnace operations, metallurgical industries",
      image: "/lovable-uploads/e8118dde-1abc-438a-9783-5c5b0af06892.png",
    },
    {
      name: "Auto Transformers",
      capacity: "Oil & Air cooled",
      category: "Transformers",
      introduction:
        "Auto transformers offer efficient voltage adjustment solutions with a compact footprint. Suitable for both step-up and step-down applications, these transformers are used in industrial and power transmission systems.",
      features: [
        "Oil & air-cooled options for diverse applications",
        "Reduced core losses, enhancing operational efficiency",
        "Compact design with space-saving advantages",
        "Variable voltage support",
      ],
      advantages: [
        "Highly Efficient: Reduced material use translates to lower losses",
        "Cost-Effective: Lower weight and size compared to two-winding transformers",
        "Flexible Installation: Easy to integrate into existing power systems",
      ],
      technicalUseCases: [
        "Power grids and railway systems",
        "Large motor start-ups",
        "Industrial power transmission systems",
      ],
      applications:
        "Voltage adjustment applications, power transmission systems",
      image: "/lovable-uploads/4dae1f7d-60a6-4fd3-8b97-59c0c7deab6e.png",
    },
    {
      name: "Isolation Transformers",
      capacity: "Medical & Industrial grade",
      category: "Transformers",
      introduction:
        "Isolation transformers are critical in applications requiring complete electrical separation between input and output circuits. They are widely used to protect sensitive equipment from electrical noise and surges.",
      features: [
        "Ultra isolation design for total input-output separation",
        "Medical grade safety certifications",
        "High-reliability systems built for industrial and medical environments",
        "Input/Output isolation for equipment protection",
      ],
      advantages: [
        "Superior Equipment Protection: Shields sensitive devices from electrical faults",
        "Noise Suppression: Eliminates electrical noise and reduces harmonic distortion",
        "Enhanced Safety: Provides safe power for sensitive and life-supporting devices",
      ],
      technicalUseCases: [
        "Medical labs and hospitals",
        "Precision electronic manufacturing",
        "Industrial control panels",
      ],
      applications:
        "Medical equipment, sensitive electronics, industrial safety applications",
      image: "/lovable-uploads/3863e0bb-e3ce-46ed-afa3-036acf8c0d1b.png",
    },
  ];

  const stabilizers = [
    {
      name: "Servo Voltage Stabilizers",
      category: "Voltage Stabilizers",
      capacity: "Industrial grade",
      introduction:
        "Servo voltage stabilizers ensure consistent voltage supply to protect sensitive electrical equipment from fluctuations and overloads. Designed for industrial-grade performance, these stabilizers are essential in modern power management systems.",
      features: [
        "Automatic voltage correction for stable power output",
        "Overload protection mechanisms",
        "High-performance operation even under fluctuating power conditions",
        "Built-in equipment protection for connected machinery",
      ],
      advantages: [
        "Prevents Equipment Damage: Stabilizes voltage, reducing wear and extending equipment life",
        "Industrial Grade: Handles high-capacity loads with precision",
        "Energy Efficient: Minimizes power wastage due to voltage instability",
      ],
      technicalUseCases: [
        "Manufacturing plants and hospitals",
        "Research labs and locations with frequent power fluctuations",
        "High-capacity industrial loads",
      ],
      applications:
        "Sensitive equipment, industrial machinery, medical equipment",
      image: "/lovable-uploads/76c11973-37ee-49e5-95c2-1ed47ef98932.png",
    },
  ];

  const scrollToContact = () => {
    navigate("/contact");
  };

  const renderDetailedProductCard = (product: unknown, index: number) => (
    <div
      key={index}
      id={`product-${index}`}
      className="scroll-animate-zoom scroll-stagger-1 professional-card p-6 lg:p-8 rounded-3xl bg-white shadow-sm"
    >
      {/* Product Header */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">
        <div className="scroll-animate-left scroll-stagger-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-red-600">
              {product.name}
            </h3>
            <Badge
              variant="secondary"
              className="bg-red-100 text-red-600 font-medium w-fit"
            >
              {product.capacity}
            </Badge>
          </div>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            {product.introduction}
          </p>
        </div>
        <div className="scroll-animate-right scroll-stagger-3 flex justify-center lg:justify-end">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 w-full max-w-xs">
            <img
              src={product.image}
              alt={product.name}
              className="w-48 h-48 p-3 object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Product Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        {/* Key Features */}
        <div className="scroll-animate-bounce scroll-stagger-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Settings className="h-5 w-5 text-red-600" />
            </div>
            <h4 className="text-lg font-semibold text-red-600">Key Features</h4>
          </div>
          <ul className="space-y-3">
            {product.features.map((feature: string, idx: number) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Advantages */}
        <div className="scroll-animate-bounce scroll-stagger-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Star className="h-5 w-5 text-red-600" />
            </div>
            <h4 className="text-lg font-semibold text-red-600">Advantages</h4>
          </div>
          <ul className="space-y-3">
            {product.advantages.map((advantage: string, idx: number) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <Shield className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{advantage}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Use Cases */}
        <div className="scroll-animate-bounce scroll-stagger-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Factory className="h-5 w-5 text-red-600" />
            </div>
            <h4 className="text-lg font-semibold text-red-600">
              Technical Use Cases
            </h4>
          </div>
          <ul className="space-y-3">
            {product.technicalUseCases?.map((useCase: string, idx: number) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <Gauge className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{useCase}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Applications */}
        <div className="scroll-animate-bounce scroll-stagger-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Zap className="h-5 w-5 text-red-600" />
            </div>
            <h4 className="text-lg font-semibold text-red-600">Applications</h4>
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed">
            {product.applications}
          </div>
        </div>
      </div>
    </div>
  );

  const getFilteredProducts = () => {
    switch (currentCategory) {
      case "transformers":
        return transformers;
      case "stabilizers":
        return stabilizers;
      default:
        return [...transformers, ...stabilizers];
    }
  };

  return (
    <section id="products" className="w-full py-8 md:py-12 professional-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Detailed Products Display */}
        <div className="space-y-16">
          <RenderDetailedProductCard />
        </div>

        {/* Call to Action */}
        {/* <div className="text-center scroll-animate-bounce scroll-stagger-2">
          <Card className="professional-card text-black bg-gray-100 border-gray-300">
            <CardContent className="p-10">
              <h3 className="text-3xl text-black font-bold mb-6 scroll-animate-left">
                Need a Custom Solution?
              </h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto scroll-animate-right scroll-stagger-2">
                Our expert engineering team can design and manufacture custom transformers 
                tailored to your specific industrial requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate-bounce scroll-stagger-1">
                <Button 
                  onClick={scrollToContact} 
                  size="lg" 
                  className="bg-gray-100 text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold group rounded-2xl"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={scrollToContact} 
                  className="border-white bg-gray-100 text-red-600 hover:bg-gray-100 hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-2xl"
                >
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default ProductsSection;
