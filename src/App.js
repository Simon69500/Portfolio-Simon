import React from 'react';


import Header from './Component/Header'; // Exemple d'autre composant
import Home from './Pages/Home'; // Exemple d'autre composant
import { Routes, Route } from 'react-router-dom';  // Importer Route et Routes de react-router-dom
import Competences from './sous-pages/Competences.jsx';
import About from './sous-pages/About.jsx';

function App() {
  

  return (
        <div>
          <Header /> {/* Autres composants */}

          <Routes> {/* Définir les routes ici */}
            <Route path="/" element={<Home />} /> {/* Route vers la page d'accueil */}
            <Route path="/about" element={<About />} /> {/* Route vers la page About */}
            <Route path="/competences" element={<Competences />} /> {/* Route vers la page Competences */}
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>

        </div>
  );
}

export default App;
