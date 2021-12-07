import React from "react";
import  "./stilesutiles.css"
import Header from "./components/Header"
import Navsobrenosotros from "./components/Navsobrenosotros"
const Sobrenosotros = () => {
  return (
    <div>
    <Header/>
    <Navsobrenosotros/>
    <div class="caja ">
        <div class="subcaja">
            
        <h2 class=" title Vendido" >Vendido</h2>
        <div class="texto1">
          Casa de subastas vendido es una empresa dedicada a subastar fosiles de todo tipo a personas que 
          presentan interes en coleccionar tan majestuosos objetos.
        </div>
      </div>
      </div>
      </div>
  );
}

export default Sobrenosotros;