import '@scss/index.scss';
import { Icones } from "../../data/Icones";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import * as bootstrap from 'bootstrap';


const Header = () => {

useEffect(() => {
  // Fonction qui gère le clic à l'extérieur du menu burger
  const handleClickOutSide = (event) => {
    // On récupère le container du menu collapsible (celui qui contient les liens)
    const navbarCollpase = document.getElementById('navbarNav');

    // On récupère l'instance Bootstrap existante ou on en crée une nouvelle si elle n'existe pas
    // {toggle: false} empêche l'ouverture automatique à la création
    const bsCollpase =
      bootstrap.Collapse.getInstance(navbarCollpase) ||
      new bootstrap.Collapse(navbarCollpase, { toggle: false });

    // Si le clic est en dehors du menu et du bouton burger, on ferme le menu
    if (
      !navbarCollpase.contains(event.target) ||
      !document.querySelector('.navbar-toggler').contains(event.target) ||
      !document.querySelector('.nav-item').contains(event.target)
    ) {
      bsCollpase.hide(); // fermeture du menu
    }
  };

  // On ajoute un écouteur sur tout le document pour détecter les clics
  document.addEventListener('click', handleClickOutSide);

  // Cleanup : on supprime l'écouteur quand le composant se démonte
  return () => {
    document.removeEventListener('click', handleClickOutSide);
  };
}, []); // [] signifie que ce useEffect ne s'exécute qu'une seule fois au montage


  return (
    <header className="header background-header">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          {/* Logo à gauche */}
          <Link className="navbar-brand " to="/">
            <img
              src={Icones.profil}
              alt="Simon Badin"
              className="rounded-circle ms-lg-5 ms-3"
            />
          </Link>

          {/* Burger menu pour mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Liens de navigation */}
          <div className="collapse navbar-collapse menu-burger justify-content-md-center" id="navbarNav">
            <ul className="nav nav-underline d-flex flex-column flex-md-row align-items-center p-lg-3 p-md-0 p-4">
              <li className="nav-item">
                <Link className="Subtitle nav-link mx-sm-3" aria-current="page"  to="/">Accueil</Link>
              </li>
              <li className="nav-item  ">
                <Link className="Subtitle nav-link mx-sm-3" to="/competences">Compétences</Link>
              </li>
              <li className="nav-item">
                <Link className="Subtitle nav-link mx-sm-3" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-sm btn-primary fs-4 mx-sm-3 mb-sm-3" role="button" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
