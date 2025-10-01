import '@scss/index.scss';

import Carousel from '../layouts/Carousel';
import { Icones } from "../ui/Icones";
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
                    <div className='about my-5'>
                        <h3 className='subtitle text-center pt-4 fs-2'>A propos de moi</h3>
                        <div className='card-text d-flex flex-row justify-content-around pt-3'>
                                <img src={Icones.profil2} alt="Simon Badin" className="photo-about rounded-4 align-content-center"/>
                                <p className='text text-start text-wrap w-75 fs-5 align-content-center'>
                                Je suis un <strong className="textStrong">développeur web & mobile Full Stack</strong>.  
                                Passionné par l’informatique et les nouvelles technologies depuis toujours, j’ai récemment achevé une reconversion pour exercer ce métier qui me motive chaque jour.
                                </p>
                        </div>
                        <div className="d-flex justify-content-center py-3 ">
                            <Link className='btn btn-primary mb-3' to="/competences">
                            En savoir plus
                            </Link>
                        </div>
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
                    </div>

                    {/* Partie Présentation projets */}
                    <div className='portfolio mt-5'>
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
