import '@scss/index.scss';
import { Technologies } from '../../data/technologies';

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
        Technologies.HTML,
        Technologies.CSS,
        Technologies.JavaScript,
        Technologies.TypeScript,
        Technologies.VueJS,
        Technologies.ReactJS,
        Technologies.Angular,
        Technologies.SASS,
        Technologies.Bootstrap,
    ];

    // Compétences Backend
    const skillsBackend = [
        Technologies.NodeJS,
        Technologies.Express,
        Technologies.MongoDB,
        Technologies.MySQL,
        Technologies.PHP,
        Technologies.Symfony,
    ];

    // Outils et Plateformes
    const skillsTools = [
        Technologies.GitHub,
        Technologies.OpenAI,
        Technologies.WordPress,
        Technologies.Figma,
        Technologies.Render,
        Technologies.Alwaysdata,

        

    ];

    return (
        <div className="container d-flex flex-column align-items-center justify-content-evenly ">
            <h3 className="Subtitle text-center p-3"> Hard Skills</h3>
            
            {/* Frontend */}
            <div className="w-100 m-2">
                <h4 className="Subtitle fs-4">Frontend</h4>
                <div className="d-flex flex-row justify-content-evenly flex-wrap">
                    {skillsFront.filter(Boolean).map((skill) => (
                        <SkillBar key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
            
            {/* Backend */}
            <div className="w-100 m-2">
                <h4 className="Subtitle fs-4">Backend</h4>
                <div className="d-flex flex-row justify-content-evenly flex-wrap">
                    {skillsBackend.filter(Boolean).map((skill) => (
                       <SkillBar key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>

            {/* Outils et Plateformes */}
            <div className="w-100 m-2">
                <h4 className="Subtitle fs-4">Outils et Plateformes</h4>
                <div className="d-flex flex-row justify-content-evenly flex-wrap">
                    {skillsTools.filter(Boolean).map((skill) => (
                        <SkillBar key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
