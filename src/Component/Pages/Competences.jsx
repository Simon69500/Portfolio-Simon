import '@scss/index.scss';
import Skills from "../layouts/Skills";
import About from './About';
import CV from '@img/CV.jpg';

const Competences = () => {

    return (

<div className="Competences">
    <h1 className="title text-center fs-1 py-4">Mes compétences</h1>

    {/* Partie About full width */}
        <About />

    {/* Partie Skills + Soft Skills à gauche et CV à droite */}
    <div className="d-flex flex-lg-row flex-column justify-content-between align-items-start mt-5">
        
        {/* Partie gauche : Skills + Soft Skills */}
        <div className="left-section w-100 w-lg-50 pe-lg-4 mb-4 ms-5 mb-lg-0">
            <Skills />

            <div className='soft-skills mt-5'>
                <h3 className='Subtitle text-center p-3'>Soft Skills</h3>
                <div className='row'>

                    {[
                        "Autodidacte",
                        "Autonomie",
                        "Gestion du stress",
                        "Capacité d'adaptation",
                        "Leadership & Communication",
                        "Gestion de projet et respect des délais"
                    ].map((skill, index) => (

                        <div key={index} className='col-6 d-flex align-items-center mb-3 ps-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>
                            <p className='text ps-2 mb-0'>{skill}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>


        {/* Partie droite : CV */}
        <div className="CV card right-section  w-lg-50 ps-lg-4 mx-5 mb-5 d-flex justify-content-center align-items-center text-center">
           <img className="cv-img mb-3 pt-4" src={CV} alt="présentation du CV" />
            <div className="card-body">
                <h5 className="card-title Subtitle">Curriculum vitae</h5>
                <p className="card-text text">Recherche de stage d'une durée de 350h pour validation d'examen en tant que Développeur Web & Mobil FullStack</p>
                <a href="/CV-BADIN-Simon.pdf" download class="btn btn-primary m-3 p-2">Télécharger mon CV</a>
            </div>
        </div>

    </div>
</div>
    )
};

export default Competences;
