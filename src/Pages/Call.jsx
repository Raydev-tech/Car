import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCar, FaDollarSign } from "react-icons/fa";

const Call = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Buy CTA */}
        <div className="bg-blue-100 rounded-xl p-6 flex items-center justify-between" data-aos="fade-right">
          <div>
            <h3 className="font-semibold text-lg mb-2">Are You Looking For A Car?</h3>
            <p className="text-sm text-gray-700 mb-4">Find your perfect match from thousands of listings</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
              Search Cars
            </button>
          </div>
          <div className="hidden md:block">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <FaCar className="h-12 w-12 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Sell CTA */}
        <div className="bg-pink-100 rounded-xl p-6 flex items-center justify-between" data-aos="fade-left">
          <div>
            <h3 className="font-semibold text-lg mb-2">Do You Want to Sell A Car?</h3>
            <p className="text-sm text-gray-700 mb-4">List your car and reach thousands of buyers</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition">
              List Your Car
            </button>
          </div>
          <div className="hidden md:block">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <FaDollarSign className="h-12 w-12 text-purple-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Call;
