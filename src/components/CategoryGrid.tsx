import React from 'react';
import { 
  Utensils, 
  Car, 
  Building2, 
  Stethoscope, 
  GraduationCap, 
  Wrench,
  ShoppingBag,
  Bed,
  Plane,
  Scissors,
  Shirt,
  Palette
} from 'lucide-react';

const categories = [
  { icon: <Utensils className="w-8 h-8" />, name: 'Restaurants' },
  { icon: <Car className="w-8 h-8" />, name: 'Auto Services' },
  { icon: <Building2 className="w-8 h-8" />, name: 'Real Estate' },
  { icon: <Stethoscope className="w-8 h-8" />, name: 'Doctors' },
  { icon: <GraduationCap className="w-8 h-8" />, name: 'Education' },
  { icon: <Wrench className="w-8 h-8" />, name: 'Repairs' },
  { icon: <ShoppingBag className="w-8 h-8" />, name: 'Shopping' },
  { icon: <Bed className="w-8 h-8" />, name: 'Hotels' },
  { icon: <Plane className="w-8 h-8" />, name: 'Travel' },
  { icon: <Scissors className="w-8 h-8" />, name: 'Salon' },
  { icon: <Shirt className="w-8 h-8" />, name: 'Fashion' },
  { icon: <Palette className="w-8 h-8" />, name: 'Art & Design' }
];

const CategoryGrid = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer group"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <span className="text-gray-700 text-center font-medium">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;