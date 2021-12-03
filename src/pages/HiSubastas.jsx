import React from "react";
import Footer from "./components/Footer";
import Headerfontpageuser from "./components/Headerfontpageuser";
import NavHiSubastaIn from "./components/NavHiSubasta";
import TablaSubasta from "./components/TablaSubasta";

const HiSubastas=() =>{
  return (
    <div> 
      <Headerfontpageuser />
      <NavHiSubastaIn />
      <TablaSubasta />
      <Footer />
    </div>
  );
}

export default HiSubastas;
