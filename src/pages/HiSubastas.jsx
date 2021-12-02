import React from "react";
import Footer from "./components/Footer";
import Headerfontpageuser from "./components/Headerfontpageuser";
import NavHiSubasta from "./components/NavHiSubasta";
import TablaSubasta from "./components/TablaSubasta";

const HiSubastas=() =>{
  return (
    <div> 
      <Headerfontpageuser />
      <NavHiSubasta />
      <TablaSubasta />
      <Footer />
    </div>
  );
}

export default HiSubastas;
