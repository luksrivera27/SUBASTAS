import React from "react";
import Footer from "./components/Footer";
import Headerfontpageuser from "./components/Headerfontpageuser";
import NavRepSubastaAdmi from "./components/NavRepSubastaAdmi";
import TablaResuReporteAdmi from "./components/TablaResuReporteInAdmi";



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