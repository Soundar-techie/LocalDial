import React, { useState } from 'react';
import { Search, MapPin, Phone, Star, ChevronRight, Menu } from 'lucide-react';
import Navbar from './components/Navbar';
import CategoryGrid from './components/CategoryGrid';
import PopularServices from './components/PopularServices';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('New York');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 h-[500px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Find Local Businesses & Services
          </h1>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-2 rounded-lg shadow-lg flex items-center gap-2">
              <div className="flex-1 flex items-center border-r border-gray-200 px-4">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search for services, businesses..."
                  className="w-full outline-none text-gray-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center px-4">
                <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Location"
                  className="outline-none text-gray-700"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <CategoryGrid />

      {/* Popular Services */}
      <PopularServices />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;