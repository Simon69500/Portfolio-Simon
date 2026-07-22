import React, {useState} from 'react';

// Import des composants
import Header from '../layouts/Header';
import Presentation from '../bento/Presentation';
import StackCard from '../bento/StackCard';
import ProjetStar from '../bento/ProjetStar';
import Parcours from '../bento/Parcours';
import MosaicContainer from '../bento/MosaicContainer';
import Footer from '../layouts/Footer';



// Import de la source de vérité des données
import { portfolioData } from '../../data/projects/portfolioData';
import SoftSkills from '../bento/SoftSkills';


const Home = () => {

    // État global : null (aucun projet ouvert) ou l'ID du projet ouvert
    const [expansionProjetId, setExpansionProjetId] = useState(null)

    // 1. Filtrage dynamique : On extrait LE projet phare (Estimmo)
    const featuredProject = portfolioData.find(project => project.isFeatured === true);

    // 2. Filtrage dynamique : On exclut le projet phare ET le template vide (id: 6)
    const secondaryProjects = portfolioData.filter(project => project.isFeatured === false && project.id !== 6);
    
    // 3. Découpage pour les deux tuiles de mosaïque[cite: 2, 5]
    const projectsF = secondaryProjects.slice(0, 2); // Projets 2 et 3
    const projectsG = secondaryProjects.slice(2, 4); // Projet 4

    return (
        <>
            {/* Header */}
            <Header/>

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
                    <Presentation/>
                </div>  

                {/* Tuile B : Stack Technique */}
                <div
                    className={`
                        col-span-1 md:col-span-4 order-2 md:order-2
                        transition-opacity duration-500
                        ${expansionProjetId !== null && expansionProjetId !== 'stack' ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                    `}
                >
                    <StackCard/>
                </div>  

                {/* Tuile C : Parcours Pro */}
                <div
                    className={`
                        col-span-1 md:col-span-4 order-3 md:order-4
                        transition-opacity duration-500
                        ${expansionProjetId !== null && expansionProjetId !== 'stack' ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                    `}
                >
                    <Parcours/>
                </div>  

                {/* Tuile D : Projet Phare (Estimmo) */}
                {/* Sécurité : on ne rend la tuile que si featuredProject existe */}
                {featuredProject && (
                    <div
                        className={`
                            col-span-1 md:col-span-8 order-4 md:order-4
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

                {/* Tuile E : Soft Skill */}
                <div
                    className={`
                        col-span-1 md:col-span-5 order-5 md:order-5
                        transition-opacity duration-500
                        ${expansionProjetId !== null && expansionProjetId !== 'stack' ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                    `}
                >
                    <SoftSkills/>
                </div>  

                {/* Tuile F : Mosaïque Projets 1  */}
                {projectsF.length > 0 && (
                    <div className={`col-span-1 md:col-span-7 order-6 transition-opacity duration-500 ${expansionProjetId !== null ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <MosaicContainer 
                        projects={projectsF} 
                        expansionProjetId={expansionProjetId}
                        setExpansionProjetId={setExpansionProjetId}                        
                        />
                    </div>
                )}

                {/* Tuile G : Mosaïque Projets 2  */}
                {projectsG.length > 0 && (
                    <div className={`col-span-1 md:col-span-6 order-7 transition-opacity duration-500 ${expansionProjetId !== null ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <MosaicContainer 
                        projects={projectsG} 
                        expansionProjetId={expansionProjetId}
                        setExpansionProjetId={setExpansionProjetId}                           
                        />
                    </div>
                )}             


            </main>    
            
            {/* Tuile H : Mosaïque Projets 2  */}
            <Footer/>                
        </>
    );
};

export default Home;
