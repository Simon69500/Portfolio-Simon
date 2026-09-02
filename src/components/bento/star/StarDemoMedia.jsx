import React from "react";


/**
 * Affiche la vidéo de démonstration du projet en lecture automatique,
 * en boucle et muette (comportement équivalent à un GIF, mais avec une
 * bien meilleure qualité d'image à poids de fichier égal).
 *
 * @param {Object} props
 * @param {{src: string, poster: string}} props.demoMedia
 * @param {string} props.projectTitle
 */
const StarDemoMedia = ({ demoMedia, projectTitle }) => {
    return (
        <section className="w-full">
            {/* autoPlay ne fonctionne dans la plupart des navigateurs QUE si la vidéo est
                aussi `muted` (règle anti-nuisance imposée côté navigateur, pas un choix du
                projet) ; playsInline évite le passage en plein écran automatique sur iOS. */}
            <video
                src={demoMedia.src}
                poster={demoMedia.poster}
                autoPlay
                loop
                muted
                playsInline
                aria-label={`Démonstration vidéo de l'application ${projectTitle}`}
                className="w-full max-w-sm mx-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm"
            />
        </section>
    );
};

export default StarDemoMedia;