import React from "react";
import  Footer  from "../componentesgenerales/Footer";
import  Headerfontpageuser  from "../componentesgenerales/Headerfontpageuser";
import  NavUserAmi  from "../componentesgenerales/NavUserAmi";
import  SectionAdmi from "../componentesgenerales/SectionAdmi";
const FrontPageAdmi = () => {
  return (
    <div>
      <Headerfontpageuser />
      <NavUserAmi />
      <SectionAdmi />
      <Footer />
    </div>
  );
}

export default FrontPageAdmi;
