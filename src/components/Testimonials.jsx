// src/components/Testimonials.jsx
import React from 'react';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Robert Johnson',
      role: 'Homeowner',
      content: 'Hammer Construction built our dream home exactly as we envisioned. Their attention to detail and professionalism was outstanding throughout the entire process.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'Business Owner',
      content: 'We hired Hammer for our office renovation, and they delivered beyond our expectations. The project was completed on time and within budget.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Property Developer',
      content: 'I\'ve worked with many construction companies, but Hammer stands out for their quality work and reliable service. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 4
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-orange-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    fill={i < testimonial.rating ? "currentColor" : "none"} 
                    size={20} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;