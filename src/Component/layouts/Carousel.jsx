import "@scss/index.scss";

import projects from '../../data/projects.json';

import { Link } from 'react-router-dom';
import { imageMap } from '../../data/imgProjects';
import { Technologies } from "../../data/technologies";

const HomeCarousel = () => {

  return (
    <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        {projects.map((project, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={project.key}>
            <div className="d-flex justify-content-center ">

            <div className="card shadow rounded mb-3 mb-md-4">
              <img 
                src={imageMap[project.slug] ? imageMap[project.slug][0] : "/fallback.jpg"} 
                className="card-img-top img-fluid rounded-top object-fit-cover" 
                alt={project.name} 
                style={{ height: "15rem" }} 
              />
              <div className="card-body d-flex flex-column justify-content-between align-items-center">
                <h5 className="Subtitle text-center card-title fs-5">{project.titre}</h5>
                
                <div className="d-flex flex-wrap justify-content-center my-2">
                  {project.technologies?.map((techKey, index) => {
                    const tech = Technologies[techKey];
                    return tech ? (
                      <div key={index} className="d-flex flex-column align-items-center m-2">
                        <img src={tech.img} alt={tech.name} className="img-fluid" style={{ width: "1.5rem", height: "1.5rem" }} />
                        <span className="text small text-center">{tech.name}</span>
                      </div>
                    ) : null;
                  })}
                </div>

                <Link to={`/portfolio#project-${project.id}`} state={{ project: project.key }} className="btn btn-primary mt-2">
                  Voir le projet
                </Link>
              </div>
            </div>
              
            </div>
          </div>
        ))}

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomeCarousel;
