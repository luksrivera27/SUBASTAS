import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/notification/Notification";
import {
  isEmpty,
  isEmail,
  isLength,
  isMatch,
  
} from "../../utils/validation/Validation";

import Logo from "./logo.png"
import './master.css'

//Variables iniciales
const initialState = {
  name: "",
  tipo_id:"",
  id:"",
  email: "",
  fecha_nacimiento:"",
  fecha_exp_documento:"",
  password: "",
  cf_password: "",
  err: "",
  success: "",
 
};

//Función que ejecuta todo el registro
function Register() {
  const [user, setUser] = useState(initialState);
  const history = useHistory();

//Constantes iniciales
  const {
    name,
    tipo_id,
    id,
    email,
    fecha_nacimiento,
    fecha_exp_documento,
    password,
    cf_password,
    err,
    success
    
  } = user;

//Almacena el nombre del campo y su valor
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };
//Cuando se ejecuta el formulario carga la función
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Condiciones para evaluar los campos
    if (isEmpty(name) || isEmpty(password))
      return setUser({
        ...user,
        err: "Por favor, rellena todos los campos.",
        success: "",
      });

    if (!isEmail(email))
      return setUser({ ...user, err: "Correos invalidos", success: "" });

  

    if (isLength(password))
      return setUser({
        ...user,
        err: "La contraseña debe tener al menos 6 caracteres.",
        success: "",
      });

    

    if (!isMatch(password, cf_password))
      return setUser({
        ...user,
        err: "Las contraseñas son diferentes.",
        success: "",
      });

//Sube los datos de un metodo post a la ruta.
    try {
      const res = await axios.post("/register", {
        name,
        tipo_id,
        id,
        email,
        fecha_nacimiento,
        fecha_exp_documento,
        password
        
      });
      console.log("datos capturados")
//Carga los datos de registro a la base de datos
      setUser({ ...user, err: "", success: res.data.msg });
      history.push("/");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };
  
//Todo lo visible en las vistas está después del return
  return (
    <div>
    <div >
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)} 
    </div>
    <div className="bodyformularios"> 
    

    <div class="registro-box">
    <Link to="/"><img src={Logo} className="avatar" alt="Logo" /> </Link>

       <form onSubmit={handleSubmit}>
       <input type="text" value={name} name="name" onChange={handleChangeInput} placeholder="NOMBRE COMPLETO"/>
       <input type="text" value={tipo_id} name="tipo_id" onChange={handleChangeInput} placeholder="TIPO DE DOCUMENTO DE ID"/>
       <input type="text" value={id} name="id" onChange={handleChangeInput} placeholder="NÚMERO DE IDENTIFICACIÓN"/>
       <input type="text" value={email} name="email" onChange={handleChangeInput} placeholder="CORREO ELECTRÓNICO"/>
       <input type="date" value={fecha_nacimiento} name="fecha_nacimiento" onChange={handleChangeInput} placeholder="FECHA DE NACIMIENTO"/>
       <input type="date" value={fecha_exp_documento} name="fecha_exp_documento" onChange={handleChangeInput} placeholder="FECHA DE EXPEDICIÓN ID"/>
       <input type="password" value={password} name="password" onChange={handleChangeInput} placeholder="CONTRASEÑA"/>
       <input type="password" value={cf_password} name="cf_password" onChange={handleChangeInput}placeholder="VERIFICA TU CONTRASEÑA"/>

       <input type="submit" value="REGISTRARME"/>
       
       </form>
       <p>
          ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
   </div> 
   </div> 
   

    
   </div>
      
      
        
    
  );
}

export default Register;
