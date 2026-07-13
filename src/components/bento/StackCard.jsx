import React from 'react';
import TechBadge from '../ui/TechBadge';
import { techData } from '../../data/techData';

/**
 * 
 * Carte Bento Grid B : Présentation de Simon BADIN
 */

const StackCard = () => {
  return (
    <article
      className="flex flex-col gap-4 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 bg-bento-light dark:bg-bento-dark md:col-span-4 order-2 transition-all duration-300 hover:scale-105 hover:border-accent-primary dark:hover:border-accent-primary"
    >
      {/* 
        Accessibilité (WCAG) : Balise sémantique h2 pour hiérarchiser l'information.
        Utilisation des variables de texte de tailwind.config.js
      */}
      <h2 className='text-xl font-bold text-typography-light dark:text-typography-dark-DEFAULT'>
        Stack Technique
      </h2>

      {/* 
        Conteneur Flexbox pour un retour à la ligne naturel des pastilles 
      */}
      <div className='flex flex-wrap gap-3 mt-auto'>
        {techData.map((tech, index) => (
          <TechBadge
            key={index}
            name={tech.name}
            logoUrl={tech.logoUrl}
          />  
        ))}
      </div>    

    </article>
  );
};

export default StackCard;

