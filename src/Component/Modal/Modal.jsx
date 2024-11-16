import '../../SCSS/Modal/Modal.scss';
import React from 'react';

const Modal = ({show , onClose, children}) => {

    // Vérification si le modal doit être affiché
    if(!show) {

        return null; // Si `show` est `false`, retourner `null` signifie que rien ne sera rendu sur l'écran.
    }

     // Structure du modal affiché quand `show` est `true`
    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <button className='button-close-modal' onClick={onClose}> X </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;