import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Call from "./Call";
import Most from "./Most";
import Why from "./Why";
import Latest from "./Latest";
import TestimonialPage from "./testimonials";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <section className="container mx-auto px-4 py-8 mt-28">
        {/* Title */}
        <div className="text-center mb-6" data-aos="fade-up">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-600">
            Find Your Dream Car
          </h1>
          <p className="text-gray-600 text-lg">
            Discover the best deals on top-quality vehicles.
          </p>
        </div>

        {/* Fullscreen Car Image */}
        <div
          className="relative w-full h-[80vh] flex justify-center items-center"
          data-aos="zoom-in"
        >
          <img
            src="https://i.pinimg.com/736x/5e/62/1b/5e621b67dac9b07531a63e815cf3f0cb.jpg"
            alt="Tesla Model S"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </section>
    </main>
    <Call />
    <Most />
    <Why />
    <Latest />
    <TestimonialPage />
    </>
  );
};

export default HomePage;
