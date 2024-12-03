import '../SCSS/Skills.scss';
import { Icones } from "../Component/Icons/Icones";

function SkillBar ({skill, level}) {

        return(
            <div className="skill-bar">
                <div className='card-logo'>
                    <img className='skill-img' src={skill.img} alt={skill.name} />
                    <div className="skill-name">{skill.name}</div>
                </div>
                <div>
                    <p className='skill-level'>{level}%</p>   
                    <progress className='skill-bar-level' value={level} max="100"></progress>
                </div>
                
            </div>
        )
    
};

    function Skills(){

        const skills = [
            {name:'HTML5', level: 100, img: Icones.html5},
            {name:'CSS3 / SASS', level: 100, img: Icones.css3},
            {name:'JavaScript', level:80, img: Icones.scriptJava},
            {name:'Vue.js', level: 50, img: Icones.vue},
            {name:'ReactJS', level:70, img: Icones.react},
            {name:'Angular', level:50, img: Icones.angular}
        ];

        const skillCms = [
            {name: 'WordPress', level: 60, img : Icones.wordpress}
        ];

        const skillOther = [
            {name : 'GitHub', level: 100, img: Icones.github},
            {name: 'Figma', level: 50, img: Icones.figma}

        ]

        return (
            <div className="contenair-skills">
                <h3 className='skill-title-1'>Skills</h3>
                <h4 className='skill-title-2'>Front-End</h4>
                {skills.map((skill, index) =>(
                    <SkillBar key={index} skill={skill} level={skill.level} />
                ))}
                <h4 className='skill-title-2'>CMS</h4>
                {skillCms.map((skill, index) =>(
                    <SkillBar key={index} skill={skill} level={skill.level} />
                ))}
                <h4 className='skill-title-2'>Autres</h4>
                {skillOther.map((skill, index) =>(
                    <SkillBar key={index} skill={skill} level={skill.level} />
                ))}
            </div>
        );
    }



export default Skills;