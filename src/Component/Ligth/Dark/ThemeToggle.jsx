import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";  // Import du contexte pour accéder au thème

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext); // Utiliser le contexte

  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Inverser le thème
  };

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? "Switch to Dark Theme" : "Switch to Light Theme"}
    </button>
  );
};

export default ThemeToggle;
