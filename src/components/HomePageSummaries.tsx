import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Factory,
  Shield,
  Users,
  Award,
  Building2,
  Zap,
  Settings,
  Globe,
  FileCheck,
  Phone,
} from "lucide-react";
import CustomerCarousel from "./CustomerCarousel";
import Certifications from "./Certifications";

const HomePageSummaries = () => {
  const navigate = useNavigate();
  const summaryCards = [
    {
      icon: Factory,
      title: "Who we are",
      summary:
        "Leading manufacturer of power transformers and electrical equipment with 35+ years of excellence. ISO certified facility delivering quality solutions across India.",
      highlights: [
        "35+ Years Experience",
        "24,000+ Units Manufactured",
        "ISO 9001 Certified",
      ],
      page: "/about",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: Zap,
      title: "Our Products",
      summary:
        "Comprehensive range of power transformers, distribution transformers, voltage stabilizers, and electrical control panels designed for diverse industrial applications.",
      highlights: [
        "Power transformer",
        "Solar Inverter Duty Transformer & Wind Power",
        "Distribution Transformer",
        "Dry type transformers & many more",
      ],
      page: "/products",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: Settings,
      title: "Our Services",
      summary:
        "End-to-end electrical solutions from custom design and engineering to installation, commissioning, and 24/7 technical support.",
      highlights: [
        "Custom Design & Engineering",
        "Installation & Commissioning",
        "24/7 Technical Support",
        "Maintenance Services",
      ],
      page: "/services",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: Building2,
      title: "Industries We Serve",
      summary:
        "Powering diverse sectors including manufacturing, healthcare, education, renewable energy, and power utilities with specialized transformer solutions.",
      highlights: [
        "Manufacturing & Heavy Industries",
        "Healthcare & Hospitals",
        "Renewable Energy",
        "Power Utilities",
      ],
      page: "/industries",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: Award,
      title: "Certifications & Quality",
      summary:
        "Our commitment to excellence validated by international certifications including ISO 9001, CE marking, and BIS certification ensuring highest quality standards.",
      highlights: [
        "ISO(Certification No.9001, 14001)",
        "MSME",
        "Make in India",
        "GEM",
        "BIS",
      ],
      page: "/certifications",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: Users,
      title: "Our Valued Customers",
      summary:
        "Trusted by leading industries, government organizations, and power utilities across India. Building lasting partnerships through reliable solutions.",
      highlights: [
        "Reliance Industries",
        "Steel Authority of India",
        "Indian Railways",
        "Tata Projects Limited & More",
      ],
      page: "/customers",
      color: "bg-indigo-50 border-indigo-200",
    },
  ];

  const imagesOurClients = [
    { img: "/lovable-uploads/customer/1.png" },
    { img: "/lovable-uploads/customer/2.png" },
    { img: "/lovable-uploads/customer/3.png" },
    { img: "/lovable-uploads/customer/4.png" },
  ];
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Company Introduction */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 justify-center flex flex-col gap-1 sm:flex-row">
            <span>Welcome to</span>
            <span className="text-red-600">Jayco Electricals</span>
          </h2>
          <p className="text-lg md:text-xl font-bold text-gray-900 mb-5">
            Coming together is a beginning | Keeping together is progress |
            Working together is success
          </p>
          <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            India's premier manufacturer of high-quality power transformers and
            electrical equipment. <br /> For over three decades, we've been powering
            industries with innovative, reliable, and efficient electrical
            solutions that meet the highest international standards.
          </p>
        </div>

        {/* Summary Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 justify-items-center">
          {summaryCards.map((card, index) => (
            <Card
              key={index}
              className={`h-auto w-[330px] max-w-sm bg-white shadow-md border rounded-2xl overflow-hidden scroll-animate-zoom scroll-stagger-${
          index + 1
              }`}
            >
              <CardHeader className="pb-3 bg-gray-100 rounded-xl scroll-animate-fade scroll-stagger-${index + 1}">
          <div className="flex items-center space-x-2 mb-3 scroll-animate-slide-up scroll-stagger-${index + 2}">
            <div className="p-2 bg-white shadow-md scroll-animate-bounce scroll-stagger-${index + 3} rounded-xl">
              <card.icon className="h-5 w-5 text-red-600" />
            </div>
            <CardTitle className="text-lg font-bold text-black scroll-animate-left scroll-stagger-${index + 3}">
              {card.title}
            </CardTitle>
          </div>
              </CardHeader>
              <CardContent className="flex flex-col py-2 rounded-md scroll-animate-fade scroll-stagger-${index + 4}">
          <p className="text-gray-700 mb-4 leading-relaxed text-sm scroll-animate-slide-up scroll-stagger-${index + 4}">
            {card.summary}
          </p>

          <div className="mb-4 scroll-animate-fade scroll-stagger-${index + 5}">
            <ul className="space-y-1">
              {card.highlights.map((highlight, idx) => (
          <li
            key={idx}
            className={`flex items-center text-xs text-gray-600 scroll-animate-right scroll-stagger-${
              index + 6 + idx
            }`}
          >
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
            {highlight}
          </li>
              ))}
            </ul>
          </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Certifications onlyLogo={true} />
      </div>
    </div>
  );
};
export default HomePageSummaries;
