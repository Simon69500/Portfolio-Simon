import Skills from "../Component/Skills";
import '../SCSS/Competences.scss';
import CV from '../asset/CV.jpg';

import * as React from 'react';
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

                    {/* Partie Skills */}
                    <Skills/>
            
                {/* Partie CV */}
                <div className="contenair-cv">
                    <h3 className="cv-title">Mon CV</h3>
                    <a href="https://drive.google.com/file/d/1oVn2ZC21fYLtccR-7UgA6pdc3-WCwiMJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <img className="cv-img" src={CV} alt="image du CV" />
                    </a>

                    
                    <Box 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignContent: 'center',
                            justifyContent: 'space-evenly'
                        }}
                    >
                    <Button
                        component="a"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        sx={{
                            background: "#93B4FF",
                            color: "#172448",
                            margin: '10px',                         
                        }}
                        href="https://drive.google.com/file/d/1oVn2ZC21fYLtccR-7UgA6pdc3-WCwiMJ/view?usp=sharing"
                        download="CV-BADIN-Simon.pdf"
                    >
                        Mon CV
                    <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
                    multiple
                    />
                    </Button>
                    <Button
                        component="a"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        sx={{
                            background: "#93B4FF",
                            color: "#172448",
                            margin: '10px',                         
                        }}
                        href="https://drive.google.com/file/d/1sEqgIOQJbh-YdrrOZ7wluUOLqps7-_t3/view?usp=sharing"
                        download="Lettre de motivation - Badin.pdf"
                    >
                         Ma Lettre de Motivation
                    <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
                    multiple
                    />
                    </Button>
                    <Button
                        component="a"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        sx={{
                            background: "#93B4FF",
                            color: "#172448",
                            margin: '10px',                         
                        }}
                        href="https://drive.google.com/file/d/1wkzCETFFy_1D-wHKHgjNpxZWUI1BnyKo/view?usp=sharing"
                        download="Le_Reacteur_Programme_Alternance.pdf"
                    >
                        Mon Programme de Formation
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