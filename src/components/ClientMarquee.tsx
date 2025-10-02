import { useState } from 'react';

const ClientMarquee = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  const clients = [
    "Jaipur Vidyut Vitran Nigam Ltd",
    "Bharti Airtel Limited",
    "Tata Projects Limited",
    "Larsen & Toubro Limited",
    "Steel Authority of India",
    "Reliance Industries",
    "Indian Railways",
    "BHEL (Bharat Heavy Electricals)",
    "Power Grid Corporation",
    "NTPC Limited"
  ];

  return (
    <section className="py-4 bg-red-600 border-y border-white/10">
      <div className="relative overflow-hidden w-full">
        {/* Marquee track */}
        <div className="flex whitespace-nowrap min-w-full">
          <div
            className={`flex items-center space-x-12 ${
              isAnimating ? 'animate-marquee' : ''
            }`}
          >
            {[...clients, ...clients].map((client, index) => (
              <span
                key={index}
                className="text-sm px-4 text-zinc-50 font-semibold hover:text-white transition-colors duration-300"
              >
                ✦ {client}
              </span>
            ))}
          </div>
        </div>

        {/* Left gradient overlay */}
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-red-600 to-transparent pointer-events-none z-10" />
        {/* Right gradient overlay */}
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-red-600 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default ClientMarquee;
