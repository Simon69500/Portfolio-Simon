import React from "react";

const TechBadge = ({ name, logoUrl }) => {
    return (
       <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-black/50 dark:bg-gray-800/50 backdrop-blur-sm">

            {/* 
                Accessibilité (WCAG) : L'attribut alt est obligatoire.
                Performance : loading="lazy" natif pour différer le rendu si besoin. 
            */}
            <img
                src={logoUrl}
                alt={`Logo de la technologie ${name}`}
                className="w-4 h-4 object-contain flex-shrink-0"
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