import React from 'react'

export default function NavHiExterno() {
    return (
        <div class="NavHiExterno">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                        <a class="Hsubasta negrita navbar-brand" href={"/historialusuarioexterno"} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Historial de subastas
                        </a>
                        
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex justify-content-end text-end" id="navbarNavDropdown">
                        <a class="nav navbar-brand negrita " href={"/frontUserEX"}>Inicio</a>
                        <a class="nav navbar-brand negrita " href={"/perfil"}>Perfil</a>
                        <input type="submit" class="btn btn-outline nav navbar-brand negrita align-items-end" href={""} value="Descargar" />
                        <input type="submit" class="btn btn-outline nav navbar-brand negrita align-items-end" href={""} value="Cerrar sesión" />
                    </div>
                </div>
            </nav>
            <hr></hr>
        </div>
    )
}
