import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function MissionVisionValues() {
  const cards = [
    {
      icon: "🎯",
      title: "Our Mission",
      text: `To strengthen India’s power sector by delivering safe, innovative, and energy-efficient transformer solutions that empower industries, utilities, and infrastructure.

We are committed to maintaining the highest standards of quality, reliability, and cost-effectiveness, while ensuring lasting value for our customers and contributing to sustainable growth.`,
    },
    {
      icon: "💡",
      title: "Our Vision",
      text: `To be recognized as India’s most trusted and innovative transformer manufacturer, known for shaping the future of power infrastructure through excellence, technological advancement, and customer-centric solutions.

We aim to set benchmarks in quality and service while supporting the nation’s journey towards reliable and sustainable energy.`,
    },
    {
      icon: "✅",
      title: "Our Core Values",
      text: `Jayco Electricals is guided by values that define our identity and drive our success. Integrity ensures transparency in every action, while quality excellence reflects our dedication to world-class standards.

Innovation fuels smarter solutions, customer-centricity drives long-term trust, sustainability promotes greener growth, and teamwork empowers us to achieve excellence together.`,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {cards.map((card, index) => (
        <Card
          key={index}
          className={`h-[440px] w-full max-w-[330px] mx-auto bg-white shadow-md border rounded-2xl overflow-hidden scroll-animate-zoom scroll-stagger-${
            index + 1
          }`}
        >
          <CardHeader className="pb-3 bg-gray-200 rounded-xl scroll-animate-fade scroll-stagger-${index + 1}">
            <div className="flex items-center space-x-2 mb-3 scroll-animate-slide-up scroll-stagger-${index + 2}">
              <div className="p-2 bg-white shadow-md scroll-animate-bounce scroll-stagger-${index + 3} rounded-xl">
                <span className="text-lg">{card.icon}</span>
              </div>
              <CardTitle className="text-base font-semibold text-black scroll-animate-left scroll-stagger-${index + 3}">
                {card.title}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col py-[8px] rounded-md bg-slate-50 scroll-animate-fade scroll-stagger-${index + 4}">
            <p className="text-gray-700 mb-14 leading-relaxed text-sm scroll-animate-slide-up scroll-stagger-${index + 4} whitespace-pre-line">
              {card.text}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
