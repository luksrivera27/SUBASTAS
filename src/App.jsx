import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
// import { Formlogin } from './components/Formlogin';
import { Header } from './components/Header';
import { Headerfontpageuser } from './components/Headerfontpageuser';
import { Navegacion } from './components/Navegacion';
import { NavUserAmi } from './components/NavUserAmi';
import { NavUserEx } from './components/NavUserEx';
import { NavUserIn } from './components/NavUserIn';
import { SectionAdmi } from './components/SectionAdmi';
import { SectionIndex } from './components/SectionIndex';



function App() {
  return (
    <div>
    {/* FRONTPAGEADMI */}
    <Headerfontpageuser />
    <NavUserAmi />
    <SectionAdmi />
    <Footer />

    {/* FRONTPAGEUSERIN */}
    {/* <Headerfontpageuser />
    <NavUserIn />
    <SectionAdmi />
    <Footer />  */}

    {/* FONTPAGEUSEREx */}
    {/* <Headerfontpageuser />
    <NavUserEx />
    <SectionIndex />
    <Footer /> */}

    {/* INDEX */}
    {/* <Header />
    <Navegacion />
    <SectionIndex />
    {/* <Formlogin />
    <Footer /> */}
    </div>
  );
}

export default App;
