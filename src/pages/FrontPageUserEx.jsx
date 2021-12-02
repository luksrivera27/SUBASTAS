import React from 'react'
import Footer from './components/Footer';

import Headerfontpageuser from './components/Headerfontpageuser';
import NavUserEx from './components/NavUserEx';
import SectionIndex from './components/SectionIndex';
// import  Footer  from './components/Footer';

const FrontPageUserEx =() =>{
    return (
        <div>
            <Headerfontpageuser />
            <NavUserEx />
            <SectionIndex />
            <Footer />
        </div>
    );
}

export default FrontPageUserEx;
