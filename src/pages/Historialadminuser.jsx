import React from "react";
import Footer from "./components/Footer";
import Headerfontpageuser from "./components/Headerfontpageuser";
import NavHiUserAdmi from "./components/NavHiUserAdmi";
import TablaUserAdmi from "./components/TablaReporteAdmin";

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