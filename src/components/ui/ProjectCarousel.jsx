import React, { useState } from "react";

/**
 * Carrousel d'images de la galerie d'un projet (vue détail), navigable par flèches ou
 * pastilles (dots). État interne local (`currentIndex`) : contrairement aux champs du
 * formulaire, la position dans le carrousel n'a de sens que pour cet affichage précis,
 * personne d'autre n'a besoin de la connaître — pas de raison de la faire remonter plus haut.
 *
 * @param {Object} props
 * @param {string[]} props.gallery
 * @param {string} props.projectTitle
 */
const ProjectCarousel = ({ gallery, projectTitle}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Garde de sécurité en tout début de composant ("early return") : si la donnée
    // attendue est absente, on affiche un état de repli et on s'arrête là, plutôt que de
    // laisser le reste du composant s'exécuter et planter sur gallery[currentIndex] (accès
    // à un index d'un tableau vide, qui renverrait `undefined` et casserait le <img src>).
    if (!gallery || gallery.length === 0 ) {
        return (
        <div className="w-full h-64 md:h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-300 dark:border-gray-700">
            <span className="text-typography-light dark:text-typography-dark-muted font-medium">
            Aucun média disponible pour ce projet
            </span>
        </div>
        );
    }

    // Navigation circulaire : au premier élément (index 0), "précédent" reboucle sur le
    // dernier (gallery.length - 1) plutôt que de bloquer ou de sortir du tableau ; même
    // logique en miroir pour "suivant" au dernier élément.
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? gallery.length - 1 : prevIndex -1))
    };

    const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === gallery.length - 1 ? 0 : prevIndex + 1));
  };

    return (
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-md group">

        {/* Image active du carrousel */}
        <img
            src={gallery[currentIndex]}
            alt={`Capture ${currentIndex + 1} du projet ${projectTitle}`}
            loading="lazy"
            className="w-full h-full object-contain object-center transition-all duration-500 ease-in-out"
        />

        {/* Boutons de navigation (Précédent / Suivant) - Apparaissent au survol (group-hover).
            <>...</> est un Fragment React : un conteneur "invisible" qui permet de regrouper
            plusieurs éléments JSX (ici les 2 boutons) sous une seule branche du `&&`
            conditionnel, sans ajouter de <div> superflu au DOM final. */}
        {gallery.length > 1 && (
            <>
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                aria-label="Image précédente"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                aria-label="Image suivante"
            >
                ❯
            </button>
            </>
        )}

        {/* Indicateurs (Dots) en bas du carrousel */}
        {gallery.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {gallery.map((_, index) => (
                <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index
                    ? 'bg-accent-primary w-6'
                    : 'bg-white/50 hover:bg-white'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
                />
            ))}
            </div>
        )}
        </div>
  );
};

export default ProjectCarousel;
