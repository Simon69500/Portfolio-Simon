import React, {useRef} from 'react';
import TechBadge from '../ui/TechBadge';
import Button from '../ui/Button';
import { techData } from '../../data/techData';
import { useCardExpansion } from '../../hook/useCardExpansion';
import ProjetDetails from './ProjetDetails';


/**
 * 
 * Carte Bento Grid C : Présentation de mon projet phare qui est Estimmo-savoies
 */

const ProjetStar = ({project, expansionProjetId, setExpansionProjetId}) => {

  // 1. Création de la référence pour capturer les dimension du DOM
  const cardRef = useRef(null);

  // 2. Inialisation du Hook Personnalisé (FSM)
  const {status, coords, expand, collapse} = useCardExpansion(
    project.id,
    expansionProjetId,
    setExpansionProjetId,
    cardRef
  );

  //Fonction utilitaire pour récuperer le logo depuis techData
  const getTechDetails = (techName) => {
    const found = techData.find(t => t.name.toLowerCase() === techName.toLowerCase());
    return found ? found.logoUrl : null;
  };

  // 3. Calcul Dynamique des styles inline (Transition spatiale)
  // En mode CALLAPSED, on laisse le parent gérer les dimensions
  // En TRANSITIONING / REVERTING, on applique les coordonnées initales capturées
  // En EXPANDED, on force le plein écran
  const dynamicStyles = status === 'TRANSITIONING' || status === 'REVERTING'
  ? {
    position: 'fixed',
    top: coords?.top,
    left: coords?.left,
    width: coords?.width,
    height: coords?.height,
    zIndex: 50
  }
  : status === 'EXPANDED'
  ? {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 50,
    borderRadius: 0
  }
  : {}; // COLLAPSED: aucun style inline, Tailwind gére tout

  // 4. Calcul dynamique des classes Tailwind
  const baseClasses = "group flex flex-col md:flex-row overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-800 bg-bento-light dark:bg-bento-dark transition-all duration-500 ease-in-out";
  const hoverClasses = status === 'COLLAPSED' ? "hover:border-accent-primary dark:hover:border-accent-primary md:cursor-pointer cursor-default relative w-full h-full" : "";


  return (
    <article
      ref={cardRef}
      style={dynamicStyles}
      className={`${baseClasses} ${hoverClasses}`}
      onClick={() => {
      // [CaC Section 2.4] : Déclenchement sur toute la carte uniquement sur Desktop au repos
      if (window.innerWidth >= 768 && status === 'COLLAPSED') expand(); 
      }}
    >
      {/* 
        [CaC Section 2.4] : Démontage du résumé visuel si on est en plein écran 
        Nous montrons le résumé pour COLLAPSED, TRANSITIONING et REVERTING
      */}
      {status !== 'EXPANDED' ? (
        <>
          {/* ZONE TEXTUELLE */}
          <div className='flex-1 p-6 md:p-8 flex flex-col justify-between z-10'>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold text-typography-light dark:text-typography-dark-muted mb-6 line-clamp-3'>
                {project.titre}
              </h2>
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

            {/* [CaC Section 2.4 - Sécurité UX] : Bouton dédié pour Mobile */}
            <Button
              onClick={(e) => {
                e.stopPropagation();
                if (status === 'COLLAPSED') expand();
              }}
              variant='primary'
              className='w-full gap-2'
              aria-label={`Voir les détails du projet ${project.titre}`}
            >
              Voir le projet
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>

          {/* ZONE MÉDIA */}
          <div className="w-full md:w-5/12 h-48 md:h-auto relative overflow-hidden bg-gray-100 dark:bg-gray-900 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-800">
            <img 
              src={project.coverImage} 
              alt={`Aperçu de l'interface de ${project.titre}`} 
              loading="lazy"
              className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </>
      ): (
        /* 
          [CaC Section 2.4] : Montage de la structure complète en mode EXPANDED 
          Nous passons la fonction collapse en prop pour le bouton de fermeture
        */
       <ProjetDetails project={project} onClose={collapse} />
      )}

    </article>
  );
};

export default ProjetStar;