import '../SCSS/Home.scss';
import Banniere from '../asset/banniere2.jpg';
import About from '../sous-pages/About';
import Competences from '../sous-pages/Competences';
import Portfolio from '../sous-pages/Portfolio';
import Formulaire from '../Component/Formulaire/Formulaire';
import Footer from '../Component/Footer';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Home = () => {

  
    return (
        <>
            
                <main id='main'> 
                    {/* Partie Bannière */}
                    <div className='presentation' style={{backgroundImage: `url(${Banniere})`}}>
                    <h1 className='title_name'>Simon Badin-Sola</h1>
                    <h2 className='title_profession'>Developpeur Mobile & Web - Fullstack</h2>
                    <Stack sx={{padding:"10px"}} direction="row" spacing={2}>
                        <Button variant="contained" href="https://www.linkedin.com/in/simon-badin-939594279/" target='_blank' rel="noopener noreferrer" >Linkedin</Button>
                        <Button variant="contained" href="#Portfolio">Portfilio</Button>    
                        <Button variant="contained" href="https://github.com/Simon69500" target='_blank' rel="noopener noreferrer" >GitHub</Button> 
                    </Stack>                      
                    </div>

                    {/* Partie A propos*/}
                    <About/>

                    {/* Partie Recherche Emploi */}
                    <div id='Actual'>    
                        <h3 className='title-actual'>Actuellement : </h3>
                        <p>En recherche d'alternance </p>
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
