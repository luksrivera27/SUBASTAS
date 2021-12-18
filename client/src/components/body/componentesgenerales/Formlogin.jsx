import React from 'react'
import Logo from "./logo.png"
/* import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap' */
import './master.css'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faEnvelope} from '@fortawesome/free-solid-svg-icons'




export default function Formlogin() {
    return (
    <div class="bodyformularios">   
     <div class="login-box">
         <img src={Logo} className="avatar" alt="Logo" /> 

        <form>
        <input type="email" placeholder="CORREO ELECTRÓNICO"/>

        <input type="password" placeholder="CONTRASEÑA"/>
        <input type="submit" value="INICIAR SESIÓN"/>

        <div class="recuperar">
        <a href={"/Recuperarcontrasena"}>¿Olvidaste la contraseña?</a>

        <hr class="lineH"/>

        <a style={{color:'darkgrey'}}>Si no tienes una cuenta, </a> <a href={"/Registro"}><em style={{fontFamily:'Arapey'}}>regístrate</em></a> 
        </div>
        
        </form>

    </div>  
    </div>
    )
}