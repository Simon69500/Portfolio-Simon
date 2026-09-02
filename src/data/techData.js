// --- Helper de chemin d'asset ---
// import.meta.env est l'API de Vite pour accéder aux variables d'environnement/de build
// côté client. BASE_URL est une variable spéciale FOURNIE PAR VITE (pas définie par nous
// dans un .env) : elle correspond à l'option `base` de vite.config.js (ici `base: './'`).
// On préfixe systématiquement les chemins d'images avec elle plutôt que d'écrire un chemin
// absolu en dur ("/images/..."), car le site est déployé sur GitHub Pages sous un
// sous-dossier (/Portfolio-Simon/) et non à la racine d'un domaine : un chemin absolu en
// dur pointerait vers la racine du domaine GitHub Pages et casserait une fois déployé.
//
// Note : ce même helper `img()` est redéfini à l'identique dans portfolioData.js et
// projectTypeData.js plutôt que factorisé dans un fichier utilitaire partagé — un doublon
// mineur assumé pour l'instant plutôt qu'un vrai problème (3 lignes, jamais divergentes).
const img = (chemin) => `${import.meta.env.BASE_URL}${chemin}`;

/**
 * @typedef {Object} TechEntry
 * @property {string} id - identifiant unique, utilisé comme `key` React lors du rendu.
 * @property {string} name - nom affiché de la technologie.
 * @property {string} category - redondant avec la clé du groupe dans `techData` (voir plus
 *   bas), mais gardé sur chaque entrée pour rester utilisable même après un `.flat()` qui
 *   fusionnerait toutes les catégories en un seul tableau (perdrait sinon l'info de groupe).
 * @property {string} logoUrl - chemin vers le logo SVG, construit via `img()`.
 * @property {'white'|'black'|'colored'} iconBehavior - indique quel filtre CSS appliquer au
 *   logo selon le thème actif, pour rester lisible sur fond clair ET sur fond sombre avec un
 *   seul fichier SVG par techno (voir le détail du filtre `invert` dans TechBadge.jsx) :
 *   "black" = logo foncé, inversé seulement en dark mode ; "white" = logo clair, inversé par
 *   défaut puis remis tel quel en dark mode ; "colored" = logo multicolore, jamais filtré.
 */

/**
 * Stack technique affichée sur le site, groupée par catégorie. Les clés de cet objet
 * ("Frontend", "Backend", "Outils & Ops") sont à la fois les libellés de section affichés
 * par StackCard.jsx ET les clés utilisées pour parcourir les données (voir
 * `Object.entries(techData)` dans StackCard.jsx).
 *
 * Les composants qui doivent retrouver UNE techno par son nom (ProjetStar.jsx,
 * ProjetCard.jsx) aplatissent d'abord cet objet avec `Object.values(techData).flat()`
 * avant de chercher dedans — cet objet reste néanmoins structuré par catégorie ici, car
 * c'est cette structure qui est utile à l'affichage de la tuile "Stack Technique".
 *
 * @type {Object<string, TechEntry[]>}
 */
export const techData = {

    // --- FRONTEND ---
    "Frontend": [
        {
            id: "javascript",
            name: "JavaScript",
            category: "Frontend",
            logoUrl: img("/images/tech/javascript.svg"),
            iconBehavior: "white"
        },

        {
            id: "typescript",
            name: "TypeScript",
            category: "Frontend",
            logoUrl: img("/images/tech/typescript.svg"),
            iconBehavior: "white"
        },

        {
            id: "React",
            name: "React",
            category: "Frontend",
            logoUrl: img("/images/tech/react.svg"),
            iconBehavior: "white"
        },

        {
            id: "angular",
            name: "Angular",
            category: "Frontend",
            logoUrl: img("/images/tech/angular.svg"),
            iconBehavior: "white"
        },

        {
            id: "tailwind",
            name: "Tailwind CSS",
            category: "Frontend",
            logoUrl: img("/images/tech/tailwind.svg"),
            iconBehavior: "black"
        },
    ],


    // --- BACKEND ---
    "Backend": [
        {
            id: "nodejs",
            name: "Node.js",
            category: "Backend",
            logoUrl: img("/images/tech/node.svg"),
            iconBehavior: "white"
        },

        {
            id: "express",
            name: "Express",
            category: "Backend",
            logoUrl: img("/images/tech/express.svg"),
            iconBehavior: "white"
        },

        {
            id: "php",
            name: "PHP",
            category: "Backend",
            logoUrl: img("/images/tech/php.svg"),
            iconBehavior: "colored"
        },

        {
            id: "symfony",
            name: "Symfony",
            category: "Backend",
            logoUrl: img("/images/tech/symfony.svg"),
            iconBehavior: "black"
        },

        {
            id: "mongodb",
            name: "MongoDB",
            category: "Backend",
            logoUrl: img("/images/tech/mongodb.svg"),
            iconBehavior: "colored"
        },

        {
            id: "mysql",
            name: "MySQL",
            category: "Backend",
            logoUrl: img("/images/tech/mysql.svg"),
            iconBehavior: "black"
        },

        {
            id: "postgresql",
            name: "PostgreSQL",
            category: "Backend",
            logoUrl: img("/images/tech/postgresql.svg"),
            iconBehavior: "white"
        },

        {
            id: "postgis",
            name: "PostGIS",
            category: "Backend",
            logoUrl: img("/images/tech/postgis.svg"),
            iconBehavior: "colored"
        },
    ],


    // OUTILS & OPS
    "Outils & Ops": [
        {
            id: "github",
            name: "GitHub",
            category: "Outils & Ops",
            logoUrl: img("/images/tech/github.svg"),
            iconBehavior: "white"
        },

        {
            id: "figma",
            name: "Figma",
            category: "Outils & Ops",
            logoUrl: img("/images/tech/figma.svg"),
            iconBehavior: "white"
        },

        {
            id: "ovh",
            name: "OVH Cloud",
            category: "Outils & Ops",
            logoUrl: img("/images/tech/ovh.svg"),
            iconBehavior: "black"
        },

        {
            id: "docker",
            name: "Docker",
            category: "Outils & Ops",
            logoUrl: img("/images/tech/docker.svg"),
            iconBehavior: "black"
        },

        {
            id: "vercel",
            name: "Vercel",
            category: "Outils & Ops",
            logoUrl: img("/images/tech/vercel.svg"),
            iconBehavior: "white"
        },

        {
            id: "railway",
            name: "Railway",
            category: "Outils & Ops",
            logoUrl: img("/images/tech/railway.svg"),
            iconBehavior: "black"
        },

        {
            id: "render",
            name: "Render",
            category: "Outils & Ops",
            logoUrl: img("/images/tech/render.svg"),
            iconBehavior: "black"
        },

        {
            id: "ia",
            name: "IA & Prompting",
            category: "Outils & Ops",
            logoUrl: img("/images/tech/ia.svg"),
            iconBehavior: "black"
        }

    ]
}
