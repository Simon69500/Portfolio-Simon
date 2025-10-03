import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Component/Pages/Home';
import Footer from './Component/layouts/Footer';
import Header from './Component/layouts/Header.jsx';
import Competences from './Component/Pages/Competences.jsx';
import Portfolio from './Component/Pages/Portfolio.jsx';
import Formulaire from './Component/Pages/Formulaire.jsx';

function App() {
  

  return (
          <>
                <Header />

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/competences" element={<Competences />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Formulaire />} />
                </Routes>
                
                <Footer />
              </>
  );
}

export default App;
