import React, { useState, useEffect } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { softSkillsData } from "../../data/profileData";

// Composant de graphique des Soft Skills (Tuile E)
const RadarChartComponent = () => {
    // État pour détecter si l'on est sur mobile (< 640px)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 640);
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        // Conteneur avec hauteur adaptative mobile/desktop (Section 2.2)[cite: 2]
        <div className="w-full h-[220px] sm:h-[250px]">
            <ResponsiveContainer width="100%" height="100%" aria-hidden="true">
                {/* 
                  outerRadius dynamique : 52% sur mobile pour éviter le débordement, 
                  70% conservé à l'identique sur Desktop comme tu le souhaites.
                */}
                <RadarChart 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={isMobile ? "65%" : "70%"} 
                    data={softSkillsData}
                    margin={{ top: 15, right: 25, bottom: 15, left: 25 }}
                >
                    {/* Grille polaire - Couleur muted pour ne pas surcharger */}
                    <PolarGrid stroke="#94A3B8" />

                    {/* Axes (Labels) - Couleur accent-link définie dans tailwind.config.js */}
                    <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: '#6366F1', fontSize: isMobile ? 10 : 13, fontWeight: 600 }}
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

            {/* Accessibilité : Texte masqué lu par les synthèses vocales (Exigence Section 6.2)[cite: 2] */}
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