import '@scss/index.scss';
import projects from '../../data/projects.json';
import { Technologies } from '../../data/technologies';
import { useParams } from 'react-router-dom';

function Projet({project}) {

    // Récupération de l'id du projet pour afficher les détails du projet selectionné  
    const {id} = useParams();
    const projet = projects.find((p) => p.id === parseInt(id));

    if (!projet) return <p>Projet introuvable</p>

return (
 
    <div className="contenair">
        <h2 className="title">{projet.titre}</h2>

             {/* Technologies utilisées */}
             <div className="card p-3 mb-3">
                <h4>Technologies utilisées</h4>
                <div className="d-flex justify-content-center flex-wrap">
                    {projet.technologies?.map((tech, index) => {
                        const skill = Technologies[tech];
                        return (
                            skill && (
                                <div key={index} className='tech-item d-flex flex-column align-items-center m-2'>
                                    <img src={skill.img} alt={skill.name} className='skill-img' />
                                    <span className='text-center'>{skill.name}</span>
                                </div>
                            )
                        )
                    })}
                </div>
            </div>

            {/* Description du projet */}
            <div className="card-text">
                <h3 className="Subtitle">Description du projet : </h3>
                <p className='text'>{projet.description}</p>
            </div>
            <div className='line'></div>

            {/* Objectif du projet */}
            {projet.objectif && (
             <div className="card-text">
                <h3 className="Subtitle">Objectif du projet : </h3>
                <p className='text'>{projet.objectif}</p>
            </div>               
            )}

            <div className='line'></div>

            {/* Public cible */}
            {projet.publicCible && (
            <div className="card-text">
                <h3 className="Subtitle">Public cible : </h3>
                <p className='text'>{projet.publicCible}</p>
            </div>
            )}
            <div className='line'></div>

            {/* Résultat du projet */}
            {projet.resultat && (
            <div className="card-text">
                <h3 className="Subtitle">Résultat du projet : </h3>
                <p className='text'>{projet.resultat}</p>
            </div>
            )}

            <div className='line'></div>

            {/* Défis rencontrés */}
            {projet.défis && (
            <div className="card-text">
                <h3 className="Subtitle">Défis rencontrés : </h3>
                <p className='text'>{projet.défis}</p>
            </div>
            )}
            <div className='line'></div>

            {/* Solutions apportées */}
            {projet.solutions && (
            <div className="card-text">
                <h3 className="Subtitle">Solutions apportées : </h3>
                <p className='text'>{projet.solutions}</p>
            </div>
            )}

            {/* Slider d'images */}
            {projet.image && (
            <img 
            src={projet.images?.[0]} 
            alt={projet.titre} 
            className={projet.id === 3 ? "mobile-image" : "desktop-image"} 
            />
            )}

            {/* Lien vers GitHub */}
            <a className="link-modal" href={projet.link} target="_blank" rel="noopener noreferrer">
                Voir le projet sur GitHub !
            </a>
    </div>
)}

export default Projet ;