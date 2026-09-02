import React, { Suspense, lazy } from 'react';
import { softSkillsData } from '../../data/profileData';

// Import asynchrone du graphique pour optimiser le bundle Vite.js
//
// RadarChartComponent.jsx dépend de Recharts, une librairie de graphiques relativement
// lourde (à titre indicatif, son propre chunk de build fait ~280 Ko, largement plus que le
// reste de l'application). lazy(() => import(...)) déclare un composant dont le CODE n'est
// téléchargé par le navigateur qu'au moment où il est effectivement affiché, plutôt que
// d'être inclus dans le bundle principal chargé dès l'arrivée sur le site — Vite génère
// alors un fichier JS séparé pour RadarChartComponent (le "code splitting"), récupéré en
// parallèle pendant que le reste de la page est déjà utilisable.
// <Suspense fallback={...}> est le composant React obligatoire pour afficher un état de
// repli (ici un texte "Chargement...") pendant que ce fichier séparé est en cours de
// téléchargement — sans lui, un enfant `lazy` ferait planter le rendu.
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
      
      {/* Conteneur du graphique interactif.
          aria-hidden="true" masque tout ce conteneur aux lecteurs d'écran : un graphique
          SVG animé n'a aucun sens vocalisé tel quel (axes, formes, couleurs). L'information
          qu'il porte est plutôt fournie de façon lisible juste en dessous, via la classe
          utilitaire Tailwind `sr-only` ("screen-reader only" : visuellement invisible mais
          présente dans le DOM, donc lue par les lecteurs d'écran). C'est le pendant
          accessible du graphique, plutôt qu'une simple alternative textuelle de secours. */}
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