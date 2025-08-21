// src/components/Services.jsx
import React from 'react';
import { FiHome  } from 'react-icons/fi';
// import { FiBuilding } from 'react-icons/fi';
import { FiTool} from 'react-icons/fi';
import {  FiSettings } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiHome size={40} className="text-orange-500" />,
      title: 'Residential Construction',
      description: 'We build dream homes with attention to detail and quality craftsmanship.'
    },
    // {
    //   icon: <FiBuilding size={40} className="text-orange-500" />,
    //   title: 'Commercial Projects',
    //   description: 'Office buildings, retail spaces, and other commercial constructions.'
    // },
    {
      icon: <FiTool size={40} className="text-orange-500" />,
      title: 'Renovation Services',
      description: 'Transforming existing spaces into something new and beautiful.'
    },
    {
      icon: <FiSettings size={40} className="text-orange-500" />,
      title: 'Project Management',
      description: 'Expert oversight of your construction project from start to finish.'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of construction services to meet your needs, from residential to commercial projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;