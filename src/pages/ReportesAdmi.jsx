import React from "react";
import FormReporteAdmin from './components/FormReporteAdmin';
import Headerfontpageuser from "./components/Headerfontpageuser";
import NavRepAdmi from "./components/NavRepAdmi";
const ReportesAdmi = () => {
  return (
    <div>
      <Headerfontpageuser />
      <NavRepAdmi />
      <FormReporteAdmin />
    </div>
  );
}

export default ReportesAdmi;