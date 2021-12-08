import React from 'react'
import Fosil from './Fosil.png'
import Fosil1 from './Fosil1.png'
import Fosil2 from './Fosil2.png'
import Fosil3 from './Fosil3.png'
import Fosil4 from './Fosil4.png'
import './StylePerfil.css'
export default function SectionPerfil() {
    return (

        <div className="Padre container-fluid">
            <div className="row">
                <div class="col d-flex justify-content-center">
                    <div class="contenedor-fluid">
                        <div class="container d-flex flex-column">
                            <div class="d-flex flex-column m-auto">
                                <label htmlFor="">Nombre Completo:</label>
                                <input class="input my-2" type="fecha" />
                                <label htmlFor="">Fecha de Nacimiento:</label>
                                <input class="input my-2" type="Date" />
                                <label htmlFor="">Fecha de Expedición ID:</label>
                                <input class="input my-2" type="Date" />
                                <label htmlFor="">Correo Electronico:</label>
                                <input class="input my-2" type="Email" />
                                <label htmlFor="">Rol:</label>
                                <input class="input my-2" type="fecha" />
                            </div>
                        </div>
                        <hr></hr>
                        <div class="d-flex justify-content-center">
                            <button class="btnp1 btn-primary btn-lg m-3" size="lg" active>
                                Editar
                            </button>
                            <input class="btnp1 btn-primary btn-lg m-3" type="submit" value="Guardar"/>
                            <a class="btnp1 btn-primary btn-lg m-3" href="">Cambio Contraseña</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}