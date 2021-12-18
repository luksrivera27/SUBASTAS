import React from "react";
import Footer from "../componentesgenerales/Footer";
import Headerfontpageuser from "../componentesgenerales/Headerfontpageuser";
import NavHiSubastaAdmi from "../componentesgenerales/NavHiSubastaAdmi";
import TablahiSubastaAdmi from "../componentesgenerales/TablaSubastaAdmi";
;

const HiSubastasadmi=() =>{
  return (
    <div> 
      <Headerfontpageuser />
      <NavHiSubastaAdmi />
      <TablahiSubastaAdmi />
      <Footer />
    </div>
  );
}

export default HiSubastasadmi;
