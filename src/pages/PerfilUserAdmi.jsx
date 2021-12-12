import React from "react";
import HeaderPerfil from "./components/HeaderPujar"

import SectionPerfil from "./components/SectionPerfil"
import Footer from "./components/Footer"
import NavUserAmi from "./components/NavUserAmi";

const Perfiladmi = () => {
  return (
    <div>
    <HeaderPerfil />
    <NavUserAmi />
    <SectionPerfil />
    <Footer />
    </div>
  );
}

export default Perfiladmi;