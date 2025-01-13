import { useState } from 'react';
import Modal from './Modal';
import ProjetsModal from './ProjetsModal';
import '../../SCSS/Modal/PortfolioModal.scss';
import ImageSlider from '../Interface/SwiperImage';
import * as React from 'react';
import Button from '@mui/material/Button';

let Projets = ProjetsModal;

function PortfolioModal() {

    const [selectProjet, setSelectProjet] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleOpenModal = (projet) => {
        setSelectProjet(projet); // Met à jour selectProjet avec le projet spécifique
        setIsModalOpen(true); // Ouvre le modal
    };

    return (

        <div className='portfolio-contenair'>

            <h1 className='title-portfolio'>Mon Portfolio</h1>

            <ul className='list-portfolio'>
                {Projets.map((projet) => (

                    <li  className='list-detail-portfolio'  key={projet.id}>

                        {/* Passer le projet spécifique à handleOpenModal */}
                        <button style={{
                            cursor: 'pointer'
                        }} 
                        className='buton-projet-portfolio' 
                        onClick={() => handleOpenModal(projet)}>
                            Voir le projet : {projet.titre}
                        </button>

                        <img className={`imagePort-id-${projet.id}`} src={projet.image} alt='projet du portfolio' />

                    </li>
                ))}
            </ul>

            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} projectId={selectProjet ? selectProjet.id : null}>
    {selectProjet && (
        <div className="box-modal">
            <h2 className="title-principal-modal">{selectProjet.titre}</h2>

            {/* Description du projet */}
            <div className="card-modal">
                <h3 className="title-modal">Description du projet : </h3>
                <p className='text-modal'>{selectProjet.description}</p>
            </div>
            <div className='line-modal'></div>

            {/* Objectif du projet */}
            <div className="card-modal">
                <h3 className="title-modal">Objectif du projet : </h3>
                <p className='text-modal'>{selectProjet.objectif}</p>
            </div>
            <div className='line-modal'></div>

            {/* Public cible */}
            <div className="card-modal">
                <h3 className="title-modal">Public cible : </h3>
                <p className='text-modal'>{selectProjet.publicCible}</p>
            </div>
            <div className='line-modal'></div>

            {/* Résultat du projet */}
            <div className="card-modal">
                <h3 className="title-modal">Résultat du projet : </h3>
                <p className='text-modal'>{selectProjet.resultat}</p>
            </div>
            <div className='line-modal'></div>

            {/* Défis rencontrés */}
            <div className="card-modal">
                <h3 className="title-modal">Défis rencontrés : </h3>
                <p className='text-modal'>{selectProjet.défis}</p>
            </div>
            <div className='line-modal'></div>

            {/* Solutions apportées */}
            <div className="card-modal">
                <h3 className="title-modal">Solutions apportées : </h3>
                <p className='text-modal'>{selectProjet.solutions}</p>
            </div>
            <div className='line-modal'></div>

            {/* Technologies utilisées */}
            <div className="card-modal">
                <h3 className="title-modal">Les technologies : </h3>
                <div className="card-techno">
                    {selectProjet.technologie.map((tech, index) => (
                        <p key={index} className="tech-item">{tech}</p>
                    ))}
                </div>
            </div>
            <span className='line-modal'></span>

            {/* Slider d'images */}
            <ImageSlider images={selectProjet.images || []} className={selectProjet.id === 3 ? "mobile-image" : "desktop-image"} />
            <div className='line-modal'></div>

            {/* Lien vers GitHub */}
            <Button className="link-modal" href={selectProjet.link} target="_blank" rel="noopener noreferrer">
                Voir le projet sur GitHub !
            </Button>
        </div>
    )}
</Modal>

 

        </div>
    );
}

export default PortfolioModal;
