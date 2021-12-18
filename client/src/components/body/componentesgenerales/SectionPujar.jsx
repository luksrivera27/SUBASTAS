import React from 'react'
import Fosil1 from './Fosil1.png'
import Fosil2 from './Fosil2.png'
import Fosil3 from './Fosil3.png'
import Fosil4 from './Fosil4.png'
import './StylePujar.css'
export default function SectionPujar() {
    return (

        <div className="Padre container-fluid">
            <div className="row">
                <div class="col d-flex">
                    <div class="d-flex flex-column">
                        <img class="pict" src={Fosil1} rounded />
                        <label for="formGroupExampleInput" class="form-label">Empezó el "01/12/2021"</label>
                    </div>
                    <div class="vl"></div>
                    <div>
                        <div>
                            <h2 class="title mx-3" >NOMBRE DEL FOSIL</h2>
                        </div>
                        <div class="caja">                
                            <div id="carouselExampleControls" class="carousel slide mx-3" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <img class="img" src={Fosil1} alt="img"/>
                                    </div>
                                    <div class="carousel-item">
                                    <img class="img" src={Fosil2} alt="img"/>
                                    </div>
                                    <div class="carousel-item">
                                    <img class="img" src={Fosil3} alt="img"/>
                                    </div>
                                    <div class="carousel-item">
                                    <img class="img" src={Fosil4} alt="img"/>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="btn visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h5 class="describe m-3">Descripción</h5>
                            </div>
                            <div class="inf mx-3">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque dolore, ad reprehenderit, in sequi autem cumque aliquid mollitia quam consectetur tempore, minima voluptatibus magnam voluptates asperiores deserunt perspiciatis quidem?</p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="padrastro d-flex flex-column p-3 my-5 mx-2">
                        <div class="fila1 d-flex justify-content-between">
                            <label htmlFor="">Propietario: Jose Lopez</label>
                            <label htmlFor="">Cierra en: 05:00:00</label>
                        </div>
                        <div class="fila2 d-flex justify-content-between mt-5">
                            <label htmlFor="">Estimado:</label>
                            <label htmlFor="">$4.000.000 - $5.000.000</label>
                        </div>
                        <hr />
                        <div class="fila3 d-flex">
                            <table class="tabla justify-content-evenly" striped bordered hover size="sm" HorizontalAlign="Center">
                                <thead>
                                    <tr>
                                    <th>N°</th>
                                    <th>Nombre</th>
                                    <th>Ofertado</th>
                                    </tr>
                                </thead>
                                <tbody class="datos align-items-center">
                                    <tr>
                                    <td>1</td>
                                    <td>Elsa Capunta</td>
                                    <td>$18.000.000</td>
                                    </tr>
                                    <tr>
                                    <td>2</td>
                                    <td>Rosa Meltroso</td>
                                    <td>$17.000.000</td>
                                    </tr>
                                    <tr>
                                    <td>3</td>
                                    <td>Alma Madero</td>
                                    <td>$16.000.000</td>
                                    </tr>
                                    <tr>
                                    <td>4</td>
                                    <td>Elsa Capunta</td>
                                    <td>$15.000.000</td>
                                    </tr><tr>
                                    <td>5</td>
                                    <td>Rober Galarga</td>
                                    <td>$14.000.000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr />
                        <div class="fila4 d-flex justify-content-between">
                            <label htmlFor="">Estimado:</label>
                        </div>
                        <div class="fila5 d-flex justify-content-between">
                            <button class="btnp btn-primary btn-lg" size="lg" active>
                                $100.000
                            </button>
                            <button class="btnp btn-primary btn-lg" size="lg" active>
                                $200.000
                            </button>
                            <button class="btnp btn-primary btn-lg" size="lg" active>
                                $300.000
                            </button>
                        </div>
                        <div class="fila6 d-flex justify-content-between mt-3">
                            <label htmlFor="">Oferta Directa:</label>
                        </div>
                        <div class="fila7 d-flex justify-content-between">
                            <input class="input" type="text" placeholder="$" autoFocus/>
                            <input class="btnp btn-primary btn-lg" type="submit" value="Pujar"/>
                        </div>
                        <div class="fila8 d-flex justify-content-evenly my-3">
                            <button class="btnp btn-primary btn-lg" size="lg" active>
                                Cancelar Pujar
                            </button>
                            <a class="btnp btn-primary btn-lg " href="">Pagar</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}