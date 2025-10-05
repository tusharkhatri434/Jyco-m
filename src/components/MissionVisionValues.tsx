import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function MissionVisionValues() {
  const cards = [
    {
      icon: "🎯",
      title: "Our Mission",
      text1: 'To strengthen India’s power sector by delivering safe, innovative, and energy-efficient transformer solutions that empower industries, utilities, and infrastructure.',
      text2 : 'We are committed to maintaining the highest standards of quality, reliability, and cost-effectiveness, while ensuring lasting value for our customers and contributing to sustainable growth.',
    },
    {
      icon: "💡",
      title: "Our Vision",
      text1: 'To be recognized as India’s most trusted and innovative transformer manufacturer, known for shaping the future of power infrastructure through excellence, technological advancement, and customer-centric solutions.',
      text2 : 'We aim to set benchmarks in quality and service while supporting the nation’s journey towards reliable and sustainable energy.'
    },
    {
      icon: "✅",
      title: "Our Core Values",
      text1: 'Jayco Electricals is guided by values that define our identity and drive our success. Integrity ensures transparency in every action, while quality excellence reflects our dedication to world-class standards.',
      text2 : 'Innovation fuels smarter solutions, customer-centricity drives long-term trust, sustainability promotes greener growth, and teamwork empowers us to achieve excellence together.'
    },
  ];

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {cards.map((card, index) => (
        <Card
          key={index}
          className={`w-full max-w-[480px] mx-auto bg-white shadow-md border rounded-2xl overflow-hidden scroll-animate-zoom scroll-stagger-${
            index + 1
          }`}
        >
          <CardHeader className="bg-gray-100 p-4 rounded-xl scroll-animate-fade scroll-stagger-${index + 1}">
            <div className="flex items-center space-x-2 scroll-animate-slide-up scroll-stagger-${index + 2}">
              <div className="p-2 bg-white shadow-md scroll-animate-bounce scroll-stagger-${index + 3} rounded-xl">
                <span className="text-lg">{card.icon}</span>
              </div>
              <CardTitle className="text-base font-semibold text-black scroll-animate-left scroll-stagger-${index + 3}">
                {card.title}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col p-5 rounded-md scroll-animate-fade scroll-stagger-${index + 4}">
            <div className="text-gray-700 flex flex-col gap-3 leading-relaxed text-sm scroll-animate-slide-up scroll-stagger-${index + 4} whitespace-pre-line">
              <p>{card.text1}</p>
              
              <p>{card.text2}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
