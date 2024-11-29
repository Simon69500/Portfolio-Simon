import Skills from "../Component/Skills";
import '../SCSS/Competences.scss';
import CV from '../asset/CV.jpg';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
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
                    <Skills/>
            
                <div className="contenair-cv">
                    <h3 className="cv-title">Mon CV</h3>
                    <img className="cv-img" src={CV} alt="" />
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        sx={{
                            background: "#fdfdfe",
                            color: "#1f2d5c",
                            margin: '10px',                         
                        }}
                    >
                        Telecharger mon CV
                    <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
                    multiple
                    />
                    </Button>
                </div>
            </div>
                        
        </div>       
        </>
             
    )
};

export default Competences ;