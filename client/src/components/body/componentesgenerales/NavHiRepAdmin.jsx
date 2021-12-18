import React from 'react'
import { Link} from "react-router-dom";

export default function NavHiSubastaAdmi() {
    return (
        <div class="NavHiSubastaAdmi">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse text-end" id="navbarNavDropdown">
                    <Link to="/frontadmi" class="nav navbar-brand negrita " >Reporte de usuarios</Link>
                        <input type="submit" class="btn btn-outline nav navbar-brand negrita align-items-end" href={""} value="Descargar" />
                        <input type="submit" class="btn btn-outline nav navbar-brand negrita align-items-end" href={""} value="Cerrar sesión" />
                    </div>
                </div>
            </nav>
            <hr></hr>
        </div>
    )
}
