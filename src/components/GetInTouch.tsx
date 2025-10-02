import React from "react";

const GetInTouch = () => {
  return (
    <section
      className="relative top-10 py-16 md:py-20 lg:py-24 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Red background overlay */}
      <div className="absolute inset-0 bg-red-600/90"></div>

      <div className="container mx-auto relative z-10 rounded-3xl px-[5px]">
        <div className="mx-auto text-center text-white">
          {/* Main heading with same styling as HeroSection */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight scroll-animate-left text-shadow">
            Get In Touch
          </h1>

          {/* Description with same styling */}
          <p className="text-sm mb-12 max-w-3xl mx-auto leading-relaxed scroll-animate md:text-base font-semibold text-white">
            Connect with our expert team for custom transformer solutions. We
            provide comprehensive support from design to installation.
          </p>
        </div>
      </div>

      {/* CSS for animations and effects */}
      <style>{`
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .scroll-animate-left {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .scroll-animate {
          animation: fadeInUp 1s ease-out 0.3s both;
        }
        
        .scroll-animate-bounce {
          animation: fadeInUp 1.2s ease-out 0.6s both;
        }
        
        .hover-scale {
          transition: transform 0.2s ease-in-out;
        }
        
        .hover-scale:hover {
          transform: scale(1.05);
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .text-professional-red {
          color: #dc2626;
        }
      `}</style>
    </section>
  );
};

export default GetInTouch;
