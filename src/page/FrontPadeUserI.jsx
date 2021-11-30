import React from 'react'
import { Headerfontpageuser } from '../components/Headerfontpageuser'
import { NavUserIn } from '../components/NavUserIn'
import { SectionAdmi } from '../components/SectionAdmi'
import { Footer } from './components/Footer'

export function FrontPadeUserI() {
    return (
        <div>
            <Headerfontpageuser />
            <NavUserIn />
            <SectionAdmi />
            <Footer /> 
        </div>
    )
}
