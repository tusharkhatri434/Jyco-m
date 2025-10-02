import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import CardSection from "@/components/CardSection";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Shield, Award, Users, Factory, CheckCircle, Star } from "lucide-react";

const InfraAndQuality = () => {
  const statsData = [
    {
      icon: <Factory className="w-8 h-8 text-blue-600" />,
      number: "2",
      label: "Manufacturing Units",
      description: "State-of-the-art facilities",
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      number: "25+",
      label: "Years Experience",
      description: "Industry expertise",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      number: "100%",
      label: "Quality Assurance",
      description: "Rigorous testing protocols",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      number: "500+",
      label: "Expert Team",
      description: "Skilled professionals",
    },
  ];

  const certificationData = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System",
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
    },
    {
      title: "ISO 14001:2015",
      description: "Environmental Management",
      icon: <Shield className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "OHSAS 18001",
      description: "Occupational Health & Safety",
      icon: <Award className="w-6 h-6 text-purple-500" />,
    },
    {
      title: "BIS Certification",
      description: "Bureau of Indian Standards",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
    },
  ];

  const aboutData = {
    title:
      "Jayco Electricals proudly operates two state-of-the-art manufacturing units dedicated to producing a complete range of oil-cooled and air-cooled transformers and stabilizers.",
    subtitle:
      "Our facilities are equipped to meet both high-volume production and specialized, customized orders",
    highlights: [
      "State-of-the-Art Facilities",
      "Expert Engineering Team",
      "R&D Excellence",
      "Customized Solutions",
    ],
  };

  const TransformerFeatures = [
    {
      img: "sclt.png",
      name: "Special Core Lifting Table",
      description:
        "Ensures strong mechanical integrity and enhances durability of the transformer. Perfect for reliable and noise-free performance.",
      feature:
        "Prevents loose contacts at joints, reducing magnetostriction forces.",
      benefit: "Long life & less noise.",
    },
    {
      img: "Yc.png",
      name: "Non Use of Yoke Studs",
      description:
        "Eliminates common failure points in conventional transformers. Ensures smoother and quieter functioning.",
      feature:
        "Enables silent operation by lowering humming noise and avoiding insulation failure.",
      benefit: "Long life & less noise.",
    },
    {
      img: "CF.png",
      name: "Collapsible Former",
      description:
        "Optimizes transformer efficiency while improving cooling. Enhances energy savings over time.",
      feature:
        "Ensures accurate coil clearance, reducing losses and improving oil flow.",
      benefit: "Low maintenance cost & long life.",
    },
    {
      img: "hsbt.png",
      name: "Hydraulic S-Bend Tool",
      description:
        "Maintains conductor strength and insulation safety. Minimizes chances of internal faults.",
      feature:
        "Allows soft bending without conductor or insulation damage, preventing discharge.",
      benefit: "Long life.",
    },
    {
      img: "hlbt.png",
      name: "Hydraulic L-Bend Tool",
      description:
        "Designed for precise shaping without micro-cracks. Increases transformer reliability under load.",
      feature:
        "Provides smooth bending, protecting conductor and insulation from stress.",
      benefit: "Long life.",
    },
    {
      img: "gbm.png",
      name: "German Brazing Machine",
      description:
        "Guarantees robust joints with minimal thermal stress. Reduces maintenance and improves efficiency.",
      feature:
        "Creates neat joints without overheating, ensuring strong and precise brazing.",
      benefit: "Long life & low running cost.",
    },
    {
      img: "mib.png",
      name: "Machined Insulation Blocks",
      description:
        "Improves cooling system effectiveness. Enhances insulation life and overall stability.",
      feature:
        "Allows smooth oil passage and accurate coil tightening for better stability.",
      benefit: "Long life & trouble-free.",
    },
    {
      img: "hcc.png",
      name: "Hydraulic Coil Compressor",
      description:
        "Ensures structural rigidity of windings. Provides safety and consistency during operations.",
      feature:
        "Tightens coils evenly to withstand short circuit forces and balance impedance.",
      benefit: "No circulating current through neutral.",
    },
    {
      img: "it.png",
      name: "Interleaved Tapings",
      description:
        "Protects winding structure during fault conditions. Enhances fault tolerance and reliability.",
      feature:
        "Reduces short circuit forces during faults for enhanced safety.",
      benefit: "Trouble-free operation.",
    },
    {
      img: "TESTLABPHOTO.jpg",
      name: "Automated Test Lab",
      description:
        "Ensures high precision in quality checks. Speeds up testing while maintaining accuracy.",
      feature: "Provides accurate results quickly without manual interference.",
      benefit: "Reliable performance.",
    },
  ];

  return (
    <div className="min-h-screen luxury-bg">
      <Header />

      <main>
        <HeroSection
          title="Our Manufacturing Process"
          subtitle="Delivering Trust Through Global Standards"
          description="Where advanced engineering meets precision craftsmanship to create transformers that deliver unmatched performance, durability and reliability"
          showCTA={false}
          backgroundImage="/lovable-uploads/infra/ManufacturingProcesses.png"
        />

        {/* Content Section */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto py-8 md:py-12">
            {/* Intro Section */}
            <div className="text-center space-y-6 mb-16">
              <div className="max-w-4xl mx-auto">
                <h1 className="mb-6 text-md md:text-xl font-bold text-gray-900">
                  Quality | Innovation | Reliability
                </h1>
                <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                  {aboutData.title}
                </p>
                <p className="text-lg md:text-xl text-gray-700 mt-6 leading-relaxed">
                  {aboutData.subtitle}
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
                {aboutData.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-2xl px-4 py-3 bg-gray-50 font-semibold text-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <br />
            </div>

            {/* Transformer Features Section */}
            <div className="space-y-8">
              {TransformerFeatures.map((item, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-4 lg:gap-6 items-center rounded-xl p-4 lg:p-6 max-w-5xl mx-auto ${
                    index % 2 === 1 ? "bg-gray-50" : "bg-white"
                  } shadow-sm`}
                >
                  {/* Image (alternate position) */}
                  <div
                    className={`flex justify-center items-center ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="w-full max-w-xs">
                      <img
                        src={`/lovable-uploads/ourService/${item.img}`}
                        alt={item.name}
                        className="w-full h-48 lg:h-52 object-contain border border-gray-200 rounded-lg p-3 bg-white"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-center space-y-3">
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-900">
                      {item.name}
                    </h2>
                    <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-3 pt-3">
                      <div>
                        <p className="font-semibold text-gray-900 mb-1 text-sm">
                          Feature
                        </p>
                        <p className="text-gray-800 text-xs lg:text-sm">
                          {item.feature}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1 text-sm">
                          Benefit
                        </p>
                        <p className="text-gray-800 text-xs lg:text-sm">
                          {item.benefit}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="scroll-animate-fade">
        <Footer />
      </div>
    </div>
  );
};

export default InfraAndQuality;
