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
                        <p>Le Centre Européen de Formation - Formation de <strong className='textStrong'>Développeur FullStack</strong> - en cours de formation <br/> <br /> 
                            Suivie d'un   <strong className='textStrong'>stage en entreprise</strong> - "a partir de Septembre 2025", sur une durée de 2 mois.  
                        </p>
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
