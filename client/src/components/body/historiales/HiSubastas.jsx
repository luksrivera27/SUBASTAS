import React from "react";
import Footer from "../componentesgenerales/Footer";
import Headerfontpageuser from "../componentesgenerales/Headerfontpageuser";
import NavHiSubastaIn from "../componentesgenerales/NavHiSubasta";
import TablaSubastaex from "../componentesgenerales/TablaHistorialEx";


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
