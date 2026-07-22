import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { softSkillsData } from "../../data/profileData";

// Changement du nom pour éviter le conflit avec recharts
const RadarChartComponent = () => {
    return (

        <div className="w-full h-[220px] sm:h-[250px]">
            <ResponsiveContainer width="100%" height="100%" aria-hidden="true">

                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={softSkillsData}>

                    {/* Grille polaire - Couleur muted pour ne pas surcharger */}
                    <PolarGrid stroke="#94A3B8" />

                    {/* Axes (Labels) - Couleur accent-link définie dans tailwind.config.js */}
                    <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: '#6366F1', fontSize: 13, fontWeight: 600 }}
                    />

                    {/* Le polygone des notes - Couleur accent-primary */}
                    <Radar 
                        name="Simon" 
                        dataKey="score" 
                        stroke="#7c3aed" 
                        fill="#7c3aed" 
                        fillOpacity={0.5} 
                    />

                </RadarChart>
            </ResponsiveContainer>

            {/* Accessibilité : Texte masqué lu par les synthèses vocales (Exigence Section 6.2) */}
            <div className="sr-only">
                Graphique des Soft Skills.
                {softSkillsData.map((skill, index) => (
                    <span key={index}> {skill.subject} : {skill.score} sur {skill.fullMark}.</span>
                ))}
            </div>
        </div>
    );
};

export default RadarChartComponent;