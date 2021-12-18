import React from "react";
import Header from "../componentesgenerales/Header"

import Navegacion from "../componentesgenerales/Navegacion";
import SectionIndex from "../componentesgenerales/SectionIndex";
import Footer from "../componentesgenerales/Footer";
const Home = () => {
  return (
    <div>
      <Header/>
      <Navegacion />
      <SectionIndex />
      <Footer/>
      
    </div>
    
  );
}

export default Home;
