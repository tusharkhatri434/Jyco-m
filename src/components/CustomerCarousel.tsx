import React, { useState, useEffect } from "react";

const images = [
  "/lovable-uploads/customer/1.png",
  "/lovable-uploads/customer/2.png",
  "/lovable-uploads/customer/3.png",
  "/lovable-uploads/customer/4.png",
];

export default function CustomerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold pb-1 md:pb-10 text-red-600">
        Our Customer
      </h2>

      <div className="relative w-full overflow-hidden">
        {/* Images */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="h-40 object-contain flex-shrink-0 w-full"
            />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/20 md:bg-black/50 text-white p-3 rounded-full hover:bg-black/60"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/20 md:bg-black/50 text-white p-3 rounded-full hover:bg-black/60"
        >
          ❯
        </button>
      </div>
      {/* Dots */}
      <div className="relative md:-bottom-10 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-red-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
