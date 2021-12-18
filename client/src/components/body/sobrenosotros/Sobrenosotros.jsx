import React from "react";
import  "../contactanos/stilesutiles.css"
import Navsobrenosotros from "../componentesgenerales/Navsobrenosotros"
import Header from "../componentesgenerales/Header"
import Footer from "../componentesgenerales/Footer";

const Sobrenosotros = () => {
  return (
    <div>
    <Header/>
    <Navsobrenosotros/>
    <div class="caja1 ">
        <div class="subcaja">
            
        <h2 class=" title Vendido" >Vendido</h2>
        <div class="texto1">
          Casa de subastas vendido es una empresa dedicada a subastar fosiles de todo tipo a personas que 
          presentan interes en coleccionar tan majestuosos objetos.
        </div>
      </div>
      </div>
      <Footer/>
      </div>
  );
}

export default Sobrenosotros;