// src/components/Footer.jsx
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-orange-500 text-white font-bold text-2xl px-3 py-1 mr-2">H</div>
              <span className="text-xl font-bold">Hammer Construction</span>
            </div>
            <p className="text-gray-400 mb-4">
              Building excellence since 2008. We provide high-quality construction services for residential and commercial projects.
            </p>
            <div className="flex space-x-4">
              <FiFacebook size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <FiTwitter size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <FiInstagram size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <FiLinkedin size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Projects', 'Testimonials', 'Contact'].map((item, i) => (
                <li key={i} className="text-gray-400 hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {['Residential Construction', 'Commercial Projects', 'Renovation Services', 'Project Management', 'Architectural Design', 'Interior Design'].map((item, i) => (
                <li key={i} className="text-gray-400 hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <FiMapPin className="mr-3" />
                <span>123 Construction Ave, Building City, BC 12345</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3" />
                <span>info@hammerconstruction.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© 2023 Hammer Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;