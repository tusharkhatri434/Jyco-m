import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronUp, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // for mobile
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  const navigateToPage = (path: string) => {
    // Check if it's a hash link to the same page
    if (path.includes("#") && path.startsWith(location.pathname)) {
      // For hash links on the same page, just navigate normally
      navigate(path);
    } else {
      // For different pages, navigate and scroll to top
      navigate(path);
      window.scrollTo(0, 0);
    }
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const isActivePage = (path: string) => location.pathname === path;

  const menuItems = [
    { path: "/", label: "Home" },
    {
      path: "/about",
      label: "About us",
      // dropdown: [
      //   { path: '/about#about', label: 'Company Profile' },
      //   { path: '/certifications', label: 'Our Certifications' },
      //   { path: '/customers', label: 'Our Customers' },
      // ]
    },
    {
      path: "/infra",
      label: "Our Manufacturing Process",
    },
    {
      path: "/products",
      label: "Our Products",
      dropdown: [
        { path: "/products#Power-Transformers", label: "Power Transformers" },
        {
          path: "/products#Solar-Inverter-Duty-Transformers",
          label: "Solar Inverter Duty Transformers & Wind Power",
        },
        {
          path: "/products#Distribution-Transformers",
          label: "Distribution Transformers",
        },
        {
          path: "/products#Dry-Type-Transformers",
          label: "Dry Type Transformers",
        },
        {
          path: "/products#Furnace-Transformers",
          label: "Furnace Transformers",
        },
        { path: "/products#Auto-Transformers", label: "Auto Transformers" },
        {
          path: "/products#Isolation-Transformers",
          label: "Isolation Transformers",
        },
        {
          path: "/products#Servo-Voltage-Stabilizers",
          label: "Servo-Voltage-Stabilizers",
        },
      ],
    },
    { path: "/services", label: "Our Services" },
    { path: "/contact", label: "Contact Us" },
    // { path: '/industries', label: 'Industries We Serve' },
    // { path: '/certifications', label: 'Our Certifications' },
    // { path: '/customers', label: 'Our Customers' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? "bg-white backdrop-blur-md shadow-lg"
          : "bg-white backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between rounded-xl px-4 py-2">
          <div
            className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => navigateToPage("/")}
          >
            <img
              alt="Jayco Electricals"
              className="h-14 transition-transform duration-300 object-cover"
              src="/lovable-uploads/img/logo3.png"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <div key={item.path} className="relative group">
                <button
                  onClick={() => navigateToPage(item.path)}
                  className={`text-sm font-medium hover:text-red-500 flex items-center space-x-1 ${
                    isActivePage(item.path) ? "text-red-500 font-semibold" : ""
                  }`}
                >
                  <span>{item.label}</span>
                  {item.dropdown && <ChevronDown size={16} />}
                </button>

                {/* Dropdown - Desktop */}
                {item.dropdown && (
                  <div className="flex flex-col gap-1 absolute left-0 mt-0 pt-5 min-w-max bg-white shadow-lg rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-50">
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem.path}
                        onClick={() => navigateToPage(subItem.path)}
                        className="w-full rounded-lg text-left py-2 pl-3 bg-white px-2 text-sm font-medium hover:bg-white hover:text-red-600"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex justify-center gap-2">
            <Button
              aria-label="Contact Us"
              className="w-10 h-10 shadow-2xl py-1 hover:shadow-xl transition-all duration-300 hover:scale-110 rounded-full text-white bg-red-700 hover:bg-red-600"
            >
              <a href="tel:+919837091228">
                <Phone className="w-full h-full " />
              </a>
            </Button>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 rounded-full p-2"
              aria-label="Get Quote"
            >
              <a href="https://wa.me/919837091228">
                <img
                  className="h-6 w-6"
                  src="lovable-uploads/img/icons8-whatsapp-144.png"
                  alt=""
                />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden hover:scale-105 transition-transform duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border bg-white rounded-xl">
            <div className="flex flex-col space-y-2 pt-4 px-4">
              {menuItems.map((item) => (
                <div key={item.path}>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => {
                        navigateToPage(item.path);
                      }}
                      className={`text-left text-foreground py-2 px-2 w-full ${
                        isActivePage(item.path)
                          ? "text-red-600 font-semibold"
                          : ""
                      }`}
                    >
                      {item.label}
                    </button>

                    {item.dropdown && (
                      <button
                        className="px-4 py-4"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label
                          )
                        }
                      >
                        {openDropdown === item.label ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Dropdown Mobile */}
                  {item.dropdown && openDropdown === item.label && (
                    <div className="pl-4 mt-1 flex flex-col space-y-1">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.path}
                          onClick={() => navigateToPage(subItem.path)}
                          className="text-left py-2 px-2 bg-slate-200 text-sm text-muted-foreground hover:text-primary rounded-xl"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Phone + WhatsApp icons (below Contact Us) */}
              <div className="flex justify-end gap-4 mt-4 px-2">
                <a
                  href="tel:+919837091228"
                  className="w-10 h-10 shadow-2xl py-1 hover:shadow-xl transition-all duration-300 hover:scale-110 rounded-full text-white bg-red-700 hover:bg-red-600"
                >
                  <Phone className="w-full h-full p-2" />
                </a>
                <a
                  href="https://wa.me/919837091228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 rounded-full p-2"
                >
                  <img
                    className="h-6 w-6"
                    src="lovable-uploads/img/icons8-whatsapp-144.png"
                    alt="WhatsApp"
                  />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
