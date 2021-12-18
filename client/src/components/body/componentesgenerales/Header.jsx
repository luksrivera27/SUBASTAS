import React from 'react'
import './styleindex.css'
import IconoVendido from './IconoVendido.png'
export default function Header() {
    return (
        <div class="header d-flex flex-wrap align-items-center justify-content-md-between py-2 mb-2 ">
            <a href={"/"} class="d-flex align-items-center me-5 text-dark text-decoration-none">
            <img  src={IconoVendido} alt="logo" class="logo bi mx-2" width="40" height="32"/>
            <h2 class="Vendido" >Vendido</h2>
            </a>
            <div class="text-end">
                <a href={"/Login"} class="btn btn-outline-light me-2">Iniciar Sesión</a>
                <a href={"/register"} class="btnR btn btn-outline-light ">Registrarse</a>
            </div>
        </div>
    )
}
