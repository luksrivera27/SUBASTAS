import React from 'react'

export default function NavHiUserAdmi() {
    return (
        <div class="NavHiSubastaAdmi">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                        <a class="Hsubasta negrita navbar-brand" href={"#"} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Historial de Usuarios
                        </a>
                        <ul class="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href={"/historialSubastaAdmi"}>Historial de subastas</a></li>
                            <li><a class="dropdown-item" href={"/ReportesAdmi"}>Generar reporte</a></li>
                            <li><a class="dropdown-item"  href={"/configurarsubastaadmi"}>Subir subasta</a></li>
                        </ul>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-end" id="navbarNavDropdown">
                        <a class="nav navbar-brand negrita " href={"/frontadmi"}>Inicio</a>
                        <a class="nav navbar-brand negrita " href={"/Perfiladmi"}>Perfil</a>
                        <input type="submit" class="btn btn-outline nav navbar-brand negrita align-items-end" href={""} value="Cerrar sesión" />
                    </div>
                </div>
            </nav>
            <hr></hr>
        </div>
    )
}
