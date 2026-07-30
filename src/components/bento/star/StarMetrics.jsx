import React from 'react';

/**
 * Affiche les métriques produit sous forme de "compteurs" visuels,
 * en 3 colonnes sur desktop (empilées sur mobile), pour un effet
 * immédiat et scannable en un coup d'œil.
 */
const StarMetrics = ({ metrics }) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-gray-200 dark:border-gray-800">
            {metrics.map((metric, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                    <span className="text-4xl md:text-5xl font-bold text-accent-primary">
                        {metric.value}
                    </span>
                    <span className="mt-2 font-semibold text-typography-light dark:text-typography-dark">
                        {metric.label}
                    </span>
                    <span className="mt-1 text-sm text-typography-light dark:text-typography-dark-muted">
                        {metric.sublabel}
                    </span>
                </div>
            ))}
        </section>
    );
};

export default StarMetrics;