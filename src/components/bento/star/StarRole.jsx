import React from "react";

/**
 * Affiche "mon rôle précis" sur le projet, sous forme de liste verticale
 * (une casquette par ligne, texte pleine largeur) plutôt qu'en cards fermées,
 * pour éviter l'effet "pavé compressé" repéré sur StarNarrative.
 *
 * @param {Object} props
 * @param {import('../../../data/projects/portfolioData').ProjectRoleEntry[]} props.role
 */

const StarRole = ({ role }) => {
    return (
        <section className="w-full">
            <h3 className="text-2xl font-bold text-typography-light dark:text-typography-dark mb-6">
                Mon rôle sur ce projet
            </h3>

            <div className="flex flex-col gap-8">
                {role.map((item, index) => (
                    <div key={index} className="flex gap-4 md:gap-6">
                        {/* padStart(2, '0') complète la chaîne à gauche avec des '0' jusqu'à
                            atteindre 2 caractères : "1" -> "01", "10" reste "10" (déjà 2
                            caractères). String(index + 1) est nécessaire car padStart n'existe
                            que sur les chaînes, pas sur les nombres — index est un entier JS. */}
                        <span className="shrink-0 text-2xl font-bold text-accent-primary/40 dark:text-accent-primary/60 leading-none">
                            {String(index +1).padStart(2, '0')}
                        </span>

                        <div className="flex flex-col">
                            <h4 className="font-semibold text-lg text-typography-light dark:text-typography-dark mb-1">
                                {item.title}
                            </h4>
                            <p className="text-typography-light dark:text-typography-dark-muted">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StarRole;