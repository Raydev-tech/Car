import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCar, FaTruck, FaMotorcycle, FaBus, FaShip } from "react-icons/fa";
import { MdDirectionsCar } from "react-icons/md";
import { GiSuv } from "react-icons/gi";

const Type = () => {
  const [activeTab, setActiveTab] = useState("sedan");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h2 className="text-xl font-semibold mb-6 text-center" data-aos="fade-up">
        Browse by Type
      </h2>

      {/* Tabs List */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center" data-aos="fade-up" data-aos-delay="200">
        {[
          { id: "sedan", label: "Sedan", icon: <MdDirectionsCar className="h-6 w-6" /> },
          { id: "suv", label: "SUV", icon: <GiSuv className="h-6 w-6" /> },
          { id: "truck", label: "Truck", icon: <FaTruck className="h-6 w-6" /> },
          { id: "bike", label: "Bike", icon: <FaMotorcycle className="h-6 w-6" /> },
          { id: "bus", label: "Bus", icon: <FaBus className="h-6 w-6" /> },
          { id: "boat", label: "Boat", icon: <FaShip className="h-6 w-6" /> },
        ].map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-2 py-3 rounded-lg transition-all ${
              activeTab === tab.id ? "bg-blue-100 text-blue-600" : "bg-gray-100"
            }`}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            {tab.icon}
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Type;
