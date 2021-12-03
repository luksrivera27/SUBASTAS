import React from 'react'
import './styleindex.css'
export default function Navegaciongeneral() {
    return (
        <div class="Navegacion">
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li class="nav-item">
                            <a class="nav navbar-brand negrita"  href={"/"}>Inicio</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav navbar-brand negrita"  href={"/Sobrenosotros"}>Sobre nosotros</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
                <hr></hr>
        </div>
    )
}
