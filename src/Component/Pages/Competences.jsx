import '@scss/index.scss';
import Skills from "../layouts/Skills";
import About from './About';
import CV from '@img/CV.jpg';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Competences = () => {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    return (

<div className="Competences">
    <h2 className="title text-center fs-2 py-4">Mes compétences</h2>

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
        <div className="right-section w-75 w-lg-50 ps-lg-4 text-center">
            <h3 className="cv-title mb-3">Mon CV</h3>
            <a href="https://drive.google.com/file/d/1WezKAjfjamqCfPSN4Ke2mGqWt14Gz5HU/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <img className="cv-img mb-3" src={CV} alt="présentation du CV" />
            </a>

            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center', 
                    alignItems: 'center', 
                }}
            >
                <Button 
                    className="Button-Competence"
                    component="a"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    sx={{
                        background: "#5D5D5D",
                        color: "#D1D1D1",
                        margin: '10px',  
                        width: '150px',
                        borderRadius: '50px',
                        border:"1px solid #8F8F8F"                      
                    }}
                    href="https://drive.google.com/file/d/1WezKAjfjamqCfPSN4Ke2mGqWt14Gz5HU/view?usp=drive_link"
                    download="CV-BADIN-Simon.pdf"
                    target='_blank'
                >
                    CV
                    <VisuallyHiddenInput
                        type="file"
                        onChange={(event) => console.log(event.target.files)}
                        multiple
                    />
                </Button>
            </Box>
        </div>

    </div>
</div>
    )
};

export default Competences;
