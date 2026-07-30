import React from "react";

/**
 * Affiche le déroulé technique du projet (aspects techniques, défis, solutions, résultats).
 * Contenu repris à l'identique de l'ancien ProjetDetails pour garder la parité fonctionnelle ;
 * la mise en forme visuelle (grille -> narratif hiérarchisé) pourra être retravaillée dans un
 * second temps, une fois toute l'architecture validée et testée.
 */

const StarNarrative = ({ details}) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-xl mb-2 text-typography-light dark:text-typography-dark">Aspects Techniques</h3>
                <p className="text-typography-light dark:text-typography-dark-muted">{details.aspectsTechniques}</p>
            </div>
            <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-xl mb-2 text-typography-light dark:text-typography-dark">Défis rencontrés</h3>
                <p className="text-typography-light dark:text-typography-dark-muted">{details.defis}</p>
            </div>
            <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-xl mb-2 text-typography-light dark:text-typography-dark">Solutions apportées</h3>
                <p className="text-typography-light dark:text-typography-dark-muted">{details.solutions}</p>
            </div>
            <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-xl mb-2 text-typography-light dark:text-typography-dark">Résultats</h3>
                <p className="text-typography-light dark:text-typography-dark-muted">{details.resultats}</p>
            </div>
        </section>        
    );
};

export default StarNarrative;