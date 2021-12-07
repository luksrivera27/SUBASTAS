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
      
      <div class="caja ">
        <div class="subcaja">
            
            <h1 class="title">Contactanos</h1>
            
            <img class="logo" alt="logo" src={logowhatsapp}/> <h3 class="texto"> +57 3057766397</h3>
            <img class="logo" alt="logo" src={logoemail}/> <h3 class="texto"> subasVendido@gmail.com</h3>
            
      </div>
      </div>
    </div>
  );
}

export default Contactanos;