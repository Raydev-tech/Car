import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Most = () => {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cars = [
    {
      name: "Tesla Model S",
      price: "$89,990",
      image: "https://i.pinimg.com/236x/9e/a1/f9/9ea1f9be74fd50cd8dc83c41dfe4d87f.jpg",
      tag: "Electric",
    },
    {
      name: "BMW X5",
      price: "$63,900",
      image: "https://i.pinimg.com/236x/f0/65/e8/f065e8734823ee18809c7b1de2f3ea4a.jpg",
      tag: "SUV",
    },
    {
      name: "Mercedes C-Class",
      price: "$43,550",
      image: "https://i.pinimg.com/236x/52/0d/b4/520db4a7e25e34b1e9739d4abe8eab59.jpg",
      tag: "Sedan",
    },
    {
      name: "Audi Q7",
      price: "$57,500",
      image: "https://i.pinimg.com/236x/f2/8a/33/f28a339efa71a2396f98e362653199d2.jpg",
      tag: "SUV",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Title and Filter Buttons */}
      <div className="flex justify-between items-center mb-6" data-aos="fade-up">
        <h2 className="text-xl font-semibold">The Most Searched Cars</h2>
        <div className="flex gap-2">
          {["All", "New", "Used"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 border rounded-full transition ${
                filter === category ? "bg-blue-600 text-white" : "bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Car Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            {/* Car Image */}
            <div className="relative h-40 bg-gray-100">
              <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                {car.tag}
              </span>
            </div>

            {/* Car Details */}
            <div className="p-4">
              <h3 className="font-semibold">{car.name}</h3>
              <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
                <span>2023</span>
                <span>•</span>
                <span>Automatic</span>
              </div>
            </div>

            {/* Footer with Price and Details Button */}
            <div className="p-4 pt-0 flex justify-between items-center">
              <span className="font-bold text-lg">{car.price}</span>
              <button className="px-3 py-2 border rounded-full text-sm transition hover:bg-blue-600 hover:text-white">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Most;
