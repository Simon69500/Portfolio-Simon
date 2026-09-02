import React from "react";

/**
 * Pastille affichant le logo + nom d'une technologie (StackCard, ProjetStar, ProjetCard).
 *
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.logoUrl
 * @param {'white'|'black'|'colored'} [props.iconBehavior]
 */
const TechBadge = ({ name, logoUrl, iconBehavior = "colored" }) => {

    // Fonction utilitaire pour attribuer le bon filtre CSS selon la donnée
    //
    // Beaucoup de logos de techno sont fournis en SVG avec une seule couleur fixe (souvent
    // noir ou une couleur de marque) : lisible sur fond clair, mais qui peut disparaître ou
    // mal contraster une fois le fond sombre activé (dark mode). Plutôt que de fournir deux
    // fichiers logo par techno (un clair, un sombre), on garde un seul fichier et on le
    // manipule avec le filtre CSS `invert` (qui inverse les couleurs du logo, y compris son
    // fond transparent, ce qui fonctionne bien pour un logo à une seule couleur) :
    //  - "black"   : le logo est déjà foncé, donc lisible sur fond clair -> on l'inverse
    //                UNIQUEMENT en dark mode (`dark:invert`) pour le rendre clair.
    //  - "white"   : le logo est déjà clair -> on l'inverse par défaut pour le rendre
    //                lisible en mode clair, puis on annule l'inversion en dark mode
    //                (`dark:filter-none`) où il redevient lisible tel quel.
    //  - "colored" : logo multicolore (le filtre invert le rendrait moche) -> aucun filtre,
    //                affiché identique dans les deux thèmes.
    const getFilterClasses = () => {
        switch (iconBehavior) {
            case 'black' :
                return 'dark:invert transition-all duration-300';
            case 'white' :
                return 'invert dark:filter-none transition-all duration-300';
            case 'colored' :
                return 'transition-all duration-300'
        }
    };

    return (
       <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">

            {/*
                Accessibilité (WCAG) : L'attribut alt est obligatoire.
                Performance : loading="lazy" natif pour différer le rendu si besoin.
            */}
            <img
                src={logoUrl}
                alt={`Logo de la technologie ${name}`}
                className={`w-4 h-4 object-contain flex-shrink-0 ${getFilterClasses()}`}
                loading="lazy"
            />

            {/*
                Gestion du thème : Utilisation stricte de tes variables Tailwind
                définies dans tailwind.config.js
            */}
            <span className="text-sm font-medium text-typography-light dark:text-typography-dark">
                {name}
            </span>

       </div>
    );
};

export default TechBadge;
