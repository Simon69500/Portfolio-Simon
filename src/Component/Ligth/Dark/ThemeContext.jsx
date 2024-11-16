import { useEffect, useState, createContext } from "react";

// Créer un contexte pour le thème
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Charger l'état du thème depuis le localStorage (si déjà défini)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  // Mettre à jour le localStorage et ajouter ou retirer la classe 'dark' du body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark"); // Appliquer le thème sombre
      localStorage.setItem("theme", "dark"); // Sauvegarder le thème sombre
    } else {
      document.body.classList.remove("dark"); // Appliquer le thème clair
      localStorage.setItem("theme", "light"); // Sauvegarder le thème clair
    }
  }, [isDarkMode]);

  // Fournir la valeur du thème à tous les composants qui l'utilisent
  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
