import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">LocalDial</h3>
            <p className="text-sm">
              Find the best local businesses and services in your area. Connect with trusted providers and get the service you need.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">List Your Business</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download App</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Restaurants</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Auto Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Real Estate</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} LocalDial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;