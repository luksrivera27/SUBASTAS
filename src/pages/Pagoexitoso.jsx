import React from "react";
import Navtransaccion from "./components/Navtransaccion";
import Headerfontpageuser from "./components/Headerfontpageuser";
import  "./stilesutiles.css";
import logocheck from"./imagenes/check.png"


const Pagoexitoso = () => {
  return (
    <div>
      <Headerfontpageuser/>
      <Navtransaccion/>
      <div class="caja2 ">
        <div class="subcaja2">
            <img class="logo" alt="logo"src={logocheck}/>
            <h1 class="title">Transacción Exitosa</h1>
            
            
            
      </div>
      </div>
      
      
      <h1>Este es Pagoexitoso</h1>
    </div>
  );
}

export default Pagoexitoso;