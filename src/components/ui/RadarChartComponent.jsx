import React, { useState, useEffect } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { softSkillsData } from "../../data/profileData";

/**
 * Graphique radar (Tuile E) affichant softSkillsData via Recharts. Chargé en lazy par
 * SoftSkills.jsx (voir ce fichier pour pourquoi). Recharts fonctionne par composition :
 * <RadarChart> est le conteneur qui reçoit les données (`data`), et chaque enfant
 * (<PolarGrid>, <PolarAngleAxis>, <Radar>) est une "couche" visuelle indépendante
 * (la grille de fond, les libellés d'axes, le polygone tracé) plutôt que des props d'un
 * composant monolithique.
 */
const RadarChartComponent = () => {
    // État pour détecter si l'on est sur mobile (< 640px)
    //
    // Contrairement à un simple ajustement de taille en CSS (media query), ici la valeur
    // `outerRadius` du graphique doit être recalculée par Recharts lui-même (c'est une prop
    // JS, pas une propriété CSS) : on ne peut pas la piloter avec une classe Tailwind
    // responsive, il faut donc dupliquer la logique de breakpoint en JS via un
    // `window.addEventListener('resize', ...)`. Le nettoyage de cet écouteur au démontage
    // (return () => window.removeEventListener(...)) suit le même principe que le cleanup
    // de useCardExpansion.js : sans lui, l'écouteur resterait actif même après que ce
    // composant a disparu du DOM (fuite mémoire, et risque d'appeler setState sur un
    // composant démonté).
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
            {/* aria-hidden ici + sr-only plus bas : même principe que dans SoftSkills.jsx
                (voir ce fichier pour l'explication), appliqué une deuxième fois localement
                au conteneur Recharts lui-même — redondant avec celui déjà posé par
                SoftSkills.jsx sur SON propre conteneur, mais sans impact fonctionnel. */}
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
