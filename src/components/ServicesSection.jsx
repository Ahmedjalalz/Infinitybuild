import React from 'react';
import ServiceCard, { serviceData } from './ServiceCard';
import Link from 'next/link';

const ServicesSection = () => {
  return (
    <section className="py-24 mx-6 bg-[var(--background)]">

      {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our <span className='text-[var(--primary-color)]'> Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your business needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>


        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link href={"./get-quote"}>
          <button className="bg-[var(--primary-color)] cursor-pointer hover:opacity-90 text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition">
            Start Your Project →
          </button>
          </Link>
        </div>





    </section>
  );
};

export default ServicesSection;