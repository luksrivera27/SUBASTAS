import React from "react";
import Footer from "./components/Footer";
import Headerfontpageuser from "./components/Headerfontpageuser";
import NavHiUserEx from './components/NavHiRepUser';
import TablaUserAdmi from "./components/TablaReportesex";
const Historialusuarioexterno = () => {
  return (
    <div>
      <Headerfontpageuser />
      <NavHiUserEx />
      <TablaUserAdmi />
      <Footer />
    </div>
  );
}

export default Historialusuarioexterno;