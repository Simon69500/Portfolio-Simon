import { useState } from 'react';
import Modal from './Modal';
import ProjetsModal from './ProjetsModal';

let Projets = ProjetsModal;

function PortfolioModal() {

    const [selectProjet, setSelectProjet] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (projet) => {
        setSelectProjet(projet); // Met à jour selectProjet avec le projet spécifique
        setIsModalOpen(true); // Ouvre le modal
    };

    return (
        <div>
            <h1>Mon Portfolio</h1>
            <ul>
                {Projets.map((projet) => (
                    <li key={projet.id}>
                        {/* Passer le projet spécifique à handleOpenModal */}
                        <button onClick={() => handleOpenModal(projet)}>
                            Voir le {projet.titre}
                        </button>
                    </li>
                ))}
            </ul>

            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {selectProjet && (
                    <>
                        <h2>{selectProjet.titre}</h2>
                        <img src={selectProjet.image} alt={selectProjet.titre} />
                        <p>{selectProjet.description}</p>
                        <p>{selectProjet.technologie}</p>
                        <a href={selectProjet.link} target='_blank' rel='noopener noreferrer'>
                            Voir le projet sur GitHub !
                        </a>
                    </>
                )}
            </Modal>    

        </div>
    );
}

export default PortfolioModal;
