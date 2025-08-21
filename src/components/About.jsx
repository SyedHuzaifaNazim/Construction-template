// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Construction Team" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Company</h2>
            <p className="text-gray-600 mb-4">
              Elever Construction has been a trusted name in the construction industry for over 15 years. 
              We specialize in both residential and commercial projects, delivering quality results on time and within budget.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experienced professionals is committed to excellence in every project we undertake. 
              We use only the highest quality materials and the latest construction techniques to ensure your complete satisfaction.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-gray-900 text-lg">15+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">250+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">50+</h4>
                <p className="text-gray-600">Expert Workers</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">12+</h4>
                <p className="text-gray-600">Awards Won</p>
              </div>
            </div>
            <button className="bg-orange-500 text-white px-6 py-3 rounded font-medium hover:bg-orange-600 transition">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;