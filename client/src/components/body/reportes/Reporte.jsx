import React from 'react'
import Headerfontpageuser from '../componentesgenerales/Headerfontpageuser'


export default function resuReporteUserInterno() {
    return (
        <div class="resuReporteUserInterno">
            <Headerfontpageuser />
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse text-end" id="navbarNavDropdown">
                        <a class="nav navbar-brand negrita " href={"/frontadmi"}>Reporte de actividad</a>
                        <input type="submit" class="btn btn-outline nav navbar-brand negrita align-items-end" href={""} value="Descargar" />
                        <input type="submit" class="btn btn-outline nav navbar-brand negrita align-items-end" href={""} value="Cerrar sesión" />
                    </div>
                </div>
            </nav>
            <hr></hr>
        </div>
    )
}
