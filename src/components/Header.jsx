import React from 'react'
import './styleindex.css'
import IconoVendido from './IconoVendido.png'
export function Header() {
    return (
        <div class="container-fluid">
            <header class="header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" >
                <a href={""} class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img class="logo" src={IconoVendido} alt="logo" class="bi me-2" width="40" height="32" role="img" />
                <h2 class="Vendido" >Vendido</h2>
                </a>
                
                <div class="col-md-3 text-end">
                    <a href={""} class="btn btn-outline-light me-2">Iniciar Sesión</a>
                    <a href={""} class="btnR btn btn-outline-dark">Registrarse</a>
                </div>
            </header>
        </div>
    )
}
