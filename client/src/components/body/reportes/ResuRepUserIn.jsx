import React from "react";
import Footer from "../componentesgenerales/Footer";
import Headerfontpageuser from "../componentesgenerales/Headerfontpageuser";
import NavRepSubastaIn from "../componentesgenerales/NavRepSubastaIn";
import TablaResuReporteIn from "../componentesgenerales/TablaResuReporteIn";


const ResuRepUserIn =() =>{
  return (
    <div> 
      <Headerfontpageuser />
      <NavRepSubastaIn />
      <TablaResuReporteIn />
      <Footer />
    </div>
  );
}

export default ResuRepUserIn;