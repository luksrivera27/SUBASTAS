import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navegacion from "./components/Navegacion";
import SectionIndex from "./components/SectionIndex";
const Home = () => {
  return (
    <div>
      <Header />
      <Navegacion />
      <SectionIndex />
      <Footer />
    </div>
    
  );
}

export default Home;
