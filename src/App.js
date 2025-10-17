import { Routes, Route } from 'react-router-dom';

import Home from './Component/Pages/Home';
import Footer from './Component/layouts/Footer';
import Header from './Component/layouts/Header.jsx';
import Competences from './Component/Pages/Competences.jsx';
import Portfolio from './Component/Pages/Portfolio.jsx';
import Projet from './Component/layouts/Projet.jsx';
import Formulaire from './Component/Pages/Formulaire.jsx';
import Mentions from './Component/Pages/Mentions.jsx';

function App() {
  

  return (
          <>
                <Header />

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/competences" element={<Competences />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/projet/:id" element={<Projet />} />
                  <Route path="/contact" element={<Formulaire />} />
                  <Route path="/mentions" element={<Mentions />} />   
                </Routes>
                
                <Footer />
              </>
  );
}

export default App;
