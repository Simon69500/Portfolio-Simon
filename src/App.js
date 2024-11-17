import Home from './Pages/Home';
import Header from './Component/Header';
import { ThemeProvider } from './Component/Ligth/Dark/ThemeContext.jsx'; // Importation du ThemeProvider (nommé)
import ThemeToggle from './Component/Ligth/Dark/ThemeToggle.jsx';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle/>
      <Header/>
      <Home/>
    </div>
    </ThemeProvider>
  );
}

export default App;
