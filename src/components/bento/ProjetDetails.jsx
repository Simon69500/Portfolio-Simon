import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';

/**
 * Composant de détail affiché lorsque la tuile projet est en état EXPANDED.
 * [CaC Section 2.4 - Démontage du résumé pour monter la structure complète]
 */
const ProjetDetails = ({ project, onClose }) => {

    // 1. Etat local pour piloter l'animation d'entrée (fade-in Up)
    const [isMounted, setIsMounted] = useState(false);

    // 2. Déclenchement de l'animation au montage du composant
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
        <div className="w-full h-full bg-bento-light dark:bg-bento-dark overflow-y-auto relative flex flex-col cursor-auto">
            
            {/* 
                [CaC Section 2.4] Contrôle de Navigation : Bouton de fermeture persistant 
                Utilisation de sticky pour qu'il reste visible lors du scroll
            */}
            <div className="sticky top-0 z-50 flex justify-end p-4 bg-gradient-to-b from-white/90 to-white/0 dark:from-gray-900/90 dark:to-gray-900/0 backdrop-blur-sm pointer-events-none">
                <Button 
                    variant="secondary" 
                    onClick={(e) => { 
                        e.stopPropagation(); 
                        onClose(); 
                    }} 
                    className="pointer-events-auto"
                    aria-label={`Fermer les détails du projet ${project.titre}`}
                >
                    Fermer
                </Button>
            </div>

            {/* Conteneur du contenu détaillé */}
            <div className={`p-6 md:p-12 max-w-5xl mx-auto w-full flex-1 flex flex-col gap-12 transition-all duration-700 ease-out transform ${
                    isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
                
                {/* En-tête du projet */}
                <header>
                    <h2 className="text-3xl md:text-5xl font-bold text-typography-light dark:text-typography-dark-DEFAULT mb-4">
                        {project.titre}
                    </h2>
                    <p className="text-lg text-typography-light dark:text-typography-dark-muted">
                        {project.details.contexte}
                    </p>
                </header>

                {/* [CaC Section 2.4] Zone Médias : Placeholder pour le futur Carrousel */}
                <section className="w-full h-64 md:h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-300 dark:border-gray-700">
                    <span className="text-typography-light dark:text-typography-dark-muted font-medium">
                        Intégration du Carrousel à venir...
                    </span>
                </section>

                {/* [CaC Section 2.4] Zone Conceptuelle : Placeholder pour le texte */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                        <h3 className="font-bold text-xl mb-2 text-typography-light dark:text-typography-dark-DEFAULT">Défis rencontrés</h3>
                        <p className="text-typography-light dark:text-typography-dark-muted">{project.details.defis}</p>
                    </div>
                    <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                        <h3 className="font-bold text-xl mb-2 text-typography-light dark:text-typography-dark-DEFAULT">Solutions apportées</h3>
                        <p className="text-typography-light dark:text-typography-dark-muted">{project.details.solutions}</p>
                    </div>
                </section>

                {/* [CaC Section 2.4] Zone Actions : Placeholder pour les liens */}
                <section className="flex flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
                    {project.liveUrl && (
                        <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            Voir le site en direct
                        </Button>
                    )}
                    {project.githubUrl && (
                        <Button variant="secondary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            Code Source (GitHub)
                        </Button>
                    )}
                </section>
                
            </div>
        </div>
    );
};

export default ProjetDetails;