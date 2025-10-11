import '@scss/index.scss';

import Carousel from '../layouts/Carousel';
import { Icones } from "../../data/Icones";
import { Link } from 'react-router-dom';
import Banniere from '@img/Newbannière.jpg';


const Home = () => {

    return (
        <>  
                <main id='main'> 

                    {/* Partie Bannière */}
                    <div className='presentation d-flex flex-column justify-content-center' style={{backgroundImage: `url(${Banniere})`}}> 

                        <h1 className='title text-center'>Developpeur Mobile & Web Full-Stack</h1>
                        <h2 className='subtitle text-center'>Je conçois des applications modernes et performantes</h2>

                        {/* Partie Bouton */}
                        <div className='d-flex flex-row justify-content-center'>
                            <Link type="button" class="btn btn-primary m-3 p-2" to="/portfolio">Voir mes projets</Link>
                            <a href="/CV-BADIN-Simon.pdf" download class="btn btn-primary m-3 p-2">Télécharger mon CV</a>    
                        </div>              
                    </div>

                    {/* Partie Présentation courte */}
                    <div className='about my-5 d-flex flex-column justify-content-center align-items-center'>
                        <h3 className='subtitle text-center pt-4 fs-2'>A propos de moi</h3>
                        <div className='card-text d-flex flex-row justify-content-around pt-3'>
                                <img src={Icones.profil2} alt="Simon Badin" className="photo-about rounded-4 align-content-center"/>
                                <p className='text text-start text-wrap w-75 fs-5 align-content-center'>
                                Je suis un <strong className="textStrong">développeur web & mobile Full Stack</strong>.  
                                Passionné par l’informatique et les nouvelles technologies depuis toujours, j’ai récemment achevé une reconversion pour exercer ce métier qui me motive chaque jour.
                                </p>
                        </div>
                            <Link className='btn btn-primary mb-3' to="/competences">
                            En savoir plus
                            </Link>
                    </div>


                    {/* Partie Recherche emploi */}
                    <div className='actual my-5'>    
                        <h3 className='subtitle text-center pt-4 fs-2'>Actuellement</h3>
                        <div className='card-text d-flex flex-column justify-content-center align-content-center py-2'>
                            <p className="text text-center fs-5 align-content-center">
                            Formation <strong className="textStrong">Développeur Web & Mobile Full Stack</strong> 
                            suivie au <strong>Centre Européen de Formation</strong>, terminée et en attente de l’examen.  
                            <br /><br />
                            Un <strong className="textStrong">stage en entreprise</strong> est prévu à partir de 
                            <strong> octobre 2025</strong> pour une durée de <strong>350 heures</strong>, 
                            pouvant être réparties en plusieurs périodes, afin de valider la formation 
                            et présenter l’examen final.
                            </p>
                        </div>
                        <div className='social-icons d-flex flex-row justify-content-center align-content-center pb-2'>
                            <a className='p-2' href="https://github.com/Simon69500" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </a>
                            <a className='p-2' href="https://www.linkedin.com/in/simon-badin-939594279/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg>
                            </a>                            
                        </div>
                    </div>

                    {/* Partie Présentation projets */}
                    <div className='portfolio my-5'>
                        <h3 className='subtitle text-center pt-4 fs-2'>Mes projets</h3>
                        <div>
                            <Carousel/>
                        </div>
                    </div>
                </main>
        </>
    )
};

export default Home;
