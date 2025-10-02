import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Zap,
  Download,
  FileText,
  Users,
  Wrench,
  MessageCircle,
  CheckCircle,
  Package,
  User,
} from "lucide-react";
import MapCard from "./MapCard";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    project: "",
    transformerType: "",
    powerRating: "",
    voltage: "",
    message: "",
  });

  // WhatsApp number - replace with your actual WhatsApp business number
  const whatsappNumber = "919837091228"; // Remove the + and any spaces/dashes

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatWhatsAppMessage = (data) => {
    let message = `*New Quote Request from ${data.name}*\n\n`;

    if (data.name) message += `👤 *Name:* ${data.name}\n`;
    if (data.email) message += `📧 *Email:* ${data.email}\n`;
    if (data.phone) message += `📱 *Phone:* ${data.phone}\n`;
    if (data.company) message += `🏢 *Company:* ${data.company}\n`;
    if (data.project) message += `🔧 *Project Type:* ${data.project}\n`;
    if (data.transformerType)
      message += `⚡ *Transformer Type:* ${data.transformerType}\n`;
    if (data.powerRating) message += `🔋 *Power Rating:* ${data.powerRating}\n`;
    if (data.voltage) message += `⚡ *Voltage:* ${data.voltage}\n`;
    if (data.message)
      message += `\n💬 *Additional Details:*\n${data.message}\n`;

    message += `\n📅 *Inquiry Date:* ${new Date().toLocaleDateString()}\n`;
    message += `🕒 *Time:* ${new Date().toLocaleTimeString()}`;

    return encodeURIComponent(message);
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields (Name, Email, Phone)");
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = formatWhatsAppMessage(formData);

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");

    console.log("Form submitted and WhatsApp opened:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      content: [
        "163-164, Rajvansh Vihar Sarai Qazi Road, Garh Rd, Meerut, Uttar Pradesh 250004",
      ],
      badge: "Headquarters",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      content: ["Mobile: +91-9837091228", "Office: +91-121-4065531"],
      badge: "24/7 Support",
    },
    {
      icon: Mail,
      title: "Email",
      content: [
        "info@jaycoelectricals.com",
        "sales@jaycoelectricals.com",
        "support@jaycoelectricals.com",
      ],
      badge: "Quick Response",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: [
        "Monday - Saturday: 9:00 AM - 6:00 PM",
        "Sunday: By Appointment",
        "Emergency Support: 24/7",
      ],
      badge: "Extended Hours",
    },
  ];

  const services = [
    {
      icon: Zap,
      title: "Technical Consultation",
      description: "Expert guidance for your transformer requirements",
      features: [
        "Load analysis",
        "Specification development",
        "Cost optimization",
      ],
    },
    {
      icon: Wrench,
      title: "After-Sales Support",
      description: "Comprehensive maintenance and repair services",
      features: [
        "Regular maintenance",
        "Emergency repairs",
        "Parts replacement",
      ],
    },
    {
      icon: Users,
      title: "Training Programs",
      description: "Technical training for your maintenance team",
      features: [
        "On-site training",
        "Operation procedures",
        "Safety protocols",
      ],
    },
  ];

  const downloads = [
    {
      name: "Product Catalog",
      type: "PDF",
      size: "2.5 MB",
      description: "Complete product specifications",
    },
    {
      name: "Technical Specifications",
      type: "PDF",
      size: "1.8 MB",
      description: "Detailed technical data",
    },
    {
      name: "Quality Certificates",
      type: "PDF",
      size: "0.9 MB",
      description: "ISO and testing certificates",
    },
    {
      name: "Installation Manual",
      type: "PDF",
      size: "3.2 MB",
      description: "Step-by-step installation guide",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-sm max-h-fit">
            <CardHeader>
              <CardTitle className="text-xl flex items-center text-black">
                <MessageCircle className="h-6 w-6 mr-2 text-primary" />
                Request Technical Quote
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and our engineering team will get back
                to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91-9876543210"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md"
                  >
                    <option value="">Select project type</option>
                    <option value="power-transformer">Power Transformer</option>
                    <option value="distribution-transformer">
                      Distribution Transformer
                    </option>
                    <option value="special-transformer">
                      Special Application
                    </option>
                    <option value="maintenance">Maintenance & Repair</option>
                    <option value="consultation">Technical Consultation</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Transformer Type
                    </label>
                    <select
                      name="transformerType"
                      value={formData.transformerType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md"
                    >
                      <option value="">Select type</option>
                      <option value="oil-cooled">Oil Cooled</option>
                      <option value="dry-type">Dry Type</option>
                      <option value="cast-resin">Cast Resin</option>
                      <option value="auto-transformer">Auto Transformer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Power Rating
                    </label>
                    <Input
                      name="powerRating"
                      value={formData.powerRating}
                      onChange={handleInputChange}
                      placeholder="e.g., 1000 KVA"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Voltage
                    </label>
                    <Input
                      name="voltage"
                      value={formData.voltage}
                      onChange={handleInputChange}
                      placeholder="e.g., 11/0.433 KV"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your project requirements, installation conditions, and any specific technical requirements..."
                    rows={4}
                  />
                </div>

                <Button
                  type="button"
                  size="lg"
                  className="w-full group bg-red-600 hover:bg-red-700 text-white rounded-xl"
                  onClick={handleSubmit}
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Send Quote Request
                  <CheckCircle className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary bg-gray-100">
              <CardContent className="p-6 rounded-2xl bg-gray-100 text-black">
                <h3 className="text-xl font-bold text-red-600 mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Phone Support</p>
                      <p className="text-primary">+91-7055705590</p>
                      <p className="text-primary">+91-9837091228</p>
                      <p className="text-primary">+91-121-4065531</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <p className="text-primary">info@jaycoelectricals.com</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <MessageCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-primary">+91-9837091228</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary bg-gray-300">
              <CardContent className="p-6 rounded-2xl bg-gray-100 text-black">
                <h3 className="text-xl font-bold text-red-600 mb-4">
                  Our Location
                </h3>
                <div className="space-y-3">
                  <div className="flex space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm text-primary">
                        163-164, Rajvansh Vihar <br />
                        Sarai Qazi Road, Garh Rd, <br />
                        Meerut, Uttar Pradesh 250004
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-sm text-primary">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-sm text-primary">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <MapCard />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
