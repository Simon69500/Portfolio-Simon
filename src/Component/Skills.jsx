import '../SCSS/Skills.scss';
import { Icones } from "../Component/Icons/Icones";

function SkillBar ({skill, level}) {

        return(
            <div className="skill-bar">
                <div className='card-logo'>
                    <img className='skill-img' src={skill.img} alt={skill.name} />
                    <div className="skill-name">{skill.name}</div>
                </div>
                
            </div>
        )
    
};

    function Skills(){

        const skills = [
            {name:'HTML5', img: Icones.html5, niveau: 'Confirmé'},
            {name:'CSS3', img: Icones.css3, niveau: 'Confirmé'},
            {name:'JavaScript', img: Icones.scriptJava, niveau: 'Intermédiaire'},
            {name:'Vue.js', img: Icones.vue, niveau: 'Débutant'},
            {name:'ReactJS', img: Icones.react, niveau: 'Intermédiaire'},
            {name:'Angular', img: Icones.angular, niveau: 'Débutant'}
        ];

        const skillCms = [
            {name: 'WordPress', level: 60, img : Icones.wordpress, niveau: 'Débutant'}
        ];

        const skillOther = [
            {name : 'GitHub', level: 70, img: Icones.github, niveau: 'Intermédiaire'},
            {name: 'Figma', level: 50, img: Icones.figma, niveau: 'Débutant'}

        ]

        return (
            <div className="contenair-skills">
                <div className='skill-card-title'>
                <h3 className='skill-title-1'>Skills</h3>
                <h4 className='skill-title-2'>Front-End</h4>
                </div>
                <div className='skill-card-logo'>
                {skills.map((skill, index) =>(
                    <SkillBar key={index} skill={skill}  />
                ))}
                {skillCms.map((skill, index) =>(
                    <SkillBar key={index} skill={skill} />
                ))}
                {skillOther.map((skill, index) =>(
                    <SkillBar key={index} skill={skill} />
                ))}
                </div>
            </div>
        );
    }



export default Skills;