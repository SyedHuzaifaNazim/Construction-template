// src/components/CTA.jsx
import React from 'react';

const CTA = () => {
  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Construction Project?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact us today for a free consultation and quote. Let's bring your vision to life together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-orange-500 text-white px-8 py-3 rounded font-medium hover:bg-orange-600 transition">
            Get a Free Quote
          </button>
          <button className="border border-white px-8 py-3 rounded font-medium hover:bg-white hover:text-gray-900 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;