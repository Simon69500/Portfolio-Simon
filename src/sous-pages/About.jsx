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
  Bonjour, <br/>
  Je suis <strong>Simon Badin</strong>, actuellement en formation pour devenir <strong>développeur full-stack</strong>, après une réorientation professionnelle. 
  Avec des bases solides en <strong>front-end</strong> (<em>HTML</em>, <em>CSS</em>, <em>JavaScript</em>, <em>React</em>), je suis passionné par le développement web et cherche activement une <strong>alternance </strong> 
   pour compléter ma formation et acquérir une expérience concrète en entreprise.
  <br/><br/>
  Mon parcours dans des secteurs variés tels que la <strong>vente</strong>, <strong>l’armée</strong> et la <strong>plomberie</strong> m’a permis de développer des compétences clés comme <span> la  rigueur </span>, 
  <span> l’esprit d’équipe </span>  et <span>la résolution de problèmes complexes</span>. 
  <br/><br/>
  Ces qualités, associées à ma volonté <strong>d'apprendre</strong> et de <strong>m'adapter</strong>, font de moi un candidat motivé, prêt à contribuer à vos projets 
  tout en progressant dans le développement web.
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