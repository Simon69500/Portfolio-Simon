/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class', 

  theme: {
    extend: {
      colors: {
        // Typographie (Texte)
        typography: {
          light: '#1F2937', 
          dark: {
            DEFAULT: '#FFFFFF', 
            muted: '#94A3B8', 
          }
        },

        // Les Couleurs d'Accent (boutons & Elements clés)
        accent: {
          primary: '#7c3aed', 
          secondary: '#10b981', 
          link: '#6366F1', 
        }
      },

      backgroundImage: {
        // Les Dégradés de Fond Généraux (Haut gauche vers Bas droit)
        'bg-light-gradient': 'linear-gradient(to bottom right, #FFFFFF, #E0F2FE)', 
        'bg-dark-gradient': 'linear-gradient(to bottom right, #0B0F19, #1A102F)',  

        // Les Dégradés de tes Cartes Bento (Haut gauche vers Bas droit)
        'bento-light': 'linear-gradient(to bottom right, #FFFFFF, #F1F5F9)',       
        'bento-dark': 'linear-gradient(to bottom right, #1E293B, #2E224F)', 
      }
    },
  },
  plugins: [],
}