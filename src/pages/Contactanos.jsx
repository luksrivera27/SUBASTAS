import React from "react";
import Navegaciongeneral from "./components/Navegaciongeneral"
import Header from "./components/Header"
import  "./stilesutiles.css"
import logowhatsapp from "./imagenes/logowhatsapp.jpg"
import logoemail from "./imagenes/logoemail.jfif"


const Contactanos = () => {
  return (
    <div>
      <Header/>
      <Navegaciongeneral/>
      
      <div class="caja1 ">
        <div class="subcaja">
            
            <h1 class="title1">Contactanos</h1>
            
            <img class="logo3" src={logowhatsapp}/> <h3 class="texto2"> +57 3057766397</h3>
            <img class="logo3" src={logoemail}/> <h3 class="texto2"> subasVendido@gmail.com</h3>
            
      </div>
      </div>
    </div>
  );
}

export default Contactanos;