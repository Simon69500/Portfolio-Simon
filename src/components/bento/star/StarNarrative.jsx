import React from "react";

/**
 * Affiche le déroulé technique du projet (aspects techniques, défis, solutions, résultats)
 * en sections pleine largeur (intro + liste à puces), plutôt qu'en grille de cards fermées,
 * pour rester cohérent avec la lecture de StarRole et éviter l'effet "pavé compressé".
 */

const StarNarrative = ({ details}) => {

    // Regroupement des 4 catégories en tableau pour factoriser le rendu via .map(),
    // plutôt que de répéter 4 fois un bloc JSX quasi identique.
    const sections = [
        {title: "Aspects Techniques", content: details.aspectsTechniques },
        {title: "Défis rencontrés", content: details.defis },
        {title: "Solutions apportées", content: details.solutions },
        {title: "Résultats", content: details.resultats }
    ]    
    return (
        <section className="w-full flex flex-col gap-10">
            {sections.map((section, index) => (
                <div key={index}>
                    <h3 className="font-bold text-xl mb-2 text-typography-light dark:text-typography-dark">
                        {section.title}
                    </h3>
                    <p className="text-typography-light dark:text-typography-dark-muted mb-3">
                        {section.content.intro}
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 text-typography-light dark:text-typography-dark-muted">
                        {section.content.points.map((point, pointIndex) => (
                            <li key={pointIndex}> {point} </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>        
    );
};

export default StarNarrative;