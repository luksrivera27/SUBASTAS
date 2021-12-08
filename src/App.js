import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import Puja from "./pages/Puja";
import Perfil from "./pages/Perfil";
import Historialadminuser from "./pages/Historialadminuser";
import Historialusuarioexterno from "./pages/Historialusuarioexterno";
import Visualizaciondesubasta from "./pages/Visualizaciondesubasta";
import Recuperarcontrasena from "./pages/Recuperarcontrasena";
import PerfilInterno from "./pages/PerfilUserI";
import HiSubastasadmi from "./pages/HiSubastasadmi";
import Perfiladmi from "./pages/PerfilUserAdmi";
import VisualizaciondesubastaAdmi from "./pages/VisualizaciondesubastaAdmi";
import Reportesex from "./pages/Reportesex";
import ReportesAdmi from "./pages/ReportesAdmi";
import ConfigurarsubastasAdmi from "./pages/Configurarsubastasadmi";
import Configurarsubastasin from "./pages/Configurarsubastas";
import ResuRepUserAdmi from "./pages/ResuRepUserAdmi";
import ResuRepUserIn from "./pages/ResuRepUserIn";

function App(props) {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route
            path="/fornUserEx"
            element={
              <FrontPageUserEx email={props.email} password={props.password} />
            }
          />
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
        {/* REportes */}
        <Routes>
          <Route path="/ReportesIn" element={<Reportesex />} />
        </Routes>
        <Routes>
          <Route path="/ReportesAdmi" element={<ReportesAdmi />} />
        </Routes>

        <Routes>
          <Route
            path="/visualizacionsubasta"
            element={<Visualizaciondesubasta />}
          />
        </Routes>
        <Routes>
          <Route
            path="/VisualizaciondesubastaAdmi"
            element={<VisualizaciondesubastaAdmi />}
          />
        </Routes>
        <Routes>
          <Route
            path="/configurarsubastain"
            element={<Configurarsubastasin />}
          />
        </Routes>
        <Routes>
          <Route
            path="/configurarsubastaadmi"
            element={<ConfigurarsubastasAdmi />}
          />
        </Routes>

        <Routes>
          <Route path="/puja" element={<Puja />} />
        </Routes>
        <Routes>
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
        <Routes>
          <Route
            path="/recuperarcontrasena"
            element={<Recuperarcontrasena />}
          />
        </Routes>
        <Routes>
          <Route path="/historialadminuser" element={<Historialadminuser />} />
        </Routes>
        <Routes>
          <Route
            path="/historialusuarioexterno"
            element={<Historialusuarioexterno />}
          />
        </Routes>
        <Routes>
          <Route path="historialSubastaAdmi" element={<HiSubastasadmi />} />
        </Routes>
        <Routes>
          <Route path="/perfilInterno" element={<PerfilInterno />} />
        </Routes>
        <Routes>
          <Route path="/perfiladmi" element={<Perfiladmi />} />
        </Routes>
        <Routes>
          <Route path="/ResuReportAdmi" element={<ResuRepUserAdmi />} />
        </Routes>
        <Routes>
          <Route path="/ResuRepUserIn" element={<ResuRepUserIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
