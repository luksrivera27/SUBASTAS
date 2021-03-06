import React from 'react'
import './styleindex.css'
export default function NavUserEx() {
    return (
        <div class="NavUserEx">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                        <a class="negrita navbar-brand" href={"/historialusuarioexterno"} id="navbarDropdownMenuLink" >
                            Historial
                        </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li class="nav-item">
                            <a class="nav navbar-brand negrita"  href={"/Contactanos"}>Contactanos</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav navbar-brand negrita"  href={"/Sobrenosotros"}>Sobre nosotros</a>
                            </li>
                        </ul>
                        <a class="nav navbar-brand negrita " href={"/perfil"}>Perfil</a>
                        <input type="submit" class="btn btn-outline nav navbar-brand negrita align-items-end" href={"/home"} value="Cerrar sesión" />
                    </div>
                </div>
                </nav>
                <hr></hr>
        </div>
    )
}
