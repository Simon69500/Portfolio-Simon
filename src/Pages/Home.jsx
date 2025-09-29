import '../SCSS/Home.scss';
import Banniere from '../asset/bannière4.png';
import About from '../sous-pages/About';
import Competences from '../sous-pages/Competences';
import Portfolio from '../sous-pages/Portfolio';
import Formulaire from '../Component/Formulaire/Formulaire';
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const Home = () => {

    return (
        <>  
        {/* Partie Header */}  
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
                            <p>
                            Centre Européen de Formation – Formation <strong className='textStrong'>Développeur Web & Mobile - Full Stack</strong> terminée, en attente de l’examen.  
                            <br /><br />
                            Un <strong className='textStrong'>stage en entreprise</strong> est prévu à partir de <strong>septembre 2025</strong> pour une durée de 3 mois, afin de valider la formation et passer l’examen.
                            </p>

                    </div>

                    {/* Partie Mes compétences + Skill */} 
                     <Competences />

                    {/* Partie Portfolio */} 
                     <Portfolio />

                    {/* Partie Formulaire */}  
                    <Formulaire />

                    {/* Partie Footer */}  
                    <Footer/>
                </main>
        </>
    )
};

export default Home;
