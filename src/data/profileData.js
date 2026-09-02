/**
 * @typedef {Object} TimelineEntry
 * @property {number} id
 * @property {string} title - intitulé du poste/étape affiché sur la timeline.
 * @property {string} date - période affichée telle quelle (texte libre, pas une vraie
 *   date JS : ça permet d'écrire "2026 - " pour un poste toujours en cours, par exemple).
 */

/**
 * Parcours professionnel, affiché par Parcours.jsx sous forme de timeline verticale.
 * L'ordre du tableau est l'ordre d'affichage (pas de tri par date fait au runtime).
 * @type {TimelineEntry[]}
 */
export const timeLineData = [
    { id: 1, title: "Vendeur", date: "2005 - 2009" },
    { id: 2, title: "Chasseur Alpin", date: "2009 - 2012" },
    { id: 3, title: "Plombier", date: "2013 - 2015" },
    { id: 4, title: "Mexique", date: "2016 - 2019" },
    { id: 5, title: "Plombier", date: "2019 - 2024" },
    { id: 6, title: "Stage Dev Full-Stack", date: " oct 2025 - mars 2026" },
    { id: 7, title: "Dev Full-Stack", date: "2026 - " }
];

/**
 * @typedef {Object} SoftSkillEntry
 * @property {string} subject - nom de la compétence, affiché comme libellé d'axe du radar.
 * @property {number} score - valeur réelle de l'utilisateur sur cet axe.
 * @property {number} fullMark - valeur maximale théorique de l'axe (toujours 100 ici).
 *   Recharts (la librairie du radar chart) a besoin de connaître le maximum de CHAQUE axe
 *   pour savoir jusqu'où étirer le polygone — sans `fullMark`, impossible de savoir si un
 *   score de 80 doit être tracé "presque au bord" ou "à mi-chemin" du graphique.
 */

/**
 * Scores de soft skills, consommés par RadarChartComponent.jsx (via Recharts) et par
 * SoftSkills.jsx.
 * @type {SoftSkillEntry[]}
 */
export const softSkillsData = [
    { subject: 'Rigueur', score: 80, fullMark: 100 },
    { subject: 'Adaptabilité', score: 70, fullMark: 100 },
    { subject: 'Résilience', score: 90, fullMark: 100 },
    { subject: 'Leadership', score: 60, fullMark: 100 },
    { subject: 'Curiosité', score: 70, fullMark: 100 },
    { subject: 'Passion', score: 100, fullMark: 100 }
];
