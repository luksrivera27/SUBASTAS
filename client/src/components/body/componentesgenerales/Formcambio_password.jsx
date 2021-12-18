import React from 'react'
import Logo from "./logo.png"
/* import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap' */
import './master.css'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faEnvelope} from '@fortawesome/free-solid-svg-icons'


export default function Formcambio_password() {
    return (
      <div class="bodyformularios"> 
     <div class="login-box">
         <img src={Logo} className="avatar" alt="Logo" /> 

        <form>
        <input type="email" placeholder="CONTRASEÑA"/>
        

        
        <input type="password" placeholder="VERIFICA TU CONTRASEÑA"/>
        <input type="submit" value="CAMBIAR CONTRASEÑA"/>

        </form>

    </div>  
    </div> 
    )
}