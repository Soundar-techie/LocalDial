import React, { useState } from 'react';
import { Menu, X, User, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">LocalDial</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Categories
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              List Your Business
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              <User className="w-5 h-5 mr-1" />
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center">
              <PhoneCall className="w-4 h-4 mr-2" />
              Get App
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Home
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Categories
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              List Your Business
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              About
            </a>
            <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Sign In
            </button>
            <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Get App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;