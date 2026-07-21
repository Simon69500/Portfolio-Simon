import React from 'react';
import { timeLineData } from '../../data/profileData';

/**
 * 
 * Carte Bento Grid C : Présentation de Simon BADIN
 */

const Parcours = () => {

  // On inverse le tableau pour avoir le poste le plus récent en haut 
  const ascendingParcours = [...timeLineData].reverse();

  return (
    <section
      aria-labelledby='timeline-heading'
      className='h-full p-6 rounded-3xl bg-bento-light dark:bg-bento-dark shadow-sm transition-all duration-300 hover:scale-[1.02] border border-transparent hover:border-accent-primary'
    >
      <h2 id='timeline-heading' className='text-xl font-bold text-typography-light dark:text-typography-dark mb-6'>
        Mon Parcours
      </h2>

      {/* Conteneur principal de la frise */}
      <div className='relative w-full pb-4'>
        
        {/* Ligne Vertical (Gauche sur Mobile, Centre sur Desktop) */}
        <div className='absolute top-0 bottom-0 w-0.5 bg-gray-700 dark:bg-gray-200 left-6 md:left-1/2 md:-translate-x-1/2'></div>

        {/* Pointe de la flèche en haut de la ligne */}
        <div className="absolute top-0 left-6 md:left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-transparent border-b-accent-primary"></div>

        {/* Génération des noeuds */}
        {ascendingParcours.map((item, index) => {

          // Détermine si le point est à gauche ou à droite (uniquement sur Desktop)
          const isLeft = index % 2 === 0;

          return (
            <div key={item.id} className='relative flex items-center justify-between w-full mb-8 last:mb-0'>
              
              {/* Le Nœud (Cercle central/gauche) */}
              <div className='absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-primary dark:bg-accent-secondary rounded-full ring-4 ring-white dark:ring-[#1E293B] z-10'></div>

              {/* Bloc de contenu (Quinconce Desktop, Aligné gauche Mobile) */}
              <div className={`w-full flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''}`}>

                {/* Espace vide pour forcer le contenu de l'autre côté sur Desktop */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Le Texte */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                  <h3 className="text-md font-semibold text-typography-light dark:text-typography-dark">
                    {item.title}
                  </h3>
                  <time className="block text-sm font-medium text-accent-primary mt-1">
                    {item.date}
                  </time>
                </div>

              </div>            
            </div>
          );
        })}      
      </div>
    </section>
  );
};

export default Parcours;