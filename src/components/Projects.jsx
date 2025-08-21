// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Modern Office Building',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Luxury Residential Complex',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Shopping Mall Renovation',
      category: 'Renovation',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Industrial Warehouse',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Modern Apartment Complex',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Corporate Headquarters',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-375260b97c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of completed projects that showcase our expertise and commitment to quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-orange-400 text-sm font-medium">{project.category}</span>
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <button className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border border-orange-500 text-orange-500 px-8 py-3 rounded font-medium hover:bg-orange-500 hover:text-white transition">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;