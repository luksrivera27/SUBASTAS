import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
//perfiles
import Profile from "./profile/Profile";
import Perfil from "./profile/Perfil";
import PerfilInterno from "./profile/PerfilUserI";
import Perfiladmi from "./profile/PerfilUserAdmi";

import NotFound from "../utils/NotFound/NotFound";

import Home from "./home/Home";

import { useSelector } from "react-redux";
import Contactanos from "./contactanos/Contactanos";
import Sobrenosotros from "./sobrenosotros/Sobrenosotros";
import Pagoexitoso from "./pagoexitoso/Pagoexitoso"
//frontpages
import FrontPageAdmi from "./frontpages/FrontPageAdmi";
import FrontPageUserEx from "./frontpages/FrontPageUserEx";
import FrontPadeUserI from "./frontpages/FrontPadeUserI";
//historiales 
import HiSubastas from "./historiales/HiSubastas";
import Historialadminuser from "./historiales/Historialadminuser";
import Historialusuarioexterno from "./historiales/Historialusuarioexterno";
import HiSubastasadmi from "./historiales/HiSubastasadmi";
//REPORTESE
import Reportesex from "./reportes/Reportesex";
import ReportesAdmi from "./reportes/ReportesAdmi";
import ResuRepUserAdmi from "./reportes/ResuRepUserAdmi";
import ResuRepUserIn from "./reportes/ResuRepUserIn";
//configurar subastas
import ConfigurarsubastasAdmi from "./configurarsubastas/Configurarsubastasadmi";
import Configurarsubastasin from "./configurarsubastas/Configurarsubastas";
//pujas
import Puja from "./puja/Puja";
//visualizacionsubasta
import VisualizaciondesubastaAdmi from "./visualizacionpuja/VisualizaciondesubastaAdmi";
//recuperar contraseña
import Recuperarcontrasena from "./recuperarcontrasena/Recuperarcontrasena";

//Rutas que aparecen en la pantalla de inicio
function Body() {
  const auth = useSelector((state) => state.auth);
  const { isLogged } = auth;
  return (
    <section>
      <Switch>
        <Route path="/" component={Home} exact />

        <Route path="/login" component={isLogged ? NotFound : Login} exact />
        <Route path="/register"  component={isLogged ? NotFound : Register} exact/>

        <Route path="/profile" component={isLogged ? Profile : NotFound} exact />
        <Route path="/perfil" component={Perfil } exact/>
        <Route path="/perfilInterno" component={PerfilInterno } exact />
        <Route path="/perfiladmi" component={Perfiladmi }  exact/>
        


        <Route path="/Contactanos" component={Contactanos} exact />
        <Route path="/Sobrenosotros" component={Sobrenosotros} exact  />
        <Route path="/Pagoexitoso" component={Pagoexitoso} exact />
        <Route path="/fornUserEx" component={FrontPageUserEx } exact />
        <Route path="/fornUserIn" component={FrontPadeUserI} exact />
        <Route path="/frontadmi" component={FrontPageAdmi} exact />

        <Route path="/HiSubastas" component={HiSubastas} exact />
        <Route path="/historialadminuser" component={Historialadminuser} exact/>
        <Route path="/historialusuarioexterno" component={Historialusuarioexterno} exact/>
        <Route path="/historialSubastaAdmi" component={HiSubastasadmi} exact/>

        <Route path="/ResuReportAdmi" component={ResuRepUserAdmi} exact />
        <Route path="/ResuRepUserIn" component={ResuRepUserIn} exact/>
        <Route path="/ReportesIn" component={Reportesex } exact/>
        <Route path="/ReportesAdmi" component={ReportesAdmi } exact/>

        <Route path="/configurarsubastain" component={Configurarsubastasin } exact/>
        <Route path="/configurarsubastaadmi" component={ConfigurarsubastasAdmi} exact/>

        <Route path="/puja" component={Puja} exact/>
        <Route path="/VisualizaciondesubastaAdmi" component={VisualizaciondesubastaAdmi} exact/>

        <Route path="/recuperarcontrasena" component={Recuperarcontrasena} exact/>

       

        </Switch>
      
    </section>
  );
}

export default Body;
