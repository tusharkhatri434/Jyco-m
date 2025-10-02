import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Slide {
  id: number;
  bgImage: string;
  heading: string;
  subtext1: string;
  transformerImage?: string;
  subtext2: string;
}

const slides: Slide[] = [
  {
    id: 1,
    bgImage: "/lovable-uploads/home/banner01.png",
    heading: "Manufacturer & Supplier of",
    subtext1: "Solar Inverter Duty Transformers",
    subtext2: "& Wind Power Transformers",
  },
  {
    id: 2,
    bgImage: "/lovable-uploads/home/banner02.png",
    heading: "Manufacturer & Supplier of",
    subtext1: "Power and",
    subtext2: "Distribution Transformers",
  },
  {
    id: 3,
    bgImage: "/lovable-uploads/home/banner03.png",
    heading: "Manufacturer & Supplier of",
    subtext1: "Servo Voltage Stabilizers,",
    subtext2: " Furnace Transformers & more",
  },
];

const mobileSlides: Slide[] = [
  {
    id: 1,
    bgImage: "/lovable-uploads/home/sq01.png",
    heading: "Manufacturer & Supplier of",
    subtext1: "Solar Inverter Duty Transformers",
    subtext2: "& Wind Power Transformers",
  },
  {
    id: 2,
    bgImage: "/lovable-uploads/home/sq02.png",
    heading: "Manufacturer & Supplier of",
    subtext1: "Power and",
    subtext2: "Distribution Transformers",
  },
  {
    id: 3,
    bgImage: "/lovable-uploads/home/sq03.png",
    heading: "Manufacturer & Supplier of",
    subtext1: "Servo Voltage Stabilizers,",
    subtext2: " Furnace Transformers & more",
  },
];

const HeroSlideshow = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      const nowMobile = window.innerWidth < 500;
      setIsMobile((prev) => {
        if (prev !== nowMobile) {
          setCurrentSlide(0); // reset slide on switch
        }
        return nowMobile;
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Decide which slides to use
  const currentSlides = useMemo(() => (isMobile ? mobileSlides : slides), [isMobile]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + currentSlides.length) % currentSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % currentSlides.length);
  };

  return (
    <section className="relative h-[70vh] md:h-[65vh] w-full overflow-hidden mt-20 md:mt-28">
      {/* Slides */}
      <div className="relative h-full w-full">
        {currentSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: isMobile ? "center top" : "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay */}
            <div
              className={`absolute inset-0 ${
                isMobile
                  ? "bg-gradient-to-t from-black/60 via-black/30 to-black/20"
                  : "bg-gradient-to-r from-black/40 to-black/10"
              }`}
            ></div>

            {/* Content */}
            <div
              className={`relative container mx-auto h-full flex items-center px-6 md:px-12 lg:px-20 ${
                isMobile ? "items-end pb-16" : "items-center"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full items-center">
                {/* Left: Text */}
                <div className="text-white w-full col-span-12 md:col-span-8 text-center md:text-left">
                  <span className="text-base md:text-lg font-medium block mb-2">
                    {slide.heading}
                  </span>
                  <h1 className="text-xl md:text-4xl lg:text-4xl font-extrabold leading-tight">
                    {slide.subtext1}
                  </h1>
                  <h1 className="text-xl md:text-4xl lg:text-4xl font-extrabold leading-tight mb-6">
                    {slide.subtext2}
                  </h1>
                  <Button
                    onClick={() => navigate("/products")}
                    className="bg-white text-black hover:bg-gray-200 font-semibold px-4 py-2 md:px-6 md:py-3 rounded-full shadow-md transition"
                  >
                    Explore our Products
                  </Button>
                </div>

                {/* Right: Transformer Image */}
                {slide.transformerImage && (
                  <div className="flex justify-center md:justify-end md:col-span-4 mt-4 md:mt-0">
                    <img
                      src={slide.transformerImage}
                      alt="Transformer"
                      className="w-48 md:w-full max-w-sm md:mt-24 object-contain drop-shadow-2xl"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-[90%] sm:top-1/2 -translate-y-1/2 left-4 z-20 bg-black/40 hover:bg-black/70 p-3 rounded-full"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-[90%] sm:top-1/2 -translate-y-1/2 right-4 z-20 bg-black/40 hover:bg-black/70 p-3 rounded-full"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {currentSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
