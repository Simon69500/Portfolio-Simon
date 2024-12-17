import { useEffect, useRef, useState } from "react";
import "../../SCSS/MenuBurger.scss";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";


// Menu Burger pour la version mobile
const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        }
    }, [isOpen]);

    return (
        <main id="menu" ref={menuRef}>
            <button 
                className="burger-icon" 
                onClick={toggleMenu} 
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <HamburgerMenuIcon/>
            </button>

            <nav className={`menu-detail ${isOpen ? 'open' : ''}`}>
                <a className="menu_1" href="#main">Acceuil</a>
                <a className="menu_1" href="#about">A propos</a>
                <a className="menu_1" href="#Competences">Compétences</a>
                <a className="menu_1" href="#Portfolio">Portfolio</a>
                <a className="menu_1" href="#Contact">Me Contacter</a>
            </nav>
        </main>
    );
};

export default BurgerMenu;
