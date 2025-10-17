import '@scss/index.scss';
import Skills from "../layouts/Skills";
import About from './About';
import CV from '@img/CV.png';

const Competences = () => {

    return (

<div className="Competences container-fluid py-5">
    <h1 className="title text-center fs-1 py-4">Mes compétences</h1>

    {/* Partie About full width */}
        <About />

    {/* Partie Skills + Soft Skills à gauche et CV à droite */}
    <div className="container-skill row justify-content-center align-items-start mt-5 px-lg-5 g-4">
        
        {/* Partie gauche : Skills + Soft Skills */}
        <div className="col-12 col-lg-7 px-lg-4">
            <Skills />

            <div className='soft-skills mt-5'>
                <h3 className='Subtitle text-center p-md-3 p-1'>Soft Skills</h3>
                <div className='row justify-content-center'>

                    {[
                        "Autodidacte",
                        "Autonomie",
                        "Gestion du stress",
                        "Capacité d'adaptation",
                        "Leadership & Communication",
                        "Gestion de projet et respect des délais"
                    ].map((skill, index) => (

                        <div key={index} className='col-md-6 col-10 d-flex align-items-center mb-md-3 mb-2 ps-md-5 ps-2'>
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
        <div className="col-12 col-lg-5 d-flex justify-content-center">
        <div className="card text-center p-4 shadow-sm w-100" style={{ maxWidth: "500px" }}>
            <img
                src={CV}
                alt="présentation du CV"
                className="img-fluid rounded mb-3"
                style={{ maxHeight: "550px", objectFit: "contain" }}
            />
            <div className="card-body">
            <h5 className="card-title Subtitle">Curriculum Vitae</h5>
            <p className="text text_cv fst-italic">
                <strong className='text-strong'>Recherche de stage</strong> d'une durée de 350h pour validation d'examen en tant que Développeur Web & Mobile FullStack
            </p>
            <a
                href={`${process.env.PUBLIC_URL}/CV-BADIN_Simon_DevWeb2.pdf`}
                download
                className="btn btn-primary btn-sm"
            >
                Télécharger mon CV
            </a>
            </div>
        </div>
        </div>

    </div>
</div>
    )
};

export default Competences;
