import React from "react";
import Footer from "./components/Footer";
import Headerfontpageuser from "./components/Headerfontpageuser";
import NavRepSubastaIn from "./components/NavRepSubastaIn";
import TablaResuReporteIn from "./components/TablaResuReporteIn";


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