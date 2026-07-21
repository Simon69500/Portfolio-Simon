import React, {useRef} from 'react';
import { motion, AnimatePresence } from 'motion/react';
import TechBadge from '../ui/TechBadge';
import Button from '../ui/Button';
import { techData } from '../../data/techData';
import { useCardExpansion } from '../../hook/useCardExpansion';
import ProjetDetails from './ProjetDetails';


/**
 * Carte Bento Grid C : Présentation du projet phare Estimmo-savoies
 * Conforme Section 2.4 du Cahier des Charges (Card Expansion)[cite: 2]
 */
const ProjetStar = ({ project, expansionProjetId, setExpansionProjetId }) => {

  const cardRef = useRef(null);

  const { status, expand, collapse } = useCardExpansion(
    project.id,
    expansionProjetId,
    setExpansionProjetId
  );

const getTechDetails = (techName) => {
    // 1. On extrait les tableaux de chaque catégorie et on les fusionne en un seul tableau plat
    const allTechs = Object.values(techData).flat();
    
    // 2. On applique le .find() sur ce nouveau tableau unifié
    const found = allTechs.find(t => t.name.toLowerCase() === techName.toLowerCase());
    
    // 3. On retourne l'URL du logo si trouvé, sinon null
    return found ? found.logoUrl : null;
  };

  const isExpanded = status === 'EXPANDED';

  // Classes de base pour la tuile de la grille Bento[cite: 2]
  const baseClasses = "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-800 bg-bento-light dark:bg-bento-dark shadow-sm ";
  const hoverClasses = !isExpanded ? "hover:border-accent-primary dark:hover:border-accent-primary md:cursor-pointer cursor-default relative w-full h-full" : "";

  return (
    <motion.article
      ref={cardRef}
      layoutId={project.id}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={`${baseClasses} ${hoverClasses} ${
        isExpanded ? 'fixed inset-0 z-50 rounded-none m-0 w-screen h-screen overflow-y-auto' : ''
      }`}
      onClick={() => {
        // [CaC Section 2.4] : Déclenchement sur toute la carte uniquement sur Desktop au repos[cite: 2]
        if (window.innerWidth >= 768 && !isExpanded) expand(); 
      }}
    >
      {!isExpanded ? (
        <div className="flex flex-col h-full w-full">
          {/* ZONE TEXTUELLE */}
          <div className='flex-1 p-6 md:p-8 flex flex-col justify-between z-10'>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold text-typography-light dark:text-typography-dark-muted mb-6 line-clamp-3'>
                {project.titre}
              </h2>
              <p className='text-typography-light dark:text-typography-dark-muted mb-6 line-clamp-3'>
                {project.details.contexte}
              </p>
            </div>

            {/* Badges Techniques */}
            <div className='flex flex-wrap gap-2 mb-6 md:mb-0'>
              {project.technologies.map((tech, index) => {
                const logo = getTechDetails(tech);
                return logo ? (
                  <TechBadge key={index} name={tech} logoUrl={logo} />
                ) : (
                  <span key={index} className='px-3 py-1 text-xs font-medium rounded-full bg-gray-200 dark:bg-gray-700 text-typography-light dark:text-typography-dark-DEFAULT'>
                    {tech}
                  </span>
                );
              })}
            </div>

            {/* [CaC Section 2.4 - Sécurité UX] : Bouton dédié pour Mobile[cite: 2] */}
            <Button
              onClick={(e) => {
                e.stopPropagation();
                if (!isExpanded) expand();
              }}
              variant='primary'
              className='w-full gap-2 md:hidden mt-4'
              aria-label={`Voir les détails du projet ${project.titre}`}
            >
              Voir le projet
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>

          {/* ZONE MÉDIA */}
          <div className="w-full h-48 md:h-64 relative flex justify-center items-center overflow-hidden shrink-0 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <img 
              src={project.coverImage} 
              alt={`Aperçu de l'interface de ${project.titre}`} 
              loading="lazy"
              className="w-full h-full object-contain object-center p-4"
            />
          </div>
        </div>
      ) : (
        <div className="h-full w-full flex flex-col bg-bento-light dark:bg-bento-dark">
          <ProjetDetails project={project} onClose={collapse} />
        </div>
      )}
    </motion.article>
  );
};

export default ProjetStar;