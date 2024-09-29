import '../SCSS/Home.scss';

const Home = () => {
    return (
        <>
            <body id='body'>
                <main className='main'> 

                    <div className='about'>
                    <h1 className='title_principal'>Simon Badin-Sola</h1>
                    <h2 className='title_second'>Developpeur Mobile & Web - Fullstack</h2>
                    <button className='button'>Plus d'info</button>
                    </div>

                    <div className='about_detail'>
                        <h2 className='title_second'>A propos de moi</h2>
                        <article className='contenair_about'>
                            <p className='text_about'>Bonjour, <br/>Je suis un developpeur Mobile &  Web formé avec le centre de formation CEF (lien) et vis actuellement sur Lyon . J’ai une expérience professionel diverse qui m’a enrechi et donner des compétences utiles et variés .
                             Fraîchement diplômé , je recherche actuellement à aquerir plus d’experience avec des stages et une alternance afin de monter en compétence technique.
                             Passionné par les technologies , la montagne et la lecture , je suis ouvert à tous types de secteurs et pourrait faire profiter de mon expérience aquis et des mes qualités d’organisation .
                             </p>
                        </article>
                    </div>

                    <div className='Actual'>    
                        <h3>Actuellement : </h3>
                        <p>En recherche d'opportunités</p>
                    </div>
                     
                     <section className='skill_contenair'>
                     <h3 className='title_second'>Mes compétences</h3>
                     <div className='skill'>
                        <div className='skill_detail'>
                            <h4>Front-End</h4>
                            <p className='skill_name'>HTML</p>
                                <div className='skill_barre'>100%</div>
                            <p className='skill_name'>CSS/SCSS</p>
                                <div className='skill_barre'>100%</div>
                            <p className='skill_name'>Bootstap</p>
                                <div className='skill_barre'>80%</div>
                            <p className='skill_name'>Javascript</p>
                                <div className='skill_barre'>80%</div>
                            <p className='skill_name'>Vue.js</p>
                                <div className='skill_barre'>50%</div>
                            <p className='skill_name'>React.js</p>
                                <div className='skill_barre'>90%</div>
                            <p className='skill_name'>Angular</p>
                                <div className='skill_barre'>60%</div>
                        </div>

                        <div className='CV'>
                            <h4>CV</h4>
                        </div>
                    </div>
                     </section>

                    <section className='portfolio'>
                        <h3>Portfolio</h3>
                        <div className='card_contenair'>
                            <div className='cards'>
                                <p className='card'>projet </p>
                                <p className='card'>projet </p>
                                <p className='card'>projet </p>
                                <p className='card'>projet </p>
                            </div>
                        </div>
                    </section>   

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
            </body>
        </>
    )
};

export default Home;
