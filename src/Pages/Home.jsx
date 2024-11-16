import '../SCSS/Home.scss';
import Banniere from '../asset/banniere2.jpg';
import About from '../sous-pages/About';
import Competences from '../sous-pages/Competences';
import Portfolio from '../sous-pages/Portfolio';

const Home = () => {
    return (
        <>
            
                <main className='main'> 
                    {/* Partie Bannière */}
                    <div className='presentation' style={{backgroundImage: `url(${Banniere})`}}>
                    <h1 className='title_name'>Simon Badin-Sola</h1>
                    <h2 className='title_profession'>Developpeur Mobile & Web - Fullstack</h2>
                    <button className='button-present'>Plus d'info</button>
                    </div>

                    <About/>

                    {/* Partie Recherche Emploi */}
                    <div className='Actual'>    
                        <h3 className='title-actual'>Actuellement : </h3>
                        <p>En recherche d'alternance </p>
                    </div>

                    {/* Partie Mes compétences + Skill */} 
                     <Competences/>
                    {/* Partie Portfolio */} 
                     <Portfolio/>
                    {/* Partie Formulaire */}  
                    <section className='formulaire'>
                        <h3>Formulaire</h3>
                    <form action="" className='form'>
                        
                        <input type="text" id="name" placeholder='Votre nom' />

                        <input type="text" id="society" placeholder='société' />
                        
                        <input type="text" id="email" placeholder='votre email'/>

                        <input type="text" id="tel" placeholder='votre numéro ' />

                        <textarea type="text" placeholder='votre message...' />
                    </form>
                    </section>
                    
                </main>
        </>
    )
};

export default Home;
