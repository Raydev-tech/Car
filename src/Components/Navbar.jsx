import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md py-3 z-50" data-aos="fade-down">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="border-2 border-blue-600 rounded-full p-2">
            <Search className="h-6 w-6 text-blue-600" />
          </div>
          <span className="font-bold text-xl text-blue-600">CarFinder</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all">
            Home
          </a>
          <a href="/cars" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all">
            Cars
          </a>
          <a href="/sell" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all">
            Sell
          </a>
          <a href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all">
            About
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden border-2 border-blue-600 rounded-full p-2 bg-blue-100 text-blue-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4 absolute top-16 left-0 right-0">
          <nav className="container mx-auto flex flex-col items-center gap-4">
            <a href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all">
              Home
            </a>
            <a href="/cars" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all">
              Cars
            </a>
            <a href="/sell" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all">
              Sell
            </a>
            <a href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all">
              About
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
