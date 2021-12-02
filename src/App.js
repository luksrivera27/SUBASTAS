import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import FrontPageAdmi from "./pages/FrontPageAdmi";
import FrontPageUserEx from "./pages/FrontPageUserEx";
import FrontPadeUserI from "./pages/FrontPadeUserI";
import HiSubastas from "./pages/HiSubastas";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Pagoexitoso from "./pages/Pagoexitoso";
import Contactanos from "./pages/Contactanos"; 
import Sobrenosotros from "./pages/Sobrenosotros";
import Reportes from "./pages/Reportes";
import Puja from "./pages/Puja";
import Perfil from "./pages/Perfil";
import Historialadminuser from "./pages/Historialadminuser";
import Historialusuarioexterno from "./pages/Historialusuarioexterno";
import Configurarsubastas from "./pages/Configurarsubastas";
import Visualizaciondesubasta from "./pages/Visualizaciondesubasta";
import Recuperarcontrasena from "./pages/Recuperarcontrasena";

function App() {
  return (
    <Router>
      <div>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
        <Routes>
            <Route path="/fornUserEx" element={<FrontPageUserEx />} />
        </Routes>
        <Routes>
            <Route path="/fornUserIn" element={<FrontPadeUserI />} />
        </Routes>
        <Routes>
            <Route path="/frontadmi" element={<FrontPageAdmi />} />
        </Routes>
        <Routes>
            <Route path="/HiSubastas" element={<HiSubastas />} />
        </Routes>
      
        <Routes>
            <Route path="/Registro" element={<Registro />} />
        </Routes>

        <Routes>
            <Route path="/Login" element={<Login />} />
        </Routes>

        <Routes>
            <Route path="/Pagoexitoso" element={<Pagoexitoso />} />
        </Routes>

        <Routes>
            <Route path="/Contactanos" element={<Contactanos />} />
        </Routes>
        <Routes>
            <Route path="/Sobrenosotros" element={<Sobrenosotros />} />
        </Routes>

        <Routes>
            <Route path="/Reportes" element={<Reportes />} />
        </Routes>

        <Routes>
            <Route path="/visualizacionsubasta" element={<Visualizaciondesubasta/>} />
        </Routes>

        <Routes>
            <Route path="/configurarsubasta" element={<Configurarsubastas/>} />
        </Routes>
        <Routes>
            <Route path="/puja" element={<Puja/>} />
        </Routes>
        <Routes>
            <Route path="/perfil" element={<Perfil/>} />
        </Routes>
        <Routes>
            <Route path="/recuperarcontrasena" element={<Recuperarcontrasena/>} />
        </Routes>
        <Routes>
            <Route path="/historialadminuser" element={<Historialadminuser/>} />
        </Routes>
        <Routes>
            <Route path="/historialusuarioexterno" element={<Historialusuarioexterno/>} />
        </Routes>


      </div>

      
    </Router>
  );
}

export default App;
