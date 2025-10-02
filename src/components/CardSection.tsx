import React from "react";

const data = [
  {
    img: "specialCoreLiftingTable.png",
    title: "Special Core Lifting Table",
    Description:
      "Ensures strong mechanical integrity and enhances durability of the transformer. Perfect for reliable and noise-free performance.",
    Feature:
      "Prevents loose contacts at joints, reducing magnetostriction forces.",
    Benefit: "Long life & less noise.",
  },
  {
    img: "yoke_studs.png",
    title: "Non Use of Yoke Studs",
    Description:
      "Eliminates common failure points in conventional transformers. Ensures smoother and quieter functioning.",
    Feature:
      "Enables silent operation by lowering humming noise and avoiding insulation failure.",
    Benefit: "Long life & less noise.",
  },
  {
    img: "Collapsible_Former.png",
    title: "Collapsible Former",
    Description:
      "Optimizes transformer efficiency while improving cooling. Enhances energy savings over time.",
    Feature:
      "Ensures accurate coil clearance, reducing losses and improving oil flow.",
    Benefit: "Low maintenance cost & long life.",
  },
  {
    img: "Hydraulic_S_Bend_Tool.png",
    title: "Hydraulic S-Bend Tool",
    Description:
      "Maintains conductor strength and insulation safety. Minimizes chances of internal faults.",
    Feature:
      "Allows soft bending without conductor or insulation damage, preventing discharge.",
    Benefit: "Long life.",
  },
  {
    img: "Hydraulic_L_Bend_Tool.png",
    title: "Hydraulic L-Bend Tool",
    Description:
      "Designed for precise shaping without micro-cracks. Increases transformer reliability under load.",
    Feature:
      "Provides smooth bending, protecting conductor and insulation from stress.",
    Benefit: "Long life.",
  },
  {
    img: "German_Brazing_Machine.png",
    title: "German Brazing Machine",
    Description:
      "Guarantees robust joints with minimal thermal stress. Reduces maintenance and improves efficiency.",
    Feature:
      "Creates neat joints without overheating, ensuring strong and precise brazing.",
    Benefit: "Long life & low running cost.",
  },
  {
    img: "Machined_Insulation_Blocks.png",
    title: "Machined Insulation Blocks",
    Description:
      "Improves cooling system effectiveness. Enhances insulation life and overall stability.",
    Feature:
      "Allows smooth oil passage and accurate coil tightening for better stability.",
    Benefit: "Long life & trouble-free.",
  },
  {
    img: "Using_Hydraulic_Coil_Compressor.png",
    title: "Hydraulic Coil Compressor",
    Description:
      "Ensures structural rigidity of windings. Provides safety and consistency during operations.",
    Feature:
      "Tightens coils evenly to withstand short circuit forces and balance impedance.",
    Benefit: "No circulating current through neutral.",
  },
  {
    img: "Specially_Designed_Interleaved_Tapings.png",
    title: "Interleaved Tapings",
    Description:
      "Protects winding structure during fault conditions. Enhances fault tolerance and reliability.",
    Feature: "Reduces short circuit forces during faults for enhanced safety.",
    Benefit: "Trouble-free operation.",
  },
  {
    img: "Computerized_and_Fully_Automated_Test_Lab.png",
    title: "Automated Test Lab",
    Description:
      "Ensures high precision in quality checks. Speeds up testing while maintaining accuracy.",
    Feature: "Provides accurate results quickly without manual interference.",
    Benefit: "Reliable performance.",
  },
];

const CardSection = () => {
  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Features
          </h1>
          <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Discover our advanced manufacturing capabilities and quality
            features
          </p>
        </div>

        {/* Cards Grid - Fixed Height Implementation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center mx-auto auto-rows-fr">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="relative group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 flex flex-col w-full max-w-sm"
            >
              {/* Image Container - Fixed Height */}
              <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Image */}
                <div className="w-full h-full flex items-center justify-center p-4">
                  <img
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    src={`/lovable-uploads/ourService/${item.img}`}
                    alt={item.title}
                  />
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-white font-bold text-base leading-tight line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content Container - Optimized Layout */}
              <div className="flex flex-col flex-grow p-5">
                {/* Description - Fixed Height Section */}
                <div className="mb-4 flex-shrink-0">
                  <p className="text-gray-700 text-sm font-medium">
                    {item.Description}
                  </p>
                </div>

                {/* Feature Section - Constrained but Complete */}
                <div className="mb-4 max-h-fit">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wide">
                      Feature
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-4">
                    {item.Feature}
                  </p>
                </div>

                {/* Flexible Spacer to push benefit to bottom */}
                {/* <div className="flex-grow"></div> */}

                {/* Divider */}
                <div className="border-t border-gray-200 mb-3 flex-shrink-0"></div>

                {/* Benefit Section - Bottom Aligned */}
                <div className="">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                    <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wide">
                      Benefit
                    </h4>
                  </div>
                  <p className="text-green-700 text-sm font-semibold pl-4">
                    {item.Benefit}
                  </p>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-200 rounded-xl transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
