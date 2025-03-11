import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "John Doe",
    review:
      "CarFinder made buying my dream car effortless! The process was smooth, and I got a great deal on my Tesla Model S.",
    car: "Tesla Model S",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Sarah Smith",
    review:
      "I sold my car in just three days! The platform is user-friendly, and the customer service was excellent.",
    car: "Ford Mustang",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Michael Brown",
    review:
      "I found the perfect SUV for my family. The detailed filters helped me choose the best option within my budget.",
    car: "BMW X5",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Emily Davis",
    review:
      "Amazing experience! CarFinder helped me get my first car hassle-free. Highly recommended!",
    car: "Toyota Camry",
    image: "https://i.pravatar.cc/100?img=4",
  },
];

const TestimonialPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-8" data-aos="fade-up">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg">{testimonial.name}</h3>
            <p className="text-blue-600 text-sm mb-2">{testimonial.car}</p>
            <p className="text-gray-600 text-sm">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialPage;
