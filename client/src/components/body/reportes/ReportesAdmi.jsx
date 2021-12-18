import React from "react";
import FormReporteAdmin from '../componentesgenerales/FormReporteAdmin';
import Headerfontpageuser from "../componentesgenerales/Headerfontpageuser";
import NavRepAdmi from "../componentesgenerales/NavRepAdmi";
import Footer from "../componentesgenerales/Footer";
const ReportesAdmi = () => {
  return (
    <div>
      <Headerfontpageuser />
      <NavRepAdmi />
      <FormReporteAdmin />
      <Footer/>
    </div>
  );
}

export default ReportesAdmi;