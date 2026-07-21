import React from "react";

const TechBadge = ({ name, logoUrl, iconBehavior = "colored" }) => {

    // Fonction utilitaire pour attribuer le bon filtre CSS selon la donnée
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
            <span className="text-sm font-medium text-typography-light dark:text-typography-dark-DEFAULT">
                {name}
            </span>        

       </div>
    );
};

export default TechBadge;