import React from "react";

import Logo from "./components/logo.png"

import './components/master.css'
class Registro extends React.Component {
  constructor(props) {
      super(props);
      this.nombre=React.createRef();
      this.tipo_id=React.createRef();
      this.id=React.createRef();
      this.email=React.createRef();
      this.fecha_nacimiento=React.createRef();
      this.fecha_exp_documento=React.createRef();
      this.password=React.createRef();
      this.vpassword=React.createRef();
        }
 

  clickRefs(evento){
      evento.preventDefault();
      console.log(this.email.current.value);
      console.log(this.password.current.value);
  }
  clickEventos(evento){
      evento.preventDefault();
      let nombre=evento.target[0].value;
      let tipo_id=evento.target[1].value;
      let id=evento.target[2].value;
      let email=evento.target[3].value;
      let fecha_nacimiento=evento.target[4].value;
      let fecha_exp_documento=evento.target[5].value;
      let password=evento.target[6].value;
      let vpassword=evento.target[7].value;
      
      if (1===1){
          window.location.assign("/Login");
          alert("Registro exitoso !!.ya puedes iniciar sesion")
      }  
      

      
  }
  
 
render(){
  return (
    
    <div class="bodyformularios">    
    <div class="registro-box">
        <img src={Logo} className="avatar" alt="Logo" /> 

       <form onSubmit={this.clickEventos}>
       <input type="text" ref={this.nombre} onChange={(e)=>{const nombre = e.target}} placeholder="NOMBRE COMPLETO"/>
       <input type="text" ref={this.tipo_id} onChange={(e)=>{const tipo_id = e.target}} placeholder="TIPO DE DOCUMENTO DE ID"/>
       <input type="text" ref={this.id} onChange={(e)=>{const id = e.target}} placeholder="NÚMERO DE IDENTIFICACIÓN"/>
       <input type="text" ref={this.email} onChange={(e)=>{const email = e.target}} placeholder="CORREO ELECTRÓNICO"/>
       <input type="date" ref={this.fecha_nacimiento} onChange={(e)=>{const fecha_nacimiento = e.target}} placeholder="FECHA DE NACIMIENTO"/>
       <input type="date" ref={this.fecha_exp_documento} onChange={(e)=>{const fecha_exp_documento = e.target}} placeholder="FECHA DE EXPEDICIÓN ID"/>
       <input type="password" ref={this.password} onChange={(e)=>{const password = e.target}} placeholder="CONTRASEÑA"/>
       <input type="password" ref={this.vpassword} onChange={(e)=>{const vpassword = e.target}} placeholder="VERIFICA TU CONTRASEÑA"/>

       <input type="submit" value="REGISTRARME"/>
       <a href={"/Login"}><input type="button" value="INICIAR SESIÓN"/></a>

       </form>

   </div> 
   </div>  


  )
}
}
export default Registro;