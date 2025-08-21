// src/components/Header.jsx
import React, { useState } from 'react';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    'Home', 'Services', 'About', 'Projects', 'Testimonials', 'Contact'
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-orange-500 text-white font-bold text-2xl px-3 py-1 mr-2">E</div>
            <span className="text-xl font-bold text-gray-900">Hammer Construction</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a key={index} href="#" className="font-medium text-gray-700 hover:text-orange-500 transition">
                {item}
              </a>
            ))}
          </nav>
          
          {/* Contact Info */}
          <div className="hidden lg:flex items-center">
            <div className="bg-orange-100 p-2 rounded-full mr-3">
              <FiPhone className="text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Call Now</p>
              <p className="font-bold text-gray-900">+1 (555) 123-4567</p>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t mt-4 py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <a key={index} href="#" className="px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                  {item}
                </a>
              ))}
              <div className="px-4 py-2 flex items-center">
                <div className="bg-orange-100 p-2 rounded-full mr-3">
                  <FiPhone className="text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Now</p>
                  <p className="font-bold text-gray-900">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;