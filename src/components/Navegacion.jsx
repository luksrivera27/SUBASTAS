import React from 'react'
import './styleindex.css'
export function Navegacion() {
    return (
        <div class="Navegacion">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="negrita navbar-brand" href={""}>Contactanos</a>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="negrita nav-link active" aria-current="page" href={""}>Sobre Nosotros</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
                <hr></hr>
        </div>
    )
}
