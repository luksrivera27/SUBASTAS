import React from 'react'

export default function NavUserIn() {
    return (
        <div class="NavUserIn">
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                        <a class="negrita navbar-brand" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Historial
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href={"/HiSubastas"}>Historial de subastas</a></li>
                            <li><a class="dropdown-item" href={"/Reportesex"}>Generar reporte</a></li>
                        </ul>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li class="nav-item">
                            <a class="nav navbar-brand negrita"  href={"/configurarsubastain"}>Subir subasta</a>
                            </li>
                        </ul>
                        <a class="nav navbar-brand negrita " href={"/perfilInterno"}>Perfil</a>
                        <input type="submit" class="btn btn-outline nav navbar-brand negrita align-items-end" href={""} value="Cerrar sesión" />
                    </div>
                </div>
                </nav>
                <hr></hr>
        </div>
    )
}
