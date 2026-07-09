import React from 'react'

const Button = ({
    children,
    href,
    variant = 'primary',
    className = '',
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

