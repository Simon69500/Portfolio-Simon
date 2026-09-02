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
      className="h-full flex flex-col gap-6 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 bg-bento-light dark:bg-bento-dark md:col-span-4 order-2 transition-all duration-300 hover:scale-[1.02] hover:border-accent-primary dark:hover:border-accent-primary"
    >
      {/* 
        Accessibilité (WCAG) : Balise sémantique h2 pour hiérarchiser la tuile.
      */}
      <h2 className="text-xl font-bold text-typography-light dark:text-typography-dark">
        Stack Technique
      </h2>

      {/* Conteneur principal des différentes catégories */}
      <div className="flex flex-col gap-5 mt-auto">
        
        {/* Parcours dynamique des clés de ton objet techData.
            Object.entries(obj) transforme un objet en tableau de paires [clé, valeur]
            (ex: { Frontend: [...] } devient [['Frontend', [...]]]). .map() reçoit donc à
            chaque itération un tableau à 2 éléments, qu'on déstructure directement dans les
            paramètres de la fonction fléchée : ([categoryName, techList]) => équivaut à
            écrire (paire) => { const categoryName = paire[0]; const techList = paire[1]; }
            en plus court. C'est ce qui permet de générer une section par catégorie sans
            connaître à l'avance la liste des catégories (Frontend, Backend, ...). */}
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