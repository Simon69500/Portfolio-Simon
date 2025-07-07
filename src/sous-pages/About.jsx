import "../SCSS/About.scss";
import { Icones } from "../Component/Icons/Icones";


const About = () => {

    return (
        <>
        <div id='about'>
            <h2 className='title-about'>A propos de moi</h2>
            <article className='about_article'>
                <img src={Icones.profil2} alt="Simon Badin" className="photo-about"/>
                <p className='text_about'>
                <h3>Bonjour</h3>
                Je suis <strong> Simon Badin </strong>, <strong> développeur fullstack web & mobile en reconversion. </strong> 
                Fort d’une expérience en gestion de projets complexes dans le BTP et l’armée, je mets aujourd’hui ma rigueur, 
                mon esprit d’équipe et mon leadership au service du développement web.
                Je recherche un <strong> stage en entreprise </strong>dans la région lyonnaise pour valider ma formation et contribuer à des projets concrets. 
                Curieux et motivé, je suis prêt à relever de nouveaux défis techniques.
                                </p>






            </article>
            <div className="card-icon">
                <img className="icon" src={Icones.github2} alt="icon de GitHub" />
                <img className="icon" src={Icones.scriptJava} alt="icon de JavaScript" />
                <img className="icon" src={Icones.react2} alt="icon de ReactJs" />
            </div>
        </div>
        </>
    )

};

export default About;