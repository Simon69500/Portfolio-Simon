import React, { useState } from "react";

const ProjectCarousel = ({ gallery, projectTitle}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Si la galerie est vide ou absente, on n'affiche rien ou un fallback
    if (!gallery || gallery.length === 0 ) {
        return (
        <div className="w-full h-64 md:h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-300 dark:border-gray-700">
            <span className="text-typography-light dark:text-typography-dark-muted font-medium">
            Aucun média disponible pour ce projet
            </span>
        </div>            
        );
    }

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

        {/* Boutons de navigation (Précédent / Suivant) - Apparaissent au survol (group-hover) */}
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