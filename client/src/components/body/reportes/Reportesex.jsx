import React from "react";
import FormreporteUser from '../componentesgenerales/FormReporteUser';
import Headerfontpageuser from "../componentesgenerales/Headerfontpageuser";
import NavRepIn from "../componentesgenerales/NavRepIn";
import Footer from "../componentesgenerales/Footer";

const ReportesIn = () => {
  return (
    <div>
      <Headerfontpageuser />
      <NavRepIn />
      <FormreporteUser />
      <Footer/>
    </div>
  );
}

export default ReportesIn;