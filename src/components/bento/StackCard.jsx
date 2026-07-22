import React from 'react';
import TechBadge from '../ui/TechBadge';
import { techData } from '../../data/techData';

/**
 * Carte Bento Grid B : Présentation de la stack technique par catégorie
 * CaC Réf: Section 2.1 (Tuile B) & Section 3.2 (Ordonnancement order-2, largeur 4 cols)
 */
const StackCard = () => {
  return (
    <article
      className="h-full flex flex-col gap-6 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 bg-bento-light dark:bg-bento-dark md:col-span-4 order-2 transition-all duration-300 hover:scale-105 hover:border-accent-primary dark:hover:border-accent-primary"
    >
      {/* 
        Accessibilité (WCAG) : Balise sémantique h2 pour hiérarchiser la tuile.
      */}
      <h2 className="text-xl font-bold text-typography-light dark:text-typography-dark">
        Stack Technique
      </h2>

      {/* Conteneur principal des différentes catégories */}
      <div className="flex flex-col gap-5 mt-auto">
        
        {/* Parcours dynamique des clés de ton objet techData */}
        {Object.entries(techData).map(([categoryName, techList]) => (
          
          <section key={categoryName} className="flex flex-col gap-3">
            {/* 
              Sous-titre de catégorie (h3 pour la logique sémantique).
              Utilisation de la couleur 'muted' de ton tailwind.config.js pour le Dark mode
            */}
            <h3 className="text-sm font-semibold uppercase tracking-wider text-typography-light/70 dark:text-typography-dark-muted">
              {categoryName}
            </h3>
            
            {/* Grille Flexbox pour les pastilles de cette catégorie */}
            <div className="flex flex-wrap gap-3">
              {techList.map((tech) => (
                <TechBadge
                  key={tech.id}
                  name={tech.name}
                  logoUrl={tech.logoUrl}
                  iconBehavior={tech.iconBehavior}
                />  
              ))}
            </div>
          </section>

        ))}

      </div>
    </article>
  );
};

export default StackCard;