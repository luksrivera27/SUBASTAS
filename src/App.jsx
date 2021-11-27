import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Navegacion } from './components/Navegacion';
import { SectionIndex } from './components/SectionIndex';


function App() {
  return (
    <div>
    <Header />
    <Navegacion />
    <SectionIndex />
    </div>
  );
}

export default App;
