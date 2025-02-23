import '../SCSS/Footer.scss';
import { Icones } from "../Component/Icons/Icones";


const Footer = () => {

    return (
        <div className='Footer'>
            <div className='icon-footer'>
                <a href="https://github.com/Simon69500" target="_blank" rel="noopener noreferrer">
                    <img className="item-icon" src={Icones.github2} alt="icone de GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/simon-badin-939594279/" target="_blank" rel="noopener noreferrer">
                    <img className="item-icon" src={Icones.linkedin} alt="icone de LinkedIn" />
                </a>
            </div>
            <div >
                <p className='text-footer'> © 2024 Simon Badin. Tous droits réservés.</p>
            </div>
            <div className="footer-contact">
                <p className=' text-contact'>📧 Email: <a href="mailto:simonsola67@gmail.com">me contacter</a></p>
                <p className=' text-contact'>📞 Téléphone: <a href="tel:+33665679770">06 65 67 97 70</a></p>
            </div>
        </div>
    )
};

export default Footer ;