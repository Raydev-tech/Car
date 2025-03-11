import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaShieldAlt, FaClock, FaThumbsUp, FaAward } from "react-icons/fa";

const Why = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: <FaShieldAlt className="h-10 w-10 text-blue-600" />,
      title: "Trusted Dealers Only",
      description: "All our listings come from verified dealers",
    },
    {
      icon: <FaClock className="h-10 w-10 text-blue-600" />,
      title: "Fast & Easy Buying",
      description: "Quick and hassle-free car buying process",
    },
    {
      icon: <FaThumbsUp className="h-10 w-10 text-blue-600" />,
      title: "Excellent Service",
      description: "Top-rated customer service and support",
    },
    {
      icon: <FaAward className="h-10 w-10 text-blue-600" />,
      title: "Largest Car Selection",
      description: "Thousands of cars to choose from",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 rounded-xl my-8">
      {/* Heading */}
      <h2 className="text-xl font-semibold mb-8 text-center" data-aos="fade-up">
        Why Choose Us?
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            {item.icon}
            <h3 className="font-medium mt-3 mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;
