import React from 'react'
import Logo from "./logo.png"
/* import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap' */
import './master.css'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function Formregistro() {
    return (
        <div class="bodyformularios">    
     <div class="registro-box">
         <img src={Logo} className="avatar" alt="Logo" /> 

        <form>
        <input type="text" placeholder="NOMBRE COMPLETO"/>
        <input type="text" placeholder="TIPO DE DOCUMENTO DE ID"/>
        <input type="text" placeholder="NÚMERO DE IDENTIFICACIÓN"/>
        <input type="text" placeholder="CORREO ELECTRÓNICO"/>
        <input type="date" placeholder="FECHA DE NACIMIENTO"/>
        <input type="date" placeholder="FECHA DE EXPEDICIÓN ID"/>
        <input type="password" placeholder="CONTRASEÑA"/>
        <input type="password" placeholder="VERIFICA TU CONTRASEÑA"/>

        <input type="submit" value="REGISTRARME"/>
        <a href={"/Login"}><input type="button" value="INICIAR SESIÓN"/></a>

        </form>

    </div> 
    </div>  
    )
}