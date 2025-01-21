import '../SCSS/Skills.scss';
import { Icones } from "../Component/Icons/Icones";

function SkillBar({ skill }) {
    return (
        <div className="skill-bar">
            <div className="card-logo">
                <img className="skill-img" src={skill.img} alt={skill.name} />
                <div className="skill-name">{skill.name}</div>
            </div>
        </div>
    );
}

function Skills() {
    // Compétences Frontend
    const skillsFront = [
        { name: 'ReactJS-Native', img: Icones.react },
        { name: 'Next.js', img: Icones.nextjs },
        { name: 'Vue.js', img: Icones.vue },
        { name: 'Expo', img: Icones.expo },
        { name: 'JavaScript', img: Icones.scriptJava },
        { name: 'TypeScript', img: Icones.typescript },
        { name: 'CSS3 / SASS', img: Icones.css3 },
        { name: 'HTML5', img: Icones.html5 },
    ];

    // Compétences Backend
    const skillsBackend = [
        { name: 'Node.js', img: Icones.nodejs },
        { name: 'Express', img: Icones.express },
        { name: 'MongoDB', img: Icones.mongodb },
        { name: 'Strapi', img: Icones.strapi },
        { name: 'Stripe', img: Icones.stripe },
    ];

    // Outils et Plateformes
    const skillsTools = [
        { name: 'GitHub', img: Icones.github },
        { name: 'Netlify', img: Icones.netlify },
        { name: 'TanStack Query', img: Icones.tanStackQuery },
        { name: 'Cloudinary', img: Icones.cloudinary },
        { name: 'Retool', img: Icones.retool },
        { name: 'OpenAI', img: Icones.openai },
    ];

    return (
        <div className="contenair-skills">
            <div className="skill-card-title">
                <h3 className="skill-title-1">Skills</h3>
            </div>
            
            {/* Frontend */}
            <div className="skill-category">
                <h4 className="skill-title-2">Frontend</h4>
                <div className="skill-card-logo">
                    {skillsFront.map((skill, index) => (
                        <SkillBar key={index} skill={skill} />
                    ))}
                </div>
            </div>
            
            {/* Backend */}
            <div className="skill-category">
                <h4 className="skill-title-2">Backend</h4>
                <div className="skill-card-logo">
                    {skillsBackend.map((skill, index) => (
                        <SkillBar key={index} skill={skill} />
                    ))}
                </div>
            </div>

            {/* Outils et Plateformes */}
            <div className="skill-category">
                <h4 className="skill-title-2">Outils et Plateformes</h4>
                <div className="skill-card-logo">
                    {skillsTools.map((skill, index) => (
                        <SkillBar key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
