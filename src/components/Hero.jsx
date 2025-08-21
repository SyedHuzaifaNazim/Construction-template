// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80" 
        alt="Construction Site" 
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="container mx-auto px-4 py-32 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building Your Vision Into Reality
          </h1>
          <p className="text-xl mb-8 opacity-90">
            We provide high-quality construction services with over 15 years of experience in residential and commercial projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 text-white px-8 py-4 rounded font-medium hover:bg-orange-600 transition">
              Our Projects
            </button>
            <button className="border border-white px-8 py-4 rounded font-medium hover:bg-white hover:text-gray-900 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;