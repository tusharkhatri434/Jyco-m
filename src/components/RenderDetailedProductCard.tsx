import { useState } from "react";
import {
  Settings,
  Star,
  Shield,
  Factory,
  Zap,
  CheckCircle,
  Gauge,
  X,
  FileText,
} from "lucide-react";
import { productsData } from "@/utils/ProductData";

const ProductsCatalog = () => {
  const [showSpecsModal, setShowSpecsModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Close modal when clicking on backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSpecsModal(false);
    }
  };

  const openSpecsModal = (product) => {
    setSelectedProduct(product);
    setShowSpecsModal(true);
  };

  // Function to format description with line breaks
  const formatDescription = (description, productName) => {
    // Define specific descriptions with proper line breaks for better readability
    const formattedDescriptions = {
      "Power Transformers": [
        "Jayco Electricals offers high-performance Power Transformers designed for reliable and efficient voltage transformation in high-voltage transmission systems. Built with precision using CRGO cores, high-conductivity windings, and advanced insulation systems, our transformers are engineered for durability, energy efficiency, and long operational life.",
        "These are ideal for step-up and step-down voltage applications across power grids, substations, and large industrial operations.",
        "Every unit is manufactured in strict compliance with IS 2026, IEC 60076, and ANSI standards, with configurations tailored to meet the exact voltage, capacity, and site requirements of clients, including government electricity boards, DISCOMs, infrastructure projects, and heavy industry plants.",
      ],
      "Solar Inverter Duty Transformers & Wind Power": [
        "Jayco Electricals offers Solar & Wind Inverter Duty Transformers, engineered to meet the unique requirements of renewable energy integration. These transformers are designed to interface between solar/wind inverters and the utility grid, providing efficient voltage transformation, galvanic isolation, and stable grid synchronization.",
        "With the ability to handle non-linear inverter outputs, fluctuating wind patterns, and varying generation profiles, these transformers are optimized for high efficiency, low harmonic distortion, and long-term reliability in renewable power plants.",
        "All units comply with IS 2026 / IEC 60076 / IEEE standards and can be tailored for central, string, hybrid inverter, or wind turbine configurations. NOTE: These Transformers are manufactured as Step-Up / Booster Transformers to efficiently transfer the electricity generated from solar power plants to the utility grid.",
        " These transformers step up the voltage from the solar inverter output to the required grid voltage. The voltage ratio can be designed and customized according to the clients specific requirements and grid standards.",
      ],
      "Distribution Transformers": [
        "Jayco Electricals manufactures high-performance Distribution Transformers designed to efficiently deliver electrical power from transmission lines to residential, commercial, and small industrial users. Engineered for long life, high efficiency, and low maintenance, our transformers are compact in size and robust in construction.",
        "Built with top-grade CRGO cores and copper/aluminum windings, these transformers ensure minimal no-load and load losses. They are capable of withstanding fluctuating loads and harsh weather conditions and are available in pole-mounted or pad-mounted configurations as per site needs.",
        "Every unit adheres to IS 1180 (Part 1) and IEC 60076 standards and is approved by DISCOMs and electricity boards across India.",
      ],
      "Dry-Type Transformers": [
        "Jayco Electricals offers Dry Type Transformers that provide a safe, flame-resistant, and eco-friendly alternative to traditional oil-filled transformers. Designed in compliance with IS 1180 standards, these transformers are ideally suited for indoor installations and sensitive environments where fire safety and minimal environmental impact are critical.",
        "Manufactured using high-grade insulation materials such as vacuum pressure impregnated (VPI) windings or cast resin technology, our dry type units deliver reliable performance, low partial discharge, and high thermal endurance.",
        "With zero risk of oil leakage or fire hazards, these transformers are perfect for commercial buildings, data centers, metros, and hospitals.",
      ],
      "Furnace Transformers": [
        "Jayco Electricals manufactures high-performance Furnace Transformers designed specifically to supply power to electric arc furnaces (EAFs), ladle furnaces, and induction heating systems. These transformers are built to withstand high current levels, frequent short-circuits, and extreme thermal and mechanical stresses typically seen during intense furnace operations.",
        "Constructed with robust insulation systems, heavy-duty windings, and reinforced mechanical structures, these units are engineered for reliability and efficiency in demanding steel, metal, and alloy melting applications.",
        "Configurations can be customized based on furnace type, duty cycle, power factor requirements, and control systems.",
      ],
      "Auto Transformers": [
        "Jayco Electricals offers Auto Transformers designed for efficient and economical voltage regulation in both step-up and step-down applications. Unlike conventional two-winding transformers, auto transformers use a single winding structure, which reduces material usage, size, and losses — making them ideal for space-constrained environments and cost-sensitive projects.",
        "Available in oil-cooled and air-cooled configurations, these transformers are widely used in industrial installations, power plants, and transmission systems where compactness, reliability, and energy efficiency are essential.",
        "All units are manufactured in line with IS 2026 / IEC 60076 standards.",
      ],
      "Isolation Transformers": [
        "Jayco Electricals manufactures Isolation Transformers designed to provide complete electrical isolation between input and output circuits. These transformers enhance operational safety by preventing direct current flow, minimizing electrical noise, and protecting sensitive equipment from surges, spikes, and ground loop issues.",
        "Widely used in medical equipment, CNC machines, data centers, and telecom setups, our isolation transformers are built with high-grade core materials and advanced shielding techniques.",
        "They are available in both single-phase and three-phase configurations, with air or oil-cooled designs, tailored for precision and safety.",
      ],
      "Servo Voltage Stabilizers": [
        "Jayco Electricals manufactures high-performance Servo Voltage Stabilizers that deliver consistent, regulated voltage to protect appliances and industrial equipment from fluctuations. Using a servo-motor-based system, these stabilizers continuously monitor and adjust voltage output with high precision, ensuring optimal performance and extended equipment life.",
        "Available in both air-cooled and oil-cooled variants, our stabilizers are suitable for single-phase and three-phase applications across residential, commercial, and industrial sectors.",
        "Built in compliance with IS 9815 standards, these units are robust, efficient, and reliable under varying load and supply conditions.",
      ],
    };

    // Return formatted description if available, otherwise fallback to original
    return formattedDescriptions[productName] || [description];
  };

  const renderDetailedProductCard = (product, index) => (
    <div
      key={index}
      id={`product-${index}`}
      className="border mb-8 sm:mb-12 lg:mb-16 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border-gray-100 transition-all duration-300"
    >
      {/* Product Header - Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start lg:items-center ">
        <div className="order-2 lg:order-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-600 leading-tight">
              {product.product_name}
            </h3>
            {product.technical_specifications &&
              product.technical_specifications["Rated Capacity"] && (
                <span className="bg-white text-black outline font-medium px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm self-start sm:self-center text-nowrap">
                  {product.technical_specifications["Rated Capacity"]}
                </span>
              )}
          </div>
          <div className="text-md sm:text-lg lg:text-lg text-gray-600 leading-relaxed sm:mb-6">
            <div className="flex flex-col gap-3 text-sm text-justify">
              {formatDescription(product.description, product.product_name).map(
                (paragraph, idx) => (
                  <p key={idx} className="mb-2">
                    {paragraph}
                  </p>
                )
              )}
            </div>
          </div>

          {/* Technical Specifications Button */}
          {product.technical_specifications && (
            <button
              onClick={() => openSpecsModal(product)}
              className="inline-flex items-center gap-2 outline text-black bg-white hover:bg-red-600 hover:text-white px-4 sm:px-6 py-2 sm:py-3 font-medium text-xs my-4 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 rounded-xl"
            >
              <FileText className="h-4 w-4" />
              <span className="">Technical Specifications</span>
            </button>
          )}
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 md:bg-white">
            <img
              src={product.image}
              alt={product.product_name}
              className="w-full max-w-md mx-auto max-h-[30rem] p-3 object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Product Details - Responsive Layout */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8 mt-10">
        {/* Key Features - Left */}
        {product.key_features && (
          <div className="flex-1 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 justify-start">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-black">
                Key Features
              </h4>
            </div>
            <ul className="space-y-2 sm:space-y-3 w-full">
              {product.key_features.slice(0, 4).map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600"
                >
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed text-left">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Advantages - Left Aligned */}
        {product.advantages && (
          <div className="flex-1 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 justify-start">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-black">
                Advantages
              </h4>
            </div>
            <ul className="space-y-2 sm:space-y-3 w-full">
              {product.advantages.slice(0, 4).map((advantage, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600"
                >
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed text-left">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Applications - Left Aligned */}
        {product.applications && (
          <div className="flex-1 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 justify-start">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-black">
                Applications
              </h4>
            </div>
            <ul className="space-y-2 sm:space-y-3 w-full">
              {product.applications.slice(0, 4).map((application, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600"
                >
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed text-left">
                    {application}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Container with responsive padding */}
      <div className="px-4 sm:px-6 lg:px-8 pt-0 pb-6 sm:pb-8 lg:pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Products List */}
          {productsData.map((product, index) =>
            renderDetailedProductCard(product, index)
          )}

          {/* Technical Specifications Modal */}
          {showSpecsModal && selectedProduct && (
            <div
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-[99993]"
              onClick={handleBackdropClick}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <div
                className="bg-white rounded-lg sm:rounded-2xl w-full max-w-md sm:max-w-xl lg:max-w-3xl max-h-[85vh] sm:max-h-[80vh] overflow-hidden shadow-2xl flex flex-col relative top-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header - Sticky */}
                {/* <div className="flex items-center justify-end p-4 sm:p-6 pb-3 border-b border-gray-200 bg-white sticky top-0 z-10 rounded-t-lg sm:rounded-t-2xl">
                  <button
                    onClick={() => setShowSpecsModal(false)}
                    className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 flex-shrink-0"
                  >
                    <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                  </button>
                </div> */}

                {/* Modal Content - Scrollable */}
                <div className="overflow-y-auto flex-1 p-4 sm:p-6 pt-3">
                  <div className="overflow-x-auto shadow-inner rounded-md sm:rounded-lg">
                    <table className="w-full max-w-2xl mx-auto border-collapse bg-white text-xs sm:text-sm">
                      <thead className="sticky top-0">
                        <tr className="bg-gradient-to-r from-red-50 to-red-100">
                          <th className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-3 text-center font-semibold text-red-700">
                            Parameter
                          </th>
                          <th className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-3 text-center font-semibold text-red-700">
                            Specification
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(
                          selectedProduct.technical_specifications
                        ).map(([key, value], idx) => (
                          <tr
                            key={idx}
                            className={`transition-colors hover:bg-red-25 ${
                              idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                            }`}
                          >
                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-3 font-medium text-gray-800 text-xs sm:text-sm text-center">
                              {key}
                            </td>
                            <td className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-3 text-gray-700 text-xs sm:text-sm text-center">
                              {String(value)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="pt-2 border-t border-gray-200 text-center sm:text-right m-2">
                  <button
                    onClick={() => setShowSpecsModal(false)}
                    className="w-auto bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-md font-medium text-xs transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCatalog;
