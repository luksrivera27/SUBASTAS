import React from 'react'
import Logo from "./logo.png"
import './master.css'
import {Component} from 'react'


class Formlogin extends React.Component {
    constructor(props) {
        super(props);
        this.email=React.createRef();
        this.password=React.createRef();
    }
    clickRefs(evento){
        evento.preventDefault();
        console.log(this.email.current.value);
        console.log(this.password.current.value);
    }
    clickEventos(evento){
        evento.preventDefault();
        let email=evento.target[0].value;
        let password=evento.target[1].value;
        if (email==1){
            
        }
    }
  render(){
    return (
    <div className="bodyformularios">   
     <div className="login-box">
         <img src={Logo} className="avatar" alt="Logo" /> 
        <form onSubmit={this.clickEventos} >
        <input type="email" id="email"  ref={this.email} onChange={(e)=>{const email = e.target}} placeholder="CORREO ELECTRÓNICO"/>
               
        <input type="password"  id="password" placeholder="CONTRASEÑA"  ref={this.password}/>
        <input type="submit"  id="loginboton"value="INICIAR SESIÓN"/>

        <div className="recuperar">
        <a href={"/Recuperarcontrasena"}>¿Olvidaste la contraseña?</a>

        <hr/>

        <a href={"#"}style={{color:'darkgrey'}}>Si no tienes una cuenta, </a> <a href={"/Registro"}><em style={{fontFamily:'Arapey'}}>regístrate</em></a> 
        </div>
        
        </form>

    </div>  
    </div>
    )
  }
}
export default Formlogin;