import React from "react";
import Footer from "../componentesgenerales/Footer";
import Headerfontpageuser from "../componentesgenerales/Headerfontpageuser";
import NavHiUserAdmi from "../componentesgenerales/NavHiUserAdmi";
import TablaUserAdmi from "../componentesgenerales/TablaReporteAdmin";

const Historialadminuser = () => {
  return (
    <div>
      <Headerfontpageuser />
      <NavHiUserAdmi />
      <TablaUserAdmi />
      <Footer />
    </div>
  );
}

export default Historialadminuser;