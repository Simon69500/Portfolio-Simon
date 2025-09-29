import '@scss/index.scss';

const Modal = ({show , onClose, children, projectId}) => {

    // Vérification si le modal doit être affiché
    if(!show) {

        return null; // Si `show` est `false`, retourner `null` signifie que rien ne sera rendu sur l'écran.
    }

    const contentClass = projectId ? `modal-content-${projectId}` : 'modal-content-default';

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            onClose(); 
        }
    };

     // Structure du modal affiché quand `show` est `true`
    return (
        <div className='modal-overlay' onClick={handleOverlayClick}>
            <div className={contentClass}>
                {children}
            </div>
        </div>
    );
};

export default Modal;

