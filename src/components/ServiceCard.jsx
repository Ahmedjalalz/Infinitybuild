import React from 'react';
import { FiGlobe, FiSmartphone, FiShoppingCart, FiFeather } from 'react-icons/fi';

export const serviceData = [
  {
    icon: FiGlobe,
    title: "Développement de sites web",
    description: "Des sites web sur mesure conçus avec des technologies modernes. Responsifs, rapides et optimisés pour le SEO."
  },
  {
    icon: FiSmartphone,
    title: "Applications web",
    description: "Des applications web performantes avec des fonctionnalités avancées, des tableaux de bord aux plateformes complexes."
  },
  {
    icon: FiShoppingCart,
    title: "Solutions e-commerce",
    description: "Des boutiques en ligne conçues pour convertir. Paiement fluide, gestion des stocks et bien plus."
  },
  {
    icon: FiFeather,
    title: "Design UI/UX",
    description: "Des interfaces élégantes et intuitives qui améliorent l’expérience utilisateur et renforcent l’engagement."
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
