import React from "react";
import Footer from "../componentesgenerales/Footer";
import Headerfontpageuser from "../componentesgenerales/Headerfontpageuser";
import NavRepSubastaAdmi from "../componentesgenerales/NavRepSubastaAdmi";
import TablaResuReporteAdmi from "../componentesgenerales/TablaResuReporteInAdmi";



const ResuRepUserAdmi =() =>{
  return (
    <div> 
      <Headerfontpageuser />
      <NavRepSubastaAdmi />
      <TablaResuReporteAdmi />
      <Footer />
    </div>
  );
}

export default ResuRepUserAdmi;