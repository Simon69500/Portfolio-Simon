import '../SCSS/Home.scss';
import Banniere from '../asset/bannière4.png';
import About from '../sous-pages/About';
import Competences from '../sous-pages/Competences';
import Portfolio from '../sous-pages/Portfolio';
import Formulaire from '../Component/Formulaire/Formulaire';
import Footer from '../Component/Footer';
import Header from '../Component/Header';

import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';


const Home = () => {

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
        <>
            <Header /> 
                <main id='main'> 
                    {/* Partie Bannière */}
                    <div className='presentation' style={{backgroundImage: `url(${Banniere})`, backgroundPosition: '0% 20%'}}>                    
                        <h1 className='title_name'>Simon Badin</h1>
                    <h2 className='title_profession'>Developpeur Mobile & Web</h2>
                    <Stack sx={{padding:"10px"}} direction="row" spacing={2}>
                        <Button sx={{color:"#D1D1D1", background:"#3A3A3A",border:" solid , 1px ,#8F8F8F" , borderRadius:"50px"}} variant="contained" href="https://www.linkedin.com/in/simon-badin-939594279/" target='_blank' rel="noopener noreferrer" >Linkedin</Button>
                        <Button sx={{color:"#D1D1D1", background:"#3A3A3A",border:" solid , 1px ,#8F8F8F" , borderRadius:"50px"}} variant="contained" href="#Portfolio">Portfilio</Button>    
                        <Button sx={{color:"#D1D1D1", background:"#3A3A3A",border:" solid , 1px ,#8F8F8F" , borderRadius:"50px"}} variant="contained" href="https://github.com/Simon69500" target='_blank' rel="noopener noreferrer" >GitHub</Button> 
                    </Stack>                      
                    </div>

                    {/* Partie A propos*/}
                    <About/>

                    {/* Partie Recherche Emploi */}
                    <div id='Actual'>    
                        <h3 className='title-actual'>Actuellement : </h3>
                        <p><a className='link-ecole' href="https://www.lereacteur.io/formation-alternance/concepteur-developpeur-applications/" target='_blank'>Le Reacteur</a> - Formation de <strong className='textStrong'>Développeur FullStack</strong> - "début le 28 avril 2025", sur 10 semaines. <br/>  
                            Suivie d'une formation de <strong className='textStrong'>Concepteur Développeur d'Applications</strong> - "début mi-juillet 2025", en alternance <em>(contrat d'apprentissage)</em>.  
                        </p>
                        <Button
                        component="a"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        sx={{
                            background: "#3A3A3A",
                            color: "#D1D1D1",
                            margin: '10px',
                            width: '180px',
                            borderRadius: '50px',
                            border:" solid , 1px ,#8F8F8F" ,                         
                        }}
                        className='buttonActual'
                        href="https://drive.google.com/file/d/1wkzCETFFy_1D-wHKHgjNpxZWUI1BnyKo/view?usp=sharing"
                        download="Le_Reacteur_Programme_Alternance.pdf"
                        target='_blanck'
                    >
                        En Savoir +
                    <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
                    multiple
                    />
                    </Button>

                    </div>

                    {/* Partie Mes compétences + Skill */} 
                     <Competences />

                    {/* Partie Portfolio */} 
                     <Portfolio />

                    {/* Partie Formulaire */}  
                    <Formulaire />

                    {/* Partie Formulaire */}  
                    <Footer/>
                </main>
        </>
    )
};

export default Home;
