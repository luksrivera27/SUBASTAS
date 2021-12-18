import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import IconoVendido from './IconoVendido.png'

function Header() {
  const auth = useSelector((state) => state.auth);

  const { isLogged } = auth;

//Función  para cerrar sesión
  const handleLogout = async () => {
    try {
      await axios.get("/user/logout");
      localStorage.removeItem("firstLogin");
      window.location.href = "/";
    } catch (err) {
      window.location.href = "/";
    }
  };
//Se activa cuando se ha iniciado una sesión
  const userLink = () => {
    return (
      <li className="drop-nav">
        <Link to="#">
          <h2>Menú</h2>
          <i className="fas fa-angle-down"></i>
        </Link>
        <ul className="dropdown">
          <li>
            <Link to="/profile">Perfil</Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout}>
              Cerrar sesión
            </Link>
          </li>
        </ul>
      </li>
    );
  };

  const transForm = {
    transform: isLogged ? "translateY(-5px)" : 0,
  };
//Carga todo lo que aparece en el header
  return (
   
      <div class="header d-flex flex-wrap align-items-center justify-content-md-between py-2 mb-2 ">
            <Link to="/" class="d-flex align-items-center me-5 text-dark text-decoration-none">
            <img class="logo" src={IconoVendido} alt="logo" class="bi mx-2" width="40" height="32"  />
            <h2 class="Vendido" >Vendido</h2>
            </Link>
            <div class="text-end">
            <Link to="/login" class="btn btn-outline-light me-2">Iniciar Sesión</Link>
            <Link to= "/register" class="btnR btn btn-outline-light ">Registrarse</Link>
            </div>
      </div>

      
   
  );
}

export default Header;
