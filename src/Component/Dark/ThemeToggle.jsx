import React from 'react';
import { useTheme } from './ThemeContext';  // Import du hook personnalisé

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();  // Accéder à l'état et à la fonction de bascule du contexte
  console.log("isDarkMode in ThemeToggle: ", isDarkMode);

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}  {/* Affiche le texte en fonction du mode */}
    </button>
  );
};

export default ThemeToggle;
