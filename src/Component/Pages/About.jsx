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
            Après plusieurs années dans <strong className='text-blue'>l’armée</strong> et le <strong className='text-blue'>BTP</strong>, j’ai appris à <strong className='text-blue'>repousser mes limites</strong>, rester <em className='text-green'>concentré sous pression</em> et <strong className='text-blue'>trouver des solutions efficaces</strong>, même dans les situations les plus exigeantes.  
            Ces expériences m’ont forgé un esprit <span className='text-blue fw-bold'>rigoureux</span>, <span className='text-green fw-bold'>déterminé</span> et <span className='text-blue fw-bold'>orienté résultats</span>.
        </p>

        <p className='text mb-3'>
            Passionné depuis toujours par <strong className='text-blue'>l’informatique</strong> et la <strong className='text-blue'>technologie</strong>, je me suis naturellement tourné vers le <strong className='text-blue'>développement web et mobile</strong>.  
            Créer des applications et des sites me procure la même satisfaction que de mener à bien un projet concret : <em className='text-green'>partir de rien</em> et <strong className='text-blue'>construire quelque chose de fonctionnel et utile</strong>.
        </p>

        <p className='text mb-3'>
            Mon objectif est de mettre ma <strong className='text-blue'>motivation</strong>, ma <span className='text-green fw-bold'>rigueur</span> et mon <strong className='text-blue'>énergie</strong> au service de <strong className='text-blue'>projets concrets</strong>, tout en continuant à apprendre et à me perfectionner dans les <strong className='text-blue'>nouvelles technologies</strong>.
        </p>

        <p className='text mb-0'>
            Curieux, <span className='text-green fw-bold'>persévérant</span> et <strong className='text-blue'>professionnel</strong>, je suis prêt à relever tous les <strong className='text-blue'>défis techniques</strong> qui se présentent.
        </p>
        </div>
    </div>
    </div>
    )
};

export default About;