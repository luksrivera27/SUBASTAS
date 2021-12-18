import React from 'react'
import './StyleCongfigPujar.css'
export default function SectionConfigPujar() {
    return (

        <div className="Padre container-fluid">
            <div className="row">
                <div class="col d-flex-colum">
                    <div class="d-flex justify-content-center">
                        <h2 class="title mx-3" >Datos Requeridos</h2>
                    </div>
                    <div class="padrastro container d-lg-flex d-md-flex-colum justify-content-between">
                        <div class="form-file my-2">
                            <div class="form-file_action">
                                <div class="cont d-flex justify-content-center">
                                    <p class="texto">Subir Archivo</p>
                                </div>
                                <input class="add" type="file" />
                            </div>
                            <div class="form-file_result">
                                <img src="" alt="" />
                            </div>    
                        </div>
                        <div class="container">
                            <div class="container d-flex">
                                <div class="container d-flex">
                                    <input class="input my-2" type="text" placeholder="Nombre del Fosil" />
                                </div>
                            </div>
                            <div class="container d-flex" >
                                <div class="container d-flex">
                                    <textarea class="input my-2" name="" id="" cols="30" rows="10" placeholder="Descripcion (Max. 500)"></textarea>
                                </div>
                                <div class="container-fluid">
                                    <input class="input my-2" type="Date" placeholder="Fecha de Inicio"/>
                                    <input class="input my-2" type="Time" placeholder="Hora de Inicio"/>
                                    <input class="input my-2" type="Date" placeholder="Fecha de Cierre"/>
                                    <input class="input my-2" type="Time" placeholder="Hora de Cierre"/>
                                    <input class="input my-2" type="texto10" placeholder="Nombre del Propietario"/>
                                    <input class="input my-2" type="texto10" placeholder="Valor Estimado"/>
                                    <input class="input my-2" type="texto10" placeholder="Monto Inicio de Puja"/>
                                </div>
                            </div>
                            <div class="">
                                <input class="btnp2 btn-primary btn-lg" type="submit" />
                                
                            </div>
                        </div>

                        
                    </div>
                    
                    
                </div>
            </div>
            <hr></hr>
        </div>
    )
}