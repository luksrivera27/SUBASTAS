import React from "react";
import Navegaciongeneral from "../componentesgenerales/Navegaciongeneral"
import Header from "../componentesgenerales/Header"
import  "./stilesutiles.css"
import logowhatsapp from "../imagenes/logowhatsapp.jpg"
import logoemail from "../imagenes/logoemail.jfif"
import Footer from "../componentesgenerales/Footer";

const Contactanos = () => {
  return (
    <div>
      <Header/>
      <Navegaciongeneral/>
      
      <div class="caja1 ">
        <div class="subcaja">
            
            <h1 class="title1">Contactanos</h1>
            
            <img class="logo3" src={logowhatsapp} alt="logo3"/> <h3 class="texto2"> +57 3057766397</h3>
            <img class="logo3" src={logoemail} alt="logo3"/> <h3 class="textotexto2"> subasVendido@gmail.com</h3>
            
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contactanos;