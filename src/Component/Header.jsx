import { useContext } from "react";
import Logo192 from "../asset/logo192.png";
import "../SCSS/Header.scss";
import { ThemeContext } from "../Component/Ligth/Dark/ThemeContext";

const Header = () => {

    const {isDarkMode} = useContext(ThemeContext);

    return (
        <>
            <div className={isDarkMode ? 'dark-header' : 'light-header'}>
                <div className="img">
                <img src={Logo192} alt="logo" className="logo"/>
                </div>
                
                <nav className="menu">
                    <a href="Accueil">Accueil</a>
                    <a href="Profil">Profil</a>
                    <a href="Skill">Compétences</a>
                    <a href="Portfolio">Portfolio</a>
                    <a href="Contact">Contact</a>
                </nav>
            </div>
        </>
    )
};

export default Header ;
