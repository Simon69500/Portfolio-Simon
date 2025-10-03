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

    return(
        <>
        <div id="Competences">
        <h2 className="title_divers">Mes compétences</h2>
            <div className="card-cpts">

                {/* Partie Présentation (About) */}
                <About/>

                {/* Partie Skills */}
                <Skills/>
            
                {/* Partie CV */}
                <div className="contenair-cv">
                    <h3 className="cv-title">Mon CV</h3>
                    <a href="https://drive.google.com/file/d/1WezKAjfjamqCfPSN4Ke2mGqWt14Gz5HU/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        <img className="cv-img" src={CV} alt="présentation du CV" />
                    </a>

                    <Box 
                         sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around', 
                            alignItems: 'center', 
                        }}
                    >
                    <Button className="Button-Competence"
                        component="a"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        sx={{
                            background: "#5D5D5D",
                            color: "#D1D1D1",
                            margin: '10px',  
                            width: '150px',
                            borderRadius: '50px',
                            border:" solid , 1px ,#8F8F8F"                       
                        }}
                        href="https://drive.google.com/file/d/1WezKAjfjamqCfPSN4Ke2mGqWt14Gz5HU/view?usp=drive_link"
                        download="CV-BADIN-Simon.pdf"
                        target='_blanck'
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
        </>
             
    )
};

export default Competences ;