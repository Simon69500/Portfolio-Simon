import '@scss/index.scss';
import { Icones } from "../ui/Icones";

function SkillBar({ skill }) {
    return (
        <div className="skill-bar">
            <div className="m-2 d-flex flex-column align-items-center">
                <img className="skill-img" src={skill.img} alt={skill.name} />
                <div className="text text-center">{skill.name}</div>
            </div>
        </div>
    );
}

function Skills() {
    // Compétences Frontend
    const skillsFront = [
        { name: 'HTML5', img: Icones.html5 },
        { name: 'CSS3', img: Icones.css3 },
        { name: 'JavaScript', img: Icones.scriptJava },
        { name: 'TypeScript', img: Icones.typescript },
        { name: 'Vue.js', img: Icones.vue },
        { name: 'ReactJS', img: Icones.react },
        { name: 'Angular', img: Icones.angular},
        { name: 'Sass', img: Icones.sass},
        { name: 'Bootstrap', img: Icones.bootstrap},
    ];

    // Compétences Backend
    const skillsBackend = [
        { name: 'Node.js', img: Icones.nodejs },
        { name: 'Express', img: Icones.express },
        { name: 'MongoDB', img: Icones.mongodb },
        { name: 'MySQL', img: Icones.mysql },
        { name: 'PHP', img: Icones.php },
        { name: 'Symfony', img: Icones.symfony },

    ];

    // Outils et Plateformes
    const skillsTools = [
        { name: 'GitHub', img: Icones.github },
        { name: 'OpenAI', img: Icones.openai },
        { name: 'WordPress', img: Icones.wordpress},
        { name: 'Figma', img: Icones.figma },
        { name: 'Render', img: Icones.render },
        { name: 'Alwaysdata', img: Icones.alwaysdata },

        

    ];

    return (
        <div className="container d-flex flex-column align-items-center justify-content-evenly ">
            <h3 className="Subtitle text-center p-3"> Hard Skills</h3>
            
            {/* Frontend */}
            <div className="w-100 m-2">
                <h4 className="Subtitle fs-4">Frontend</h4>
                <div className="d-flex flex-row justify-content-evenly flex-wrap">
                    {skillsFront.map((skill, index) => (
                        <SkillBar key={index} skill={skill} />
                    ))}
                </div>
            </div>
            
            {/* Backend */}
            <div className="w-100 m-2">
                <h4 className="Subtitle fs-4">Backend</h4>
                <div className="d-flex flex-row justify-content-evenly flex-wrap">
                    {skillsBackend.map((skill, index) => (
                        <SkillBar key={index} skill={skill} />
                    ))}
                </div>
            </div>

            {/* Outils et Plateformes */}
            <div className="w-100 m-2">
                <h4 className="Subtitle fs-4">Outils et Plateformes</h4>
                <div className="d-flex flex-row justify-content-evenly flex-wrap">
                    {skillsTools.map((skill, index) => (
                        <SkillBar key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
