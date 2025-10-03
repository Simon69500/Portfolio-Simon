import '@scss/index.scss';
import { Icones } from "../ui/Icones";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header background-header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          {/* Logo à gauche */}
          <Link className="navbar-brand" to="/">
            <img
              src={Icones.profil}
              alt="Simon Badin"
              className="rounded-circle ms-5"
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
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="nav nav-underline">
              <li className="nav-item me-5 fs-4">
                <Link className="nav-link" aria-current="page"  to="/">Accueil</Link>
              </li>
              <li className="nav-item me-5 fs-4">
                <Link className="nav-link" to="/competences">Compétences</Link>
              </li>
              <li className="nav-item me-5 fs-4">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item me-5 fs-4">
                <Link className="btn fs-4" role="button" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
