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

{/*         <Form>
            <Form.Group className="input" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Correo electronico" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            
                <Form.Control type="password" placeholder="Contraseña" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">

            <Form.Check type="checkbox" label="Recordar" />
                <a className="ancla" href={""}>¿olvidaste tu contraseña?</a> 
            </Form.Group>
        
        <Button variant="primary" type="submit">
            Iniciar Sesion
        </Button>
        </Form>  */}


        <form>
        <input type="email" placeholder="CORREO ELECTRÓNICO"/>
        

        
        <input type="password" placeholder="CONTRASEÑA"/>
        <input type="submit" value="INICIAR SESIÓN"/>

        <div class="recuperar">
        <a href={"/Recuperarcontrasena"}>¿Olvidaste la contraseña?</a>

        <hr/>

        <a style={{color:'darkgrey'}}>Si no tienes una cuenta, </a> <a href={"/Registro"}><em style={{fontFamily:'Arapey'}}>regístrate</em></a> 
        </div>
        
        </form>

    </div>  
    </div>
    )
}