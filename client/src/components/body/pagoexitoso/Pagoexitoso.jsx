import React from "react";
import Navtransaccion from "../componentesgenerales/Navtransaccion";
import Headerfontpageuser from "../componentesgenerales/Headerfontpageuser";
import logocheck from"../imagenes/check.png"
import  "../contactanos/stilesutiles.css"
import Footer from "../componentesgenerales/Footer";


const Pagoexitoso = () => {
  return (
    <div>
      <Headerfontpageuser/>
      <Navtransaccion/>
      <div class="caja2 ">
        <div class="subcaja2">
            <img class="logo" src={logocheck} alt="logo" />
            <h1 class="title">Transacción Exitosa</h1>
            
            
            
      </div>
      </div>
      
      <Footer/>
      
    </div>
  );
}

export default Pagoexitoso;