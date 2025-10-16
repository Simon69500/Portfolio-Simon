import "@scss/index.scss";
import projects from "../../data/projects.json";

import { Link } from "react-router-dom";
import { Technologies } from "../../data/technologies";
import { imageMap } from "../../data/imgProjects";

const Portfolio = () => {
  return (
    <div className="Portfolio_container d-flex flex-column">
      <h1 className="title text-center fs-1 pt-3">Portfolio</h1>
      <div className="Portfolio d-flex flex-wrap justify-content-evenly align-items-stretch">
      {projects.map((projet) => {
        const images = imageMap[projet.slug] || [];

        return (
        <div className="col-sm-8 col-md-4 col-lg-4 col-xl-3 d-flex m-3" key={projet.id}>
         
          {/* Card-Projet */}         
          <div className="projetCard card d-flex flex-column h-100 w-100" id={`project-${projet.id}`}>

            {/* Card-Header */}
            <div className="card-header w-100">
              <h5 className="Subtitle text-center py-2">{projet.titre}</h5>
            </div>

            {/* Carousel */}
            <div id={`carousel-${projet.id}`} className="carousel carousel-dark slide mt-3" data-bs-ride="carousel">
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
                  <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
                    <img 
                    src={img}
                    className="img-card" 
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
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"git 
                data-bs-target={`#carousel-${projet.id}`}
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button> 

            </div>

            {/* Card-Body */}
            <div className="card-body d-flex flex-column justify-content-between text-center">
                  <h5 className="Subtitle fs-5">Contexte :</h5>
                  <p className="text w-100"> {projet.contexte} </p>

                  {/* Technologies utilisées */}
                  <div>
                    <h5 className="Subtitle fs-5">Technologies utilisées :</h5>
                    <div className="d-flex justify-content-center flex-wrap my-3">
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
            </div>

             {/* Bouton lien Github */}         
              <Link to={`/projet/${projet.id}`} className="btn btn-primary mt-auto mb-3">Voir le projet</Link>
          </div>
        </div>
        )
     })}
     </div>
    </div>
  );
};

export default Portfolio;
