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
    Bonjour, <br />
    Je suis <strong>Simon Badin</strong>, actuellement en reconversion pour devenir développeur <strong>full-stack</strong>. Passionné par l'<em>informatique</em> et la <em>cybersécurité</em>, je cherche à m'investir dans <strong>un contrat d'apprentissage</strong> qui me permettra de renforcer mes compétences tout en apportant une <strong>valeur ajoutée</strong> à des projets concrets. <br /><br />
    Mon parcours professionnel m’a permis d’acquérir des compétences transférables uniques. Après avoir dirigé des équipes en <strong>plomberie</strong> et servi en tant que <strong>Chasseur Alpin</strong> dans l’armée, j’ai appris à <em> gérer des projets complexes</em>, à <em>respecter des délais serrés</em> et à <em>résoudre des problèmes sous pression</em>.
    <br /><br />
     Ces expériences m’ont aussi permis de développer un fort <span>esprit d’équipe</span>, un sens de <span>l’adaptation</span>, et un <span>leadership naturel</span>. Autant de qualités que je mets aujourd’hui au service de ma reconversion dans le <em>développement</em>. 
     <br /><br />
    Ma reconversion n’est pas un hasard, elle découle d’une réflexion profonde et d’une volonté de changement après des soucis de santé qui m’ont forcé à quitter le <strong>BTP</strong>. Cette pause m’a permis de me réinventer et de découvrir ma <em>passion</em> pour le <em>développement web</em>, un secteur où je peux apporter des solutions innovantes tout en continuant à apprendre et à évoluer. La <em>cybersécurité</em> m’attire particulièrement car elle répond à des enjeux cruciaux pour les entreprises et les utilisateurs. Je veux contribuer à la <strong>sûreté</strong> des systèmes informatiques et relever les défis que ce domaine passionnant propose. <br /><br />
    Aujourd'hui, je suis déterminé à mettre mon <strong>expérience</strong>, ma capacité d'<span>apprentissage</span> et mes <span>qualités humaines</span> au service de vos projets. Si vous cherchez un développeur <strong>rigoureux</strong>, <strong>motivé</strong> et capable de s’adapter rapidement aux défis, n’hésitez pas à me contacter. Je suis prêt à me lancer dans cette nouvelle aventure professionnelle et à apporter ma vision unique à votre équipe. <br /><br />
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