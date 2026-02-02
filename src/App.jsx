import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio'
import Acerca from './pages/Acerca'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

function App(){
  return (
    <Router>
      <div className="app">
        <header className="topbar">
          <h1 className="brand">Mundial 2026</h1>

          <nav className="nav">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/acerca" className="nav-link">Acerca</Link>
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </nav>
        </header>

        <main className="card">
          <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="/acerca" element={<Acerca />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
