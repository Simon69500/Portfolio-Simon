import React from 'react';

/**
 * Affiche le volume global d'estimations en gros chiffre d'accroche,
 * puis sa répartition par origine sous forme de barre proportionnelle
 * (plutôt que des chiffres juxtaposés), pour éviter toute ambiguïté
 * entre "volume global" et "répartition par origine" (ce sont deux
 * axes de lecture différents, pas une simple addition de métriques).
 */
const StarMetrics = ({ metrics }) => {
    const { total, origine } = metrics;

    // Couleurs assignées dans l'ordre à chaque segment de la barre,
    // réutilisées ensuite pour la légende sous la barre (cohérence visuelle)
    const segmentColors = ['bg-accent-primary', 'bg-accent-secondary'];

    return (
        <section className="w-full">
            {/* Volume global : chiffre d'accroche, cohérent avec le style précédent */}
            <div className="flex flex-col items-center text-center mb-8">
                <span className="text-4xl md:text-5xl font-bold text-accent-primary">
                    {total.value}
                </span>
                <span className="mt-2 font-semibold text-typography-light dark:text-typography-dark">
                    {total.label}
                </span>
                <span className="mt-1 text-sm text-typography-light dark:text-typography-dark-muted">
                    {total.sublabel}
                </span>
            </div>

            {/* Répartition par origine : barre proportionnelle */}
            <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-typography-light dark:text-typography-dark-muted mb-3">
                    Répartition par origine
                </h4>

                <div className="flex w-full h-4 rounded-full overflow-hidden">
                    {origine.map((item, index) => {
                        const pourcentage = (item.value / total.value) * 100;
                        return (
                            <div
                                key={index}
                                className={segmentColors[index % segmentColors.length]}
                                style={{ width: `${pourcentage}%` }}
                            />
                        );
                    })}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4">
                    {origine.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                            <span className={`shrink-0 mt-1.5 w-2.5 h-2.5 rounded-full ${segmentColors[index % segmentColors.length]}`} />
                            <div className="flex flex-col">
                                <span className="font-semibold text-typography-light dark:text-typography-dark">
                                    {item.value} — {item.label}
                                </span>
                                <span className="text-sm text-typography-light dark:text-typography-dark-muted">
                                    {item.sublabel}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StarMetrics;