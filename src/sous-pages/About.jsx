import "../SCSS/About.scss";

const About = () => {

    return (
        <>
        <div id='about'>
            <h2 className='title_second'>A propos de moi</h2>
            <article className='about_article'>
                <p className='text_about'>Bonjour, <br/>Je suis un <strong>developpeur Mobile &  Web </strong>formé avec le centre de formation CEF (lien) et vis actuellement sur Lyon . J’ai une expérience professionel diverse qui m’a enrechi et donner des compétences utiles et variés .
                             Fraîchement diplômé , je recherche actuellement à aquerir plus d’experience avec des stages et une alternance afin de monter en compétence technique.
                             Passionné par les technologies , la montagne et la lecture , je suis ouvert à tous types de secteurs et pourrait faire profiter de mon expérience aquis et des mes qualités d’organisation .
                 </p>
            </article>
            <div className="card-comp">
                <p className="card-comp-detail">fullstack</p> 
                <p className="card-comp-detail">JavaScript</p>
                <p className="card-comp-detail">ReacJS</p>
            </div>
        </div>
        </>
    )

};

export default About;