import React, { Suspense, lazy } from 'react';
import { softSkillsData } from '../../data/profileData';

// Import asynchrone du graphique pour optimiser le bundle Vite.js
const RadarChart = lazy(() => import('../ui/RadarChartComponent'));

/**
 * 
 * Carte Bento Grid E : Présentation des Soft Skill
 */

const SoftSkills = () => {
  return (
    <section 
      aria-labelledby="softskills-heading"
      className="h-full p-6 rounded-2xl bg-bento-light dark:bg-bento-dark shadow-sm transition-all duration-300 hover:scale-[1.02] border border-transparent hover:border-accent-primary flex flex-col"
    >
      <h2 id="softskills-heading" className="text-xl font-bold text-typography-light dark:text-typography-dark mb-4 text-center md:text-left">
        Soft Skills
      </h2>
      
      {/* Conteneur du graphique interactif */}
      <div className="flex-grow w-full relative" aria-hidden="true">
        <Suspense fallback={
          <div className="absolute inset-0 flex items-center justify-center text-sm text-typography-light/50 dark:text-typography-dark-muted">
            Chargement de l'analyse...
          </div>
        }>
          <RadarChart />
        </Suspense>
      </div>

      {/* Accessibilité : Texte alternatif lu par les synthèses vocales */}
      <div className="sr-only">
        Évaluation de mes compétences humaines sur 100 : 
        {softSkillsData.map(skill => `${skill.subject} : ${skill.score}. `)}
      </div>
    </section>
  );
};

export default SoftSkills;