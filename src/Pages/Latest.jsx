import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Latest = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cars = [
    { name: "Honda Civic", price: "$22,550", image: "https://i.pinimg.com/736x/14/9e/79/149e79ae64b8bd6969a49c9da79f1439.jpg", tag: "New" },
    { name: "Toyota Camry", price: "$25,945", image: "https://i.pinimg.com/236x/60/bb/f8/60bbf801db996a5f67f712e79c9e47c2.jpg", tag: "New" },
    { name: "Ford Mustang", price: "$27,770", image: "https://i.pinimg.com/236x/e1/1a/f9/e11af996ab466cd65291d0946ec42939.jpg", tag: "New" },
    { name: "Chevrolet Malibu", price: "$23,400", image: "https://i.pinimg.com/236x/51/0b/c3/510bc370c135a4bc618d29d2b28d18c4.jpg", tag: "New" },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h2 className="text-xl font-semibold mb-6 text-center" data-aos="fade-up">
        Latest Cars
      </h2>

      {/* Car Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            {/* Image Section */}
            <div className="relative h-40 bg-gray-100">
              <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
              <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                {car.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-lg">{car.name}</h3>
              <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
                <span>2023</span>
                <span>•</span>
                <span>Automatic</span>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 pt-0 flex justify-between items-center">
              <span className="font-bold text-lg">{car.price}</span>
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Latest;
