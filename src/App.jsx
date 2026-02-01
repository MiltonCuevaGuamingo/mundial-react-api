import './App.css'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio'
import Acerca from './pages/Acerca'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'
import ListaCiudades from "./components/ListaCiudades";

function App(){

  return (
    <Router>
      <nav>
        <Link to="/" style={{ margin: "0 10px"}}>Inicio</Link>
        <Link to="/acerca" style={{ margin: "0 10px"}}>Acerca</Link>
        <Link to="/contacto" style={{ margin: "0 10px"}}>Contacto</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/acerca" element={<Acerca />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;

