import "@scss/index.scss";
import projects from "../../data/projects.json";

import { Technologies } from "../../data/technologies";
import { useParams } from "react-router-dom";
import { imageMap } from "../../data/imgProjects";
import { Link } from "react-router-dom";

function Projet({ project }) {

  // Récupération de l'id du projet 
  const { id } = useParams();
  const projet = projects.find((p) => p.id === parseInt(id));

  const images = imageMap[projet.slug] || [];

  if (!projet) return <p>Projet introuvable</p>;

  return (
    <div id="projet" className="projet contenair p-md-5 p-2">
        
      <div className="card projetCard m-md-5  ">

        {/* Card-Header */}
        <div className="card-header d-flex justify-content-center">
            <Link to="/portfolio" ><i className="bi bi-arrow-bar-left fs-2 px-3"></i></Link>
            <h1 className="title text-center fs-1">{projet.titre}</h1>
        </div>

        {/* Card-Body */}
        <div className="card-body p-0">

            {/* Carousel */}
            <div
            id={`carousel-${projet.id}`}
            className="carousel carousel-dark slide my-md-5 px-md-5 my-2 px-2"
            data-bs-ride="carousel"
            >
            {/* Carousel-Indicators */}
            <div className="carousel-indicators">
                {images.map((_, idx) => (
                <button
                    key={idx}
                    type="button"
                    data-bs-target={`#carousel-${projet.id}`}
                    data-bs-slide-to={idx}
                    className={idx === 0 ? "active" : ""}
                    aria-current={idx === 0 ? "true" : undefined}
                    aria-label={`Slide ${idx + 1}`}
                ></button>
                ))}
            </div>

            {/* Carousel-items */}
            <div className="carousel-inner">
                {images.map((img, idx) => (
                <div
                    key={idx}
                    className={`carousel-item ${idx === 0 ? "active" : ""}`}
                >
                    <img
                    src={img}
                    className="d-block w-100"
                    alt={`${projet.titre} ${idx + 1}`}
                    />
                </div>
                ))}
            </div>

            {/* Carousel-Controls */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#carousel-${projet.id}`}
                data-bs-slide="prev"
            >
                <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                git
                data-bs-target={`#carousel-${projet.id}`}
                data-bs-slide="next"
            >
                <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>

            <div className="border-top border-dark my-md-5 my-2"></div>

            {/* Technologies utilisées */}
            <div className="d-flex flex-column align-items-md-center my-md-5 my-3">
            <h3 className="Subtitle text-center card-title me-md-3">Technologies utilisées :</h3>
            <div className="d-flex justify-content-center flex-wrap">
                {projet.technologies?.map((tech, index) => {
                const skill = Technologies[tech];
                return (
                    skill && (
                    <div
                        key={index}
                        className="tech-item d-flex flex-column align-items-center m-2"
                    >
                        <img
                        src={skill.img}
                        alt={skill.name}
                        className="skill-img"
                        />
                        <span className="text text-center">{skill.name}</span>
                    </div>
                    )
                );
                })}
            </div>
            </div>

            <div className="border-top border-dark my-md-5 my-2"></div>

            {/* Technologie Secondaire du projet */}
            <div className="d-flex flex-column align-items-md-center my-md-5 my-3">
            <h3 className="Subtitle text-center card-title me-3">Technologie Secondaire : </h3>
             <div className="d-flex justify-content-center flex-wrap">
            {projet.technologiesSec?.map((tech) => (
                <span key={tech} className="text p-3"> {tech} </span>
            ))}
            </div>
            </div>
            
            <div className="border-top border-dark my-md-5 my-2"></div>

            {/* Description du projet */}
            <div className="d-flex flex-column align-items-md-center my-md-5 my-3">
            <h3 className="Subtitle text-center text-center card-title me-3">Description du projet : </h3>
            <p className="text card-text px-md-0 px-1">{projet.description}</p>
            </div>

            <div className="border-top border-dark my-md-5 my-2"></div>

            {/* Objectif du projet */}
            {projet.objectif && (
            <div className="d-flex flex-column align-items-md-center my-md-5 my-3">
                <h3 className="Subtitle text-center">Objectif du projet : </h3>
                <p className="text card-text px-md-0 px-1 ">{projet.objectif}</p>
            </div>
            )}

            <div className="border-top border-dark my-md-5 my-2"></div>

            {/* Public cible */}
            {projet.publicCible && (
            <div className="d-flex flex-column align-items-md-center my-md-5 my-3">
                <h3 className="Subtitle text-center">Public cible : </h3>
                <p className="text card-text px-md-0 px-1 ">{projet.publicCible}</p>
            </div>
            )}

            <div className="border-top border-dark my-md-5 my-2"></div>

            {/* Résultat du projet */}
            {projet.resultat && (
            <div className="d-flex flex-column align-items-md-center my-md-5 my-3">
                <h3 className="Subtitle text-center">Résultat du projet : </h3>
                <p className="text card-text px-md-0 px-1 ">{projet.resultat}</p>
            </div>
            )}

            <div className="border-top border-dark my-md-5 my-2"></div>

            {/* Défis rencontrés */}
            {projet.défis && (
            <div className="d-flex flex-column align-items-md-center my-md-5 my-3">
                <h3 className="Subtitle text-center">Défis rencontrés : </h3>
                <p className="text card-text px-md-0 px-1 ">{projet.défis}</p>
            </div>
            )}

            <div className="border-top border-dark my-md-5 my-2"></div>

            {/* Solutions apportées */}
            {projet.solutions && (
            <div className="d-flex flex-column align-items-md-center my-md-5 my-3">
                <h3 className="Subtitle text-center">Solutions apportées : </h3>
                <p className="text card-text px-md-0 px-1 ">{projet.solutions}</p>
            </div>
            )}

            {/* Lien vers GitHub */}
            <div className="card-footer d-flex justify-content-center">
                <a
                className="btn btn-sm btn-primary my-3"
                href={projet.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                Voir le projet sur GitHub !
                </a> 
            </div>       
        </div>
      </div>

        <div className="d-flex justify-content-end">
        <a href="#projet">
            <i className="bi bi-arrow-bar-up fs-1"></i>
        </a>
        </div>
    </div>
  );
}

export default Projet;
