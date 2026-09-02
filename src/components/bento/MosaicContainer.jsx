import React from "react";
import ProjetCard from "../ui/ProjetCard";

/**
 * Conteneur des tuiles F et G : une grille 2 colonnes de ProjetCard, sans logique propre —
 * ne fait que répartir en grille les projets qu'on lui passe et transmettre le state
 * d'expansion (possédé par Home.jsx) à chaque carte.
 *
 * @param {Object} props
 * @param {import('../../data/projects/portfolioData').Project[]} props.projects
 * @param {number|string|null} props.expansionProjetId
 * @param {(id: number|string|null) => void} props.setExpansionProjetId
 */
const MosaicContainer = ({ projects, expansionProjetId, setExpansionProjetId }) => {
    return (
        <div className="h-full p-6 rounded-3xl bg-bento-light dark:bg-bento-dark shadow-sm transition-all duration-300 border border-transparent hover:border-accent-primary">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full p-4">
                {projects.map(project => (
                    <ProjetCard 
                        key={project.id} 
                        project={project} 
                        expansionProjetId={expansionProjetId}
                        setExpansionProjetId={setExpansionProjetId} 
                    />
                ))}
            </div>
        </div>
    );
};

export default MosaicContainer;