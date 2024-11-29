import { useState } from 'react';
import Modal from './Modal';
import ProjetsModal from './ProjetsModal';
import '../../SCSS/Modal/PortfolioModal.scss';
import TitlebarImageList from '../Interface/ImageList';

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
                        <button className='buton-projet-portfolio' onClick={() => handleOpenModal(projet)}>
                            Voir le {projet.titre}
                        </button>
                        <img className={`imagePort-id-${projet.id}`} src={projet.image} alt='' />
                    </li>
                ))}
            </ul>

            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} projectId={selectProjet ? selectProjet.id : null}>
                {selectProjet && (
                    <div className="card-modal">
                         <h2 className='title-modal'>{selectProjet.titre}</h2>
                        <p className='dpn-modal'>{selectProjet.description}</p>
                        <p className='tech-modal'>{selectProjet.technologie}</p>
                        <TitlebarImageList />
                        <a className='link-modal' href={selectProjet.link} target='_blank' rel='noopener noreferrer'>
                            Voir le projet sur GitHub !
                        </a>
                    </div>
                       
                )}
            </Modal>    

        </div>
    );
}

export default PortfolioModal;
