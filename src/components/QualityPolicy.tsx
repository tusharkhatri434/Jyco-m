import { ShieldCheck } from "lucide-react"; // icon

export default function QualityPolicy() {
  return (
    <section className="py-12 max-w-7xl mx-auto">
      {/* Heading with Icon */}
      <div className="flex items-center  mb-6">
        <ShieldCheck className="w-8 h-8 text-black" />
        <h2 className="text-xl font-bold">Quality Policy</h2>
      </div>
      {/* Description */}
      <p className="text-muted-foreground mb-6 leading-relaxed sm:text-justify sm:text-sm">
        At Jayco Electricals, quality is at the core of everything we do. Every
        product undergoes rigorous checks at multiple stages—from raw material
        inspection to final testing—ensuring complete reliability and safety. We
        are proud holders of <b>ISO 9001:2015</b> and <b>ISO 14001:2015</b>{" "}
        certifications, as well as <b>BIS</b> and <b>MSME</b> recognitions,
        which validate our commitment to excellence. By sourcing only the finest
        raw materials and using advanced production techniques, we guarantee
        products that are durable, efficient, and cost-effective.
      </p>
      {/* Bullet Points */}


      <h3 className="text-xl font-semibold mb-3">
        Our quality policy ensures:
      </h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2 text-muted-foreground mb-6 leading-relaxed sm:text-justify sm:text-sm">
        <li>Use of certified raw materials and advanced technology.</li>
        <li>Stringent testing and inspection procedures.</li>
        <li>Continuous improvement through innovation.</li>
        <li>Feedback-driven enhancements from clients and industry experts.</li>
      </ul>
    </section>
  );
}
