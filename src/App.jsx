import './App.css'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio'
import Acerca from './pages/Acerca'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'
import ListaCiudades from "./components/ListaCiudades";

function App(){

  return (
    <>
      <nav>
        <link to="/" style={{ margin: "0 10px"}}>Inicio</link>
        <link to="/acerca" style={{ margin: "0 10px"}}>Acerca</link>
        <link to="/contacto" style={{ margin: "0 10px"}}>Contacto</link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/acerca" element={<Acerca />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <h1>Mundial 2026-Clima de Sedes</h1>
      <ListaCiudades />
    </>
  );
}

export default App;

