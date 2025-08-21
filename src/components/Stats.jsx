// src/components/Stats.jsx
import React from 'react';
import { FiCheckCircle, FiUsers, FiAward, FiSmile } from 'react-icons/fi';

const Stats = () => {
  const stats = [
    {
      icon: <FiCheckCircle size={40} className="text-orange-500" />,
      value: '250+',
      label: 'Projects Completed'
    },
    {
      icon: <FiUsers size={40} className="text-orange-500" />,
      value: '50+',
      label: 'Expert Workers'
    },
    {
      icon: <FiAward size={40} className="text-orange-500" />,
      value: '12+',
      label: 'Awards Won'
    },
    {
      icon: <FiSmile size={40} className="text-orange-500" />,
      value: '98%',
      label: 'Client Satisfaction'
    }
  ];

  return (
    <div className="py-16 bg-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;