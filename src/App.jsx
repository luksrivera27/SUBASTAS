import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
// import { Formlogin } from './components/Formlogin';
import { Header } from './components/Header';
import { Navegacion } from './components/Navegacion';
import { SectionIndex } from './components/SectionIndex';


function App() {
  return (
    <div>
    <Header />
    <Navegacion />
    <SectionIndex />
    {/* <Formlogin /> */}
    <Footer />
    </div>
  );
}

export default App;
