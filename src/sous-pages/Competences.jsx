import Skills from "../Component/Skills";
import '../SCSS/Competences.scss';
import CV from '../asset/CV.jpg';

const Competences = () => {
    return(
        <>
        <div className="contenair-cpts">
        <h2 className="title_divers">Mes compétences</h2>
            <div className="card-cpts">
                    <Skills/>
            
                <div className="contenair-cv">
                    <h3 className="cv-title">Mon CV</h3>
                    <img className="cv-img" src={CV} alt="" />
                    <button className="cv-button" >Telecharger mon CV</button>
                </div>
            </div>
                        
        </div>       
        </>
             
    )
};

export default Competences ;