import React from "react";
import Footer from "./components/Footer";
import Headerfontpageuser from "./components/Headerfontpageuser";
import NavHiSubastaIn from "./components/NavHiSubasta";
import TablaSubastaex from "./components/TablaHistorialEx";


const HiSubastas=() =>{
  return (
    <div> 
      <Headerfontpageuser />
      <NavHiSubastaIn />
      <TablaSubastaex />
      <Footer />
    </div>
  );
}

export default HiSubastas;
