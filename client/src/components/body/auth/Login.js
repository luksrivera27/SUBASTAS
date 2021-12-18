import React, { useState } from "react";
import Logo from "./logo.png"
import './master.css'
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/notification/Notification";
import { dispatchLogin } from "../../../redux/actions/authAction";
import { useDispatch } from "react-redux";

import {
  isEmpty,
  isEmail,
  
  
} from "../../utils/validation/Validation";



//Constantes iniciales
const initialState = {
  email: "",
  password: "",
  err: "",
  success: "",
};

//Función que ejecuta todo el inicio de sesión
function Login() {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const { email, password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

//Una vez cargado los datos al formulario llegan a esta función
  const handleSubmit = async (e) => {
    console.log("paso1");
    e.preventDefault();
    try {
      const res = await axios.post("/user/login", { email, password });
      setUser({ ...user, err: "", success: res.data.msg });
      //Condiciones para evaluar los campos
      if (isEmpty(email) || isEmpty(password))
       return setUser({
      ...user,
      err: "Por favor, rellena todos los campos.",
      success: "",
    });

  if (!isEmail(email))
    return setUser({ ...user, err: "Correos invalidos", success: "" });

      localStorage.setItem("firstLogin", true);

      dispatch(dispatchLogin());
      history.push("/");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

//Estos son los campos visibles en la ruta de login.
  return (

    <div className="bodyformularios">  
    <br></br>
        <br></br>
        {err && showErrMsg(err)}
        {success && showSuccessMsg(success)} 
    <div className="login-box">
    <Link to="/"> <img src={Logo} className="avatar" alt="Logo" /> </Link>
      <form onSubmit={handleSubmit} >
      <input type="text" placeholder="CORREO ELECTRÓNICO" id="email" value={email} name="email"
              onChange={handleChangeInput}
      />
     
     <input
              type="password"
              placeholder="CONTRASEÑA"
              id="password"
              value={password}
              name="password"
              onChange={handleChangeInput}
            />
     
      <input type="submit"  id="loginboton"  value="INICIAR SESIÓN"/>

      
      
      </form>
      <div className="recuperar">
      <a href={"/Recuperarcontrasena"}>¿Olvidaste la contraseña?</a>

      <hr/>

      <Link to="#"style={{color:'darkgrey'}}>Si no tienes una cuenta, </Link> <Link to="/register"><em style={{fontFamily:'Arapey'}}>regístrate</em></Link>
      </div>
      
      </div>
    </div>
    
    
  );
}

export default Login;
