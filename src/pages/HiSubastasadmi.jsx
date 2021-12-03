import React from "react";
import Footer from "./components/Footer";
import Headerfontpageuser from "./components/Headerfontpageuser";
import NavHiSubastaAdmi from "./components/NavHiSubastaAdmi";
import TablaSubastaAdmi from "./components/TablaSubastaAdmi";



const HiSubastasadmi=() =>{
  return (
    <div> 
      <Headerfontpageuser />
      <NavHiSubastaAdmi />
      <TablaSubastaAdmi />
      <Footer />
    </div>
  );
}

export default HiSubastasadmi;
