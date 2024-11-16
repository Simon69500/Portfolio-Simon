import '../SCSS/Skills.scss';

function SkillBar ({skill, level}) {

        return(
            <div className="skill-bar">
                <div className="skill-name">{skill}</div>
                <div>
                    <p className='skill-level'>{level}%</p>   
                    <progress className='skill-bar-level' value={level} max="100"></progress>
                </div>
                
            </div>
        )
    
};

    function Skills(){

        const skills = [
            {name:'HTML', level: 100},
            {name:'CSS / SASS', level: 100},
            {name:'JavaScript', level:80},
            {name:'Vue.js', level: 50},
            {name:'ReactJS', level:70},
            {name:'Angular', level:50}
        ];

        return (
            <div className="contenair-skills">
                <h3 className='skill-title-1'>Skills</h3>
                <h4 className='skill-title-2'>Front-End</h4>
                {skills.map((skill, index) =>(
                    <SkillBar key={index} skill ={skill.name} level={skill.level} />
                ))}
            </div>
        );
    }



export default Skills;