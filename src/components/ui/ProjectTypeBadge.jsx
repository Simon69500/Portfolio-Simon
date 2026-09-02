import React from "react";
import { projectTypeData } from "../../data/projects/projectTypeData";

/**
 * Badge signalant la nature d'un projet (formation / personnel / professionnel).
 * variant="compact" -> icône/logo seul (overlay sur les cards de la Home)
 * variant="full"     -> icône/logo + libellé texte (vue détail du projet)
 *
 * @param {Object} props
 * @param {'professionnel'|'formation'|'personnel'} props.type - clé de projectTypeData.js.
 * @param {'compact'|'full'} [props.variant]
 */
const ProjectTypeBadge = ({ type, variant = "compact" }) => {
    const data = projectTypeData[type];

    // Sécurité : si le type n'est pas renseigné ou mal orthographié dans les données,
    // on n'affiche rien plutôt que de faire planter le rendu
    if (!data) return null;

    // L'icône/logo est purement décoratif ici : le libellé texte (variante "full")
    // ou l'attribut aria-label du conteneur (variante "compact") porte le sens réel
    const renderIcon = () => {
        if (data.logoUrl) {
            return (
                <img 
                    src={data.logoUrl}
                    alt=""
                    aria-hidden="true"
                    className="w-4 h-4 object-contain flex-shrink-0"
                    loading="lazy"
                />
            );
        }

        if (data.icon === "briefcase") {
            return (
                <svg
                    aria-hidden="true"
                    className="w-4 h-4 flex-shrink-0 text-typography-light dark:text-typography-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                </svg>
            );
        }

        if (data.icon === "lightbulb") {
            return (
                <svg
                    aria-hidden="true"
                    className="w-4 h-4 flex-shrink-0 text-typography-light dark:text-typography-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 18h6M10 21h4M12 3a6 6 0 00-3.6 10.8c.5.4.8 1 .8 1.7v.5h5.6v-.5c0-.7.3-1.3.8-1.7A6 6 0 0012 3z" />
                </svg>  
            );          
        }

        return null;
    };
    
    // --- Variante COMPACTE : pastille ronde discrète pour l'overlay sur la card ---
    if (variant === "compact") {
        return (
            <div
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm"
                role="img"
                aria-label={data.label}
                title={data.label}
            >
                {renderIcon()}
            </div>
        );
    }

    // --- Variante FULL : icône/logo + libellé, sur le modèle visuel de TechBadge ---
    return (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            {renderIcon()}
            <span className="text-sm font-medium text-typography-light dark:text-typography-dark">
                {data.label}
            </span>            
        </div>
    );
};

export default ProjectTypeBadge;