import React from 'react';
import { useTheme } from '../../hook/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-typography-light dark:text-typography-dark transition-colors hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
      aria-label="Basculer le thème (Clair/Sombre)"
    >
      {/* Icône dynamique selon le thème actif */}
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;