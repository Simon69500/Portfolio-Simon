import React, { useState } from 'react';
import ThemeToggle from '../ui/ThemeToggle';

const Header = () => {
  // État local pour gérer l'ouverture/fermeture du menu burger mobile (Respect des normes WCAG/RGAA)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fonction pour fermer le menu lors du clic sur un lien d'ancrage
  const handleAnchorClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-4 z-50 flex flex-row items-center justify-between px-6 py-4 mb-8 bg-bento-light dark:bg-bento-dark backdrop-blur-md rounded-xl shadow-sm border border-gray-200/50 dark:border-gray-700/50">
      
      {/* Logo / Nom de l'auteur (fixé à gauche) */}
      <p className="text-3xl font-bold text-typography-dark dark:text-typography-dark">
        Simon Badin
      </p>
      
      {/* Zone Droite : Liens de navigation Desktop + Commutateur de thème + Bouton Burger */}
      <div className="flex items-center gap-4">
        
        {/* Navigation Desktop : Masquée sur mobile (hidden), affichée en flex sur tablette/desktop (md:flex) */}
        <nav className="hidden md:flex gap-4 items-center">
          <a href="#projets" className="px-3 py-2 font-semibold text-typography-light dark:text-typography-dark hover:text-accent-primary dark:hover:text-accent-secondary transition-colors">
            Projets
          </a>
          <a href="#parcours" className="px-3 py-2 font-semibold text-typography-light dark:text-typography-dark hover:text-accent-primary dark:hover:text-accent-secondary transition-colors">
            Parcours
          </a>
          <a href="#contact" className="px-3 py-2 font-semibold text-typography-light dark:text-typography-dark hover:text-accent-primary dark:hover:text-accent-secondary transition-colors">
            Contact
          </a>
        </nav>

      {/* Intégration du vrai commutateur de thème (Section 4.1 du CdC) */}
        <ThemeToggle />

        {/* Bouton Menu Burger Mobile (Visible uniquement sur mobile : md:hidden) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-typography-light dark:text-typography-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
          aria-expanded={isMobileMenuOpen}
          aria-label="Ouvrir le menu de navigation"
        >
          {/* Icône dynamique basculant entre Burger et Croix */}
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Panneau de navigation Mobile déroulant */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-bento-light dark:bg-bento-dark rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col gap-3 md:hidden">
          <a 
            href="#projets" 
            onClick={handleAnchorClick}
            className="px-4 py-2 font-semibold text-typography-light dark:text-typography-dark hover:bg-gray-200/50 dark:hover:bg-gray-700/50 rounded-lg transition-colors"
          >
            Projets
          </a>
          <a 
            href="#parcours" 
            onClick={handleAnchorClick}
            className="px-4 py-2 font-semibold text-typography-light dark:text-typography-dark hover:bg-gray-200/50 dark:hover:bg-gray-700/50 rounded-lg transition-colors"
          >
            Parcours
          </a>
          <a 
            href="#contact" 
            onClick={handleAnchorClick}
            className="px-4 py-2 font-semibold text-typography-light dark:text-typography-dark hover:bg-gray-200/50 dark:hover:bg-gray-700/50 rounded-lg transition-colors"
          >
            Contact
          </a>
        </div>
      )}
       
    </header>
  );
};

export default Header;