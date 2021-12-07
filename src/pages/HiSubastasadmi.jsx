import React from "react";
import Footer from "./components/Footer";
import Headerfontpageuser from "./components/Headerfontpageuser";
import NavHiSubastaAdmi from "./components/NavHiSubastaAdmi";
import TablahiSubastaAdmi from "./components/TablaSubastaAdmi";
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
