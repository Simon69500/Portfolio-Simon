import { useState, useEffect } from 'react';

/**
 * Gère le thème clair/sombre du site : détection de la préférence initiale,
 * synchronisation avec le DOM et persistance du choix de l'utilisateur.
 *
 * @returns {{ theme: 'light' | 'dark', toggleTheme: () => void }}
 *   `theme` est la valeur actuellement active, `toggleTheme` bascule entre les deux.
 */
export const useTheme = () => {

  // --- État initial : "lazy initial state" ---
  // useState(valeur) exécute l'initialisation à CHAQUE rendu du composant, même si l'état
  // ne sert qu'au tout premier rendu. Ici, on passe une FONCTION à useState au lieu d'une
  // valeur directe : React ne l'appelle qu'une seule fois, lors du montage du composant.
  // C'est important car lire localStorage et interroger matchMedia() sont deux opérations
  // qu'on ne veut surtout pas répéter à chaque re-render (elles ne changeraient pas de
  // résultat entre deux rendus, ce serait juste du travail inutile).
  const [theme, setTheme] = useState(() => {

    // 1. Vérifie si le localStorage contient déjà un choix
    // localStorage est une API du navigateur qui stocke des paires clé/valeur (chaînes de
    // caractères uniquement) de façon persistante : contrairement à une variable JS classique,
    // son contenu survit à un rechargement de page ou à la fermeture de l'onglet.
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }

    // 2. Sinon, interroge la directive système globale du navigateur
    // window.matchMedia() permet d'évaluer une media query CSS directement en JavaScript.
    // '(prefers-color-scheme: dark)' correspond au réglage clair/sombre du système
    // d'exploitation de l'utilisateur (Windows, macOS...). .matches vaut true si la condition
    // est vérifiée. On ne l'utilise qu'en secours, uniquement si l'utilisateur n'a encore
    // jamais fait de choix explicite sur ce site (donc rien dans localStorage).
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // --- Effet de bord : synchronise le DOM et le localStorage à chaque changement de thème ---
  // useEffect(fonction, [dépendances]) exécute `fonction` après que React a fini de mettre à
  // jour le DOM, et seulement quand une des valeurs du tableau de dépendances a changé depuis
  // le rendu précédent. Ici, le tableau ne contient que [theme] : cet effet ne se redéclenche
  // donc que lorsque `theme` change (pas à chaque rendu du composant qui utilise ce hook).
  useEffect(() => {
    // document.documentElement représente la balise <html> de la page (l'ancêtre de <body>).
    const root = document.documentElement;

    if (theme === 'dark') {
      // classList.add/remove manipule la liste des classes CSS d'un élément du DOM.
      // On ajoute/retire la classe "dark" sur <html> : c'est ce qui active tout Tailwind côté
      // affichage, car tailwind.config.js est configuré en `darkMode: 'class'` (voir ce fichier)
      // — sans cette classe présente sur <html>, aucune variante `dark:` des composants ne
      // s'appliquerait, quelle que soit la valeur de `theme` ici en JS.
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  /**
   * Bascule le thème actif (dark <-> light).
   */
  const toggleTheme = () => {
    // Forme "updater" de setState : on passe une fonction qui reçoit la valeur précédente
    // (`prevTheme`) plutôt que d'écrire directement `setTheme(theme === 'dark' ? ... )`.
    // C'est plus sûr en général car React garantit que `prevTheme` est bien la toute dernière
    // valeur au moment de la mise à jour, même si plusieurs mises à jour d'état sont mises en
    // file d'attente avant que React ne les applique (utile par exemple si toggleTheme() était
    // appelé plusieurs fois de suite très rapidement).
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Le hook expose son "API publique" : la valeur actuelle et la fonction pour la changer.
  // Les composants qui utilisent useTheme() (ex: ThemeToggle.jsx) n'ont jamais besoin de savoir
  // comment le thème est détecté ou persisté — toute cette complexité reste encapsulée ici.
  return { theme, toggleTheme };
};
