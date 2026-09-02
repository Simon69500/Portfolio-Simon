import React from 'react'

/**
 * Bouton générique de l'application, utilisé aussi bien pour des liens (ancres internes,
 * liens externes, téléchargement) que pour des actions JS pures (submit de formulaire,
 * fermeture d'une carte). Voir plus bas pourquoi ces deux usages sont rendus différemment.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.href] - si fourni, le bouton devient un lien <a>.
 * @param {'primary'|'secondary'} [props.variant]
 * @param {string} [props.className] - classes Tailwind additionnelles, ajoutées après les
 *   classes de variante (donc capables de les surcharger si besoin).
 * @param {...*} props.props - toute autre prop standard HTML (onClick, target, rel,
 *   download, aria-label, type...) transmise telle quelle à l'élément rendu.
 */
const Button = ({
    children,
    href,
    variant = 'primary',
    className = '',
    // Rest pattern : récupère dans un seul objet `props` toutes les props qui n'ont pas été
    // explicitement nommées ci-dessus (children, href, variant, className). Combiné avec
    // {...props} plus bas (opérateur spread, cette fois en lecture), ça permet à ce
    // composant générique d'accepter n'importe quelle prop HTML standard (onClick, target,
    // rel, download, type, aria-label...) sans avoir à toutes les lister une par une.
    ...props
}) => {

    // Styles de base partagés ( accessibilité, transitions, typographie)
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

    // Styles spécifiques aux variantes basés sur le thème définit dans tailwind.config.js
    const variantStyles = {

        // Primary : Vert en mode clair, Violet en mode sombre
        primary: "bg-accent-secondary dark:bg-accent-primary text-typography-dark hover:brightness-110 focus-visible:ring-accent-secondary dark:focus-visible:ring-accent-primary",

        // Secondary (Inversé) : Violet en mode clair, Vert en mode sombre
        secondary: "bg-accent-primary dark:bg-accent-secondary text-typography-dark hover:brightness-110 focus-visible:ring-accent-primary dark:focus-visible:ring-accent-secondary",
    };

    // Concaténation des classes
    const appliedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

    // Rendu Conditionnel sémantique : <a> si href est présent, sinon <button>
    // Ce n'est pas un détail cosmétique : un <button> stylé pour ressembler à un lien reste
    // un bouton pour un lecteur d'écran ou la navigation au clavier (pas de Ctrl+clic pour
    // ouvrir dans un nouvel onglet, pas d'affichage de l'URL cible au survol...). Choisir la
    // bonne balise HTML selon l'intention (naviguer vs déclencher une action) est ce qui
    // rend l'accessibilité correcte "gratuitement", sans code supplémentaire.
    if (href) {
        return (
            <a
                href={href}
                className={appliedClasses}
                {...props}
                >
                    {children}
                </a>
        )
    };

    return (
        <button
            className={appliedClasses}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
