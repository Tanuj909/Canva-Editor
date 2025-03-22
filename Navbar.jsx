import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onDownload }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-purple-900 text-white p-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className=".navbar">
          <span className="text-xl font-bold tracking-tight">Editor</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#contact"
            className="text-white hover:text-blue-200 transition duration-300 ease-in-out"
          >
            Contact
          </a>
          <button
            onClick={onDownload}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Download Design
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg text-white hover:bg-purple-800 focus:outline-none transition duration-300"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-3 bg-purple-800 rounded-lg p-4">
          <a
            href="#contact"
            className="block px-4 py-2 text-white hover:bg-purple-700 rounded-md transition duration-300"
          >
            Contact
          </a>
          <button
            onClick={onDownload}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Download Design
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;