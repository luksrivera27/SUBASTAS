import React from 'react'

export default function TablaSubastaex() {
    return (
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col ">#</th>
                    <th scope="col">Referencia</th>
                    <th scope="col">Subasta</th>
                    <th scope="col">Fecha de cierre</th>
                    <th scope="col">Fecha de puja</th>
                    <th scope="col">Valor puja</th>
                    <th scope="col">Estado subasta</th>
                    <th scope="col">Detalle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td class ="Referencia">10043575485</td>
                    <td class ="subasta">Fosil: Rectiliano</td>
                    <td class ="fechacierre">30/11/2021</td>
                    <td class ="fechapuja">20/10/2021</td>
                    <td class ="Valor">$300.000</td>
                    <td class ="Estadosubasta">Cerrada</td>        
                    
                    <td class="Versubasta"><a type="button" class="btn btn-primary " href ={"/frontadmi"}>Ver</a></td>
        
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td class ="Referencia">10043575520</td>
                    <td class ="subasta">Fosil: Reptil</td>
                    <td class ="fechainicio">11/11/2021</td>
                    <td class ="fechacierre">30/10/2021</td>
                    <td class ="Valor">$100.000</td>
                    <td class ="Estado subasta">Cerrada</td>
                      
                    <td class="Versubasta"><a type="button" class="btn btn-primary " href ={"/frontadmi"}>Ver</a></td>
        
                   </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td class ="Referencia">10043575485</td>
                    <td class ="subasta">Fosil: Rectiliano</td>
                    <td class ="fechainicio">02/12/2021</td>
                    <td class ="fechacierre">01/12/2021</td>
                    <td class ="Valor puja">$580.000</td>
                    <td class ="Estado subasta">Ganada</td>
                      
                    <td class="Versubasta"><a type="button" class="btn btn-primary " href ={"/frontadmi"}>Ver</a></td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td class ="Referencia">10043575900</td>
                    <td class ="subasta">Fosil: Ambar</td>
                    <td class ="fechainicio">11/11/2021</td>
                    <td class ="fechacierre">01/11/2021</td>
                    <td class ="Valor puja">$900.000</td>
                    <td class ="Estado subasta">Cerrada</td>
                      
                    <td class="Versubasta"><a type="button" class="btn btn-primary " href ={"/frontadmi"}>Ver</a></td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td class ="Referencia">10043575580</td>
                    <td class ="subasta">Fosil: Amonita</td>
                    <td class ="fechainicio">11/12/2021</td>
                    <td class ="fechacierre">21/11/2021</td>
                    <td class ="Valor puja">$250.000</td>
                    <td class ="Estado subasta">En curso</td>
                      
                    <td class="Versubasta"><a type="button" class="btn btn-primary " href ={"/frontadmi"}>Ver</a></td>
                    </tr>
                    <tr>
                    <th scope="row">6</th>
                    <td class ="Referencia">10043575580</td>
                    <td class ="subasta">Fosil: Amonita</td>
                    <td class ="fechainicio">11/12/2021</td>
                    <td class ="fechacierre">21/11/2021</td>
                    <td class ="Valor puja">$180.000</td>
                    <td class ="Estado subasta">En curso</td>
                      
                    <td class="Versubasta"><a type="button" class="btn btn-primary " href ={"/frontadmi"}>Ver</a></td>
                                        </tr>
    
        
                </tbody>
            </table>
        </div>
    )
}
