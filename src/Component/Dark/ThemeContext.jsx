import React, { createContext, useState, useContext } from 'react';

// Créer le contexte du thème
const ThemeContext = createContext();

// Fournir le contexte du thème
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fonction pour basculer entre le mode sombre et clair
  const toggleTheme = () => {
    console.log('toggleTheme clicked');
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte du thème dans les composants
export const useTheme = () => useContext(ThemeContext);