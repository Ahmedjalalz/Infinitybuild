import React from 'react';
import { FiGlobe, FiSmartphone, FiShoppingCart, FiFeather } from 'react-icons/fi';

export const serviceData = [
  {
    icon: FiGlobe,
    title: "Website Development",
    description: "Custom websites built with modern technologies. Responsive, fast, and SEO-optimized."
  },
  {
    icon: FiSmartphone,
    title: "Web Applications",
    description: "Powerful web apps with rich functionality. From dashboards to complex platforms."
  },
  {
    icon: FiShoppingCart,
    title: "E-Commerce Solutions",
    description: "Online stores that convert. Seamless checkout, inventory management, and more."
  },
  {
    icon: FiFeather,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user experience and boost engagement."
  }
];

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-blue-900/20 border border-gray-100 shadow-sm hover:bg-white hover:border-[var(--primary-color)]/40 hover:shadow-md transition-all duration-300">
      <div className="flex items-start gap-6">
        {/* Icon Pill */}
        <div className="flex-shrink-0 w-14 h-14 bg-[var(--primary-color)]/10 rounded-full flex items-center justify-center">
          <Icon className="w-7 h-7 text-[var(--primary-color)]" />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;