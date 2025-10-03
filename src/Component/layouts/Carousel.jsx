import { Link } from 'react-router-dom';
import { imgVillage, imgArtisan, imgPlantes } from '../ui/img-modal';

const projects = [
  { name: "Au petit village", images: imgVillage, key: "village" },
  { name: "Trouve ton artisan", images: imgArtisan, key: "artisan" },
  { name: "La vie des plantes", images: imgPlantes, key: "plantes" },
];

const HomeCarousel = () => {
  return (
    <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        {projects.map((project, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={project.key}>
            <div className="d-flex justify-content-center p-3">
              <div className="card" style={{ width: "18rem", height: "25rem" }}>
                <img src={project.images[0]} className="card-img-top" alt={project.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{project.name}</h5>
                  <Link
                    to="/portfolio"
                    state={{ project: project.key }}
                    className="btn btn-primary"
                  >
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
