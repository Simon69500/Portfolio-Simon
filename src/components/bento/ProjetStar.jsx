import React from 'react';
import TechBadge from '../ui/TechBadge';
import { techData } from '../../data/techData';
import Button from '../ui/Button';

/**
 * 
 * Carte Bento Grid C : Présentation de mon projet phare qui est Estimmo-savoies
 */

const ProjetStar = ({project}) => {

  //Fonction utilitaire pour récuperer le logo depuis techData
  const getTechDetails = (techName) => {
    const found = techData.find(t => t.name.toLowerCase() === techName.toLowerCase());
    return found ? found.logoUrl : null;
  };

  // Fonction de déclenchement (Placeholder pour la future Tâche 2.4 - Expansion)
  const handleExpand = () => {
    console.log(`Déclenchement de l'expansion pour : ${projetct.titre}`);
    // Ici viendra la modification de l'état FSM (TRANSITIONING)
  };

  return (
    <article
      // [CaC Section 3.2] : md:col-span-8 (Desktop) et order-3 (Mobile)
      // [CaC Section 2.2 & 4.1] : Variables de thème et hover:border-accent-primary
      // [CaC Section 2.4] : md:cursor-pointer pour Desktop, cursor-default pour Mobile
      className='group relative flex flex-col md:flex-row overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-800 bg-bento-light dark:bg-bento-dark md:col-span-8 order-3 transition-colors duration-300 hover:border-accent-primary dark:hover:border-accent-primary md:cursor-pointer cursor-default'
      onClick={() => {
      if (window.innerWidth >= 768) handleExpand(); 
      }}
    >

      {/* ZONE TEXTUELLE (Gauche sur Desktop, Haut sur Mobile) */}
      <div className='flex-1 p-6 md:p-8 flex flex-col justify-between z-10'>

        <div>
          <h2 className='text-2xl md:text-3xl font-bold text-typography-light dark:text-typography-dark-muted mb-6 line-clamp-3'>
            {project.titre}
          </h2>

          {/* [CaC Section 2.3] Affichage de l'accroche courte (COLLAPSED state) */}
          <p className='text-typography-light dark:text-typography-dark-muted mb-6 line-clamp-3'>
            {project.description}
          </p>
        </div>

        {/* Badges Techniques */}
        <div className='flex flex-wrap gap-2 mb-6 md:mb-0'>
          {project.technologies.map((tech, index) => {
            const logo = getTechDetails(tech)
            return logo ? (
              <TechBadge key={index} name={tech} logoUrl={logo} />
            ) : (
              <span key={index} className='px-3 py-1 text-xs font-medium rounded-full bg-gray-200 dark:bg-gray-700 text-typography-light dark:text-typography-dark-DEFAULT'>
                {tech}
              </span>
            );
          })}
        </div>

        {/* 
          [CaC Section 2.4 - Sécurité UX] 
          Composant d'action dédié pour Mobile. 
          Il est visible partout, mais c'est le SEUL moyen de cliquer sur Mobile.
        */}
        <Button
          onClick={(e) => {
            e.stopPropagation();
            handleExpand();
          }}
          variant='primary'
          className='w-full gap-2'
          aria-laber={`Voir les détails du projet ${project.titre}`}
        >
          Voir le projet
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Button>
      </div>

      {/* ZONE MÉDIA (Droite sur Desktop, Bas sur Mobile) */}
      <div className="w-full md:w-5/12 h-48 md:h-auto relative overflow-hidden bg-gray-100 dark:bg-gray-900 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-800">
        <img 
          src={project.coverImage} 
          alt={`Aperçu de l'interface de ${project.titre}`} 
          loading="lazy"
          // [Section 2.2] Micro-interaction : scale-105 déclenchée par le 'group-hover' du conteneur parent
          className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

    </article>
  )
}