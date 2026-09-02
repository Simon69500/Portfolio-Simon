import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import ProjectCarousel from '../ui/ProjectCarousel';
import ProjectTypeBadge from '../ui/ProjectTypeBadge';
import StarDemoMedia from './star/StarDemoMedia';
import StarMetrics from './star/StarMetrics';
import StarRole from './star/StarRole';
import StarNarrative from './star/StarNarrative';

/**
 * Composant de détail dédié au projet phare (Estimmo-Savoies).
 * Contrairement à ProjetDetails (générique), celui-ci orchestre une lecture
 * hiérarchisée en "étude de cas" : démo -> métriques -> rôle -> narratif -> galerie.
 * Il ne contient aucune logique d'affichage détaillée : chaque section vit dans son
 * propre sous-composant sous ./star/, et ne reçoit que la donnée dont elle a besoin.
 *
 * @param {Object} props
 * @param {import('../../data/projects/portfolioData').Project} props.project
 * @param {Function} props.onClose
 */
const ProjetDetailsStar = ({ project, onClose}) => {

    // Etat local pour piloter l'animation d'entrée (identique à ProjetDetails.jsx, qui
    // documente en détail la raison du double requestAnimationFrame ci-dessous — on ne
    // change pas ce qui marche)
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const frame1 = requestAnimationFrame(() => {
            const frame2 = requestAnimationFrame(() => {
                setIsMounted(true);
            });

            return () => cancelAnimationFrame(frame2);
        });
        return () => cancelAnimationFrame(frame1);
         
    }, []);

    return (
        <div className='w-full h-full bg-bento-light dark:bg-bento-dark overflow-y-auto relative flex flex-col cursor-auto'>

            {/* Bouton de fermeture sticky, identique à ProjetDetails */}
            <div className='sticky top-0 z-50 flex justify-end p-4 bg-gradient-to-b from-white/90 to-white/0 dark:from-gray-900/90 dark:to-gray-900/0 backdrop-blur-sm pointer-events-none'>
                <Button
                    variant='secondary'
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    className='pointer-events-auto'
                    aria-label={`Fermer les détails du projet ${project.titre}`}
                >
                    Fermer
                </Button>
            </div>

            <div className={`p-6 md:p-12 max-w-5xl mx-auto w-full flex-1 flex flex-col gap-12 transition-all duration-700 ease-out transform ${
                    isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>

                {/* 1. En-tête : contexte du projet (repris tel quel de ProjetDetails) */}
                <header>
                    <div className='mb-4'>
                        <ProjectTypeBadge type={project.type} variant='full' />
                    </div>
                    <h2 className='text-3xl md:text-5xl font-bold text-typography-light dark:text-typography-dark mb-4'>
                        {project.titre}
                    </h2>
                    <p className='text-lg text-typography-light dark:text-typography-dark-muted'>
                        {project.details.contexte}
                    </p>
                </header>                

                {/* 2. Démo vidéo/GIF - section ajoutée à l'étape 4, invisible tant qu'aucune donnée n'existe */}
                {project.details.demoMedia && (
                    <StarDemoMedia demoMedia={project.details.demoMedia} projectTitle={project.titre} />
                )}

                {/* 3. Métriques produit - section ajoutée à l'étape 2 */}
                {project.details.metrics && (
                    <StarMetrics metrics={project.details.metrics} />
                )}

                {/* 4. Mon rôle - section ajoutée à l'étape 3 */}
                {project.details.role && (
                    <StarRole role={project.details.role} />
                )}

                {/* 5. Narratif technique existant (aspects techniques / défis / solutions / résultats) */}
                <StarNarrative details={project.details} />

                {/* 6. Carrousel */}
                <section className='w-full'>
                    <ProjectCarousel gallery={project.gallery} projectTitle={project.titre} />
                </section>

                {/* 7. Liens */}
                <section className='flex flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-gray-800'>
                    {project.liveUrl && (
                        <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            Voir le site en direct
                        </Button>
                    )}
                    {project.githubUrl && (
                        <Button variant='secondary' href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            Code Source (github)
                        </Button>
                    )}
                </section>
            </div>
        </div>
    );
};

export default ProjetDetailsStar;