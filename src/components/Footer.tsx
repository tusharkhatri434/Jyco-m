import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Factory, Award, Shield, Users, Headset } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation(); // gives current location object
  const navigateToPage = (path: string) => {
    const currentPath = location.pathname; 
    if(currentPath==path){
      window.scrollTo(0,0);
    }
    else{
      navigate(path);
    }
  };
  const quickLinks = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/about',
    label: 'About Us'
  }, 
      {
      path:'/infra',
      label:"Our Manufacturing Process"
    },
  {
    path: '/products',
    label: 'Our Products'
  },{
    path: '/services',
    label: 'Our Services'
  }, {
    path: '/contact',
    label: 'Contact Us'
  }];
  const productLinks = [
      { path: '/products#Power-Transformers', label: 'Power Transformers' },
      { path: '/products#Solar-Inverter-Duty-Transformers', label: 'Solar Inverter Duty Transformers & Wind Power' },
        { path: '/products#Distribution-Transformers', label: 'Distribution Transformers' },
        { path: '/products#Dry-Type-Transformers', label: 'Dry Type Transformers' },
        { path: '/products#Furnace-Transformers', label: 'Furnace Transformers' },
        { path: '/products#Auto-Transformers', label: 'Auto Transformers' },
        { path: '/products#Isolation-Transformers', label: 'Isolation Transformers' },
        { path: '/products#Servo-Voltage-Stabilizers', label: 'Servo-Voltage-Stabilizers' }
  ];
  const serviceLinks = [{
    path: '/services',
    label: 'Custom Design & Engineering'
  }, {
    path: '/services',
    label: 'Manufacturing Excellence'
  }, {
    path: '/services',
    label: 'Testing & Quality Assurance'
  }, {
    path: '/services',
    label: 'Installation & Commissioning'
  }, {
    path: '/services',
    label: 'Maintenance & Support'
  }, {
    path: '/services',
    label: '24/7 Technical Support'
  }];
  const industryLinks = [{
    path: '/industries',
    label: 'Manufacturing & Heavy Industries'
  }, {
    path: '/industries',
    label: 'Commercial & Infrastructure'
  }, {
    path: '/industries',
    label: 'Renewable Energy'
  }, {
    path: '/industries',
    label: 'Power Utilities'
  }, {
    path: '/industries',
    label: 'Healthcare & Hospitals'
  }, {
    path: '/industries',
    label: 'Educational Institutions'
  }];
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat animate-fade-in"
      style={{
        backgroundImage: "url('/lovable-uploads/img/footer_background.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-slate-800 z-0"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Company Info */}
          <div className="animate-slide-in-left">
            <div className="flex items-center space-x-3 mb-8">
              <img
                alt="Jayco Electricals"
                className="h-14 w-auto hover-scale"
                src="/lovable-uploads/img/logo2.png"
              />
            </div>
            <p className="mb-8 leading-relaxed text-zinc-50 text-base">
              Leading manufacturer of high-quality power transformers,
              distribution transformers, and electrical control panels. Powering
              India's progress since 1990 with cutting-edge technology and
              uncompromising quality standards.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold text-white mb-1">
                  35,000+
                </div>
                <p className="text-white/80 text-xs px">
                  Units Manufactured & counting everyday
                </p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold text-white mb-1">35+</div>
                <p className="text-white/80 text-sm">Years Excellence</p>
              </div>
            </div>

            {/* Social Links */}
          </div>

          {/* Quick Links */}
          <div
            className="animate-slide-in-left"
            style={{
              animationDelay: "0.1s",
            }}
          >
            <h3 className="text-xl font-bold mb-8 flex items-center text-zinc-50">
              <Shield className="h-5 w-5 mr-2 text-red-400" />
              Quick Links
            </h3>
            <ul className="space-y-4 ml-6">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigateToPage(link.path)}
                    className="footer-link text-left block hover:translate-x-2 text-zinc-50"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div
            className="animate-slide-in-right"
            style={{
              animationDelay: "0.2s",
            }}
          >
            <h3 className="text-xl font-bold mb-8 flex items-center text-zinc-50">
              <Factory className="h-5 w-5 mr-2 text-red-400" />
              Our Products
            </h3>
            <ul className="space-y-4">
              {productLinks.slice(0, 8).map((product, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigateToPage(product.path)}
                    className="footer-link text-left block hover:translate-x-2 text-zinc-50"
                  >
                    {product.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Services */}
          <div
            className="animate-slide-in-right"
            style={{
              animationDelay: "0.3s",
            }}
          >
            <h3 className="text-xl mb-8 flex items-center text-zinc-50">
              <button className="inline-block rounded-xl p-1 py-2 mr-1">
                <Headset className="h-5 text-red-400" />
              </button>
              Contact Us
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-center group">
                <Phone className="h-5 w-5 text-red-400 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-zinc-50">+91-7055705590</p>
                  <p className="text-zinc-50">+91-9837091228</p>
                  <p className="text-zinc-50 text-base">+91-121-4065531</p>
                </div>
              </div>
              <div className="flex items-center group">
                <Mail className="h-5 w-5 text-red-400 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-zinc-50">info@jaycoelectricals.com</p>
              </div>
              <div className="flex items-start group">
                <MapPin className="h-5 w-5 text-red-400 mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="https://maps.app.goo.gl/PrJeYtYWMnaCBhcB6">
                  <div>
                    <p className="text-zinc-50">163-164, Rajvansh Vihar</p>
                    <p className="text-zinc-50">Sarai Qazi Road, Garh Rd</p>
                    <p className="text-zinc-50">
                      Meerut, Uttar Pradesh 250004 (India)
                    </p>
                  </div>
                </a>
              </div>
            </div>
          
            {/* Certifications */}
            {/* <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center mb-3">
                <Award className="h-5 w-5 text-red-400 mr-2" />
                <span className="text-white font-semibold">ISO 9001 Certified</span>
              </div>
              <p className="text-white/80 text-sm">Quality Management System</p>
            </div> */}
          </div>
        </div>

        {/* Services & Industries Section */}

        {/* Bottom Bar */}
        <div
          className="border-t border-white/20 mt-16 pt-8 animate-fade-in"
          style={{
            animationDelay: "0.6s",
          }}
        >
          <div className="gap-6">
            <p className="text-white/70">
              Copyright © {currentYear} Jayco Electricals. All rights
              reserved.Website Developed by : Team{" "}
              <a
                className="underline"
                href="https://pixel8ai.com/"
                target="_blank"
              >
                Pixel8ai
              </a>{" "}
              & Promoted by :{" "}
              <a
                className="underline"
                href="https://www.sharadupadhyay.com/"
                target="_blank"
              >
                Team Exabyte
              </a>
            </p>
            <p className="text-white/70 text-center lg:text-left"></p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;