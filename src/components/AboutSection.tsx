import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Award,
  Users,
  Factory,
  Zap,
  Target,
  CheckCircle,
  Calendar,
  Building2,
  TrendingUp,
  Cog,
  Settings,
  Wrench,
} from "lucide-react";
import MissionVisionValues from "./MissionVisionValues";
import Certifications from "./Certifications";
import QualityPolicy from "./QualityPolicy";
const AboutSection = () => {
  const milestones = [
    {
      year: "1989",
      title: "Company Founded",
      description:
        "Established as SSI unit in Meerut under guidance of Mr. Sukmal Jain & Mr. Navin Jain",
    },
    {
      year: "1995",
      title: "Government Recognition",
      description:
        "Earned reputation among Central & State government departments",
    },
    {
      year: "2000",
      title: "ISO 9001 Certified",
      description:
        "Achieved quality certification strengthening market position",
    },
    {
      year: "2010",
      title: "Technology Advancement",
      description:
        "Consistent advancement in technology and production processes",
    },
    {
      year: "2015",
      title: "Cost Optimization",
      description:
        "Successfully reduced transformer costs benefiting customers",
    },
    {
      year: "2024",
      title: "35+ Years Strong",
      description: "Celebrating over 3 decades of manufacturing excellence",
    },
  ];
  const founders = [
    {
      name: "Mr. Sukmal Jain",
      role: "Founding Partner",
      description:
        "Visionary leader who established the foundation of quality and excellence",
    },
    {
      name: "Mr. Navin Jain",
      role: "Founding Partner",
      description:
        "Strategic partner focusing on innovation and customer satisfaction",
    },
  ];
  const achievements = [
    {
      icon: Building2,
      title: "Single Point SSI Unit",
      description:
        "Strategically established manufacturing unit in Meerut with focused production capabilities.",
    },
    {
      icon: Users,
      title: "Qualified Professionals",
      description:
        "Team of highly qualified, experienced professionals and well-skilled personnel.",
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description:
        "Successfully reduced total transformer costs through technology and process innovations.",
    },
    {
      icon: Target,
      title: "Customer Satisfaction",
      description:
        "Achieved the benchmark of elusive customer satisfaction across diverse industries.",
    },
  ];
  const certifications = [
    {
      name: "MSME",
      type: "Quality Management",
      year: "Current",
    },
    {
      name: "Make in India",
      type: "Government Recognition",
      year: "1995",
    },
    {
      name: "GEM",
      type: "Government Recognition",
      year: "1995",
    },
    {
      name: "ISO 9001:2015",
      type: "Manufacturing License",
      year: "1989",
    },
    {
      name: "ISO 14001:2015",
      type: "Manufacturing License",
      year: "1989",
    },
    {
      name: "BIS",
      type: "Manufacturing License",
      year: "1989",
    },
  ];
  const manufacturingFeatures = [
    {
      icon: Factory,
      title: "State-of-the-Art Manufacturing Units",
      description:
        "Two dedicated manufacturing facilities equipped for high-volume production and specialized custom orders.",
    },
    {
      icon: Users,
      title: "Expert Engineering Team",
      description:
        "Highly skilled design engineers, production engineers, and CAD-trained draftsmen delivering precision-engineered products.",
    },
    {
      icon: Cog,
      title: "R&D Excellence",
      description:
        "Fully integrated Research & Development department with cutting-edge design and engineering technologies.",
    },
    {
      icon: Settings,
      title: "Customized Solutions",
      description:
        "Specialized capability to design, manufacture, and supply tailor-made instrument transformers for various applications.",
    },
  ];
  const qualityFeatures = [
    {
      icon: Award,
      title: "ISO 9001 Certified",
      description:
        "Manufacturing facilities follow stringent quality management systems.",
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Testing",
      description:
        "Rigorous quality checks at every production stage for all materials and processes.",
    },
    {
      icon: Shield,
      title: "Specialized Testing",
      description:
        "Short-circuit tests conducted at nationally accredited laboratories for maximum safety.",
    },
    {
      icon: Wrench,
      title: "In-House Testing",
      description:
        "Most testing performed in-house with advanced equipment and procedures.",
    },
  ];
  return (
    <section id="about" className=" bg-background">
      <div className="container mx-auto ">
        {/* Our Story Section */}
        <div className="mb-24 animate-fade-in">
          {/* Company Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="py-5 text-xl">Company Profile : </h1>
              <p className="text-muted-foreground mb-6 leading-relaxed sm:text-justify sm:text-sm">
                Jayco Electricals, widely popular as the brand name of Jayco,
                was strategically established in Meerut in 1989. Starting as a
                single point SSI unit under the able guidance of partners Mr.
                Sukmal Jain & Mr. Navin Jain, the company was set up with a team
                of highly qualified and experienced professionals.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed sm:text-justify sm:text-sm">
                Since inception, Jayco Electricals has earned an excellent
                reputation among Central and State government departments and
                Private Sectors for supplying superior quality products and
                impressive service at competitive rates. Our journey spans over
                three decades of manufacturing excellence in Distribution &
                Instrument Transformers, and various types of Transformers and
                Servo Voltage Stabilizers.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed sm:text-justify sm:text-sm">
                Total commitment to quality and ISO-9001 certification has
                helped Jayco create a respectable niche in the Indian market.
                Through consistent advancement in technology, innovations in raw
                materials, and improved production processes, we have
                successfully reduced transformer costs while benefiting
                countless customers.
              </p>
            </div>
            <div className="relative mx-auto">
              <img
                alt="Jayco Electricals Manufacturing Facility"
                className="rounded-2xl h-[600px] w-full object-cover"
                src="/lovable-uploads/product/power_tt.webp"
              />
            </div>
          </div>

          {/* Mission & Vision */}
          <MissionVisionValues />

          {/* Company Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center m-12">
            <div className="relative mx-auto">
              <img
                alt="Jayco Electricals Manufacturing Facility"
                className="rounded-xl h-96"
                src="/lovable-uploads/about/insfra.png"
              />
            </div>
            <div>
              <h1 className="py-5 text-xl">Infrastructure : </h1>
              <p className="text-muted-foreground mb-6 leading-relaxed sm:text-justify sm:text-sm">
                To meet the ever-growing demand of industries across India,
                Jayco Electricals has invested in state-of-the-art manufacturing
                facilities. Our plant is equipped with the latest machinery,
                testing equipment, and quality control systems to ensure
                flawless production.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed sm:text-justify sm:text-sm">
                Since inception, Jayco Electricals has earned an excellent
                reputation among Central and State government departments and
                Private Sectors for supplying superior quality products and
                impressive service at competitive rates. Our journey spans over
                three decades of manufacturing excellence in Distribution &
                Instrument Transformers, and various types of Transformers and
                Servo Voltage Stabilizers.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed sm:text-justify sm:text-sm">
                Total commitment to quality and ISO-9001 certification has
                helped Jayco create a respectable niche in the Indian market.
                Through consistent advancement in technology, innovations in raw
                materials, and improved production processes, we have
                successfully reduced transformer costs while benefiting
                countless customers.
              </p>
            </div>
          </div>
        </div>
        <Certifications onlyLogo={undefined} />

        <QualityPolicy />
      </div>
    </section>
  );
};
export default AboutSection;
