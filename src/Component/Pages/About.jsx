import '@scss/index.scss';
import { Icones } from "../../data/Icones";


const About = () => {

    return (
    <div className='about p-md-5 p-2'>

    {/* Visible uniquement sur desktop (md et +) */}
    <h2 className='title text-center mt-md-3 mb-md-4 d-none d-md-block'>À propos de moi</h2>

    <div className='about_article d-flex flex-column flex-md-row align-items-center justify-content-center text-center text-md-start'>

        {/* Image desktop (visible md et +) */}
        <img 
            src={Icones.profil2} 
            alt="Simon Badin" 
            className="photo-about rounded-4 m-2 d-none d-md-block"
        />

        {/* Bloc mobile (visible uniquement sur petits écrans) */}
        <div className='d-block d-md-none text-center'>
            <img 
            src={Icones.profil2} 
            alt="Simon Badin" 
            className="photo-about rounded-4 m-2"
            />
            <h2 className='title text-center mt-md-3 mb-md-4'>À propos de moi</h2>
        </div>

        {/* Texte commun */}
        <div className='m-2 ps-md-3 w-md-75'>
        <p className='text mb-3'>
            Après plusieurs années dans l’armée et le BTP, j’ai appris à repousser mes limites, rester concentré sous pression et trouver des solutions efficaces, même dans les situations les plus exigeantes.  
            Ces expériences m’ont forgé un esprit rigoureux, déterminé et orienté résultats.
        </p>

        <p className='text mb-3'>
            Passionné depuis toujours par l’informatique et la technologie, je me suis naturellement tourné vers le développement web et mobile.  
            Créer des applications et des sites me procure la même satisfaction que de mener à bien un projet concret : partir de rien et construire quelque chose de fonctionnel et utile.
        </p>

        <p className='text mb-3'>
            Mon objectif est de mettre ma motivation, ma rigueur et mon énergie au service de projets concrets, tout en continuant à apprendre et à me perfectionner dans les nouvelles technologies.
        </p>

        <p className='text mb-0'>
           Curieux, persévérant et professionnel, je suis prêt à relever tous les défis techniques qui se présentent.
        </p>
        </div>
    </div>
    </div>
    )
};

export default About;