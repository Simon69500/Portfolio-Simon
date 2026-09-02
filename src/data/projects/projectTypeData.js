// Voir le commentaire équivalent dans techData.js : ce helper reconstruit un chemin
// d'asset valide une fois le site déployé sous un sous-dossier GitHub Pages.
const img = (chemin) => `${import.meta.env.BASE_URL}${chemin}`;

/**
 * @typedef {Object} ProjectTypeEntry
 * @property {string} label - libellé affiché dans le badge (ex: "Projet de formation").
 * @property {string} [logoUrl] - chemin vers un logo image réel (seul le type "formation"
 *   en a un : le logo officiel du centre de formation). Quand présent, ProjectTypeBadge.jsx
 *   l'utilise en priorité.
 * @property {'colored'} [iconBehavior] - comportement visuel du logo, uniquement pertinent
 *   quand `logoUrl` est défini.
 * @property {'briefcase'|'lightbulb'} [icon] - nom symbolique d'une icône, pour les types
 *   qui n'ont pas de logo image dédié. Ce n'est PAS un chemin de fichier ni le nom d'une
 *   librairie d'icônes externe : c'est une chaîne que ProjectTypeBadge.jsx compare avec des
 *   `if (data.icon === "briefcase")` pour choisir quel SVG inline dessiner à la main. Toute
 *   nouvelle valeur ici (autre que "briefcase"/"lightbulb") n'affichera aucune icône tant
 *   que le composant n'est pas mis à jour en conséquence.
 */

/**
 * Configuration centralisée des types de projet, sur le même principe que techData.js
 * Objectif : informer clairement le visiteur du contexte de réalisation
 * (un projet "professionnel" implique un client réel, contrairement à un exercice de formation)
 *
 * Consommé par ProjectTypeBadge.jsx, qui affiche le badge visible en tête de chaque carte
 * projet (avant même le titre) pour donner ce contexte en premier.
 *
 * @type {Object<string, ProjectTypeEntry>}
 */
export const projectTypeData = {

    formation: {
        label: "Projet de formation",
        logoUrl: img("/images/projects/cef.svg"), // Logo officiel du centre de formation
        iconBehavior: "colored"
    },

    professionnel: {
        label: "Projet professionnel",
        icon: "briefcase"
    },

    personnel: {
        label: "Projet personnel",
        icon: "lightbulb"
    }
}
