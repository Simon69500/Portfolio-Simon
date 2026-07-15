import React, {useState} from 'react';

// Import des composants
import Presentation from '../bento/Presentation';
import StackCard from '../bento/StackCard';
import ProjetStar from '../bento/ProjetStar';

// Import de la source de vérité des données
import { portfolioData } from '../../data/projects/portfolioData';


const Home = () => {

    // État global : null (aucun projet ouvert) ou l'ID du projet ouvert
    const [expansionProjetId, setExpansionProjetId] = useState(null)

    // 1. Filtrage dynamique : On extrait LE projet phare (Estimmo)
    const featuredProject = portfolioData.find(project => project.isFeatured === true);

    // 2. Filtrage dynamique : On prépare le tableau des projets secondaires pour les futures mosaïques
    // const secondaryProjects = portfolioData.filter(project => project.isFeatured === false);

    return (
        <>
            {/* Grille Bento : 1 col Mobile / 12 cols Desktop avec Gaps */}
            <main className='grid grid-cols-1 md:grid-cols-12 gap-4 p-4 relative min-h-screen'>
                
                {/* Tuile A : Présentation */}
                <div
                    className={`
                        col-span-1 md:col-span-8 order-1 md:order-1
                        transition-opacity duration-500
                        ${expansionProjetId !== null && expansionProjetId !== 'presentation' ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                    `}
                >
                    <Presentation
                        projectId="presentation" 
                        expansionProjetId={expansionProjetId}
                        setExpansionProjetId={setExpansionProjetId}
                    />
                </div>  

                {/* Tuile B : Stack Technique */}
                <div
                    className={`
                        col-span-1 md:col-span-4 order-2 md:order-2
                        transition-opacity duration-500
                        ${expansionProjetId !== null && expansionProjetId !== 'stack' ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                    `}
                >
                    <StackCard
                        projectId="stack"
                        expansionProjetId={expansionProjetId}
                        setExpansionProjetId={setExpansionProjetId}
                    />
                </div>  

                {/* Tuile D : Projet Phare (Estimmo) */}
                {/* Sécurité : on ne rend la tuile que si featuredProject existe */}
                {featuredProject && (
                    <div
                        className={`
                            col-span-1 md:col-span-8 order-3 md:order-3
                            transition-opacity duration-500
                            ${expansionProjetId !== null && expansionProjetId !== featuredProject.id ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                        `}
                    >
                        <ProjetStar
                            project={featuredProject}
                            expansionProjetId={expansionProjetId}
                            setExpansionProjetId={setExpansionProjetId}
                        />
                    </div>
                )}

            </main>        
        </>
    );
};

export default Home;
