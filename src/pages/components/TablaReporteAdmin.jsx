import React from 'react'

export default function TablaSubasta() {
    return (
        <div>
            <table class="table table-hover">
                
            <thead>
                    <tr>
                    <th scope="col ">#</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Referencia</th>
                    <th scope="col">Subasta</th>
                    <th scope="col">Fecha inicio</th>
                    <th scope="col">Fecha fin</th>
                    <th scope="col">Fecha puja</th>
                    <th scope="col">Valor puja</th>
                    <th scope="col">Estado subasta</th>
                    <th scope="col">Detalle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td class ="Usuario">Mark Arias</td>
                    <td class ="Id Usuario">10043575520</td>
                    <td class ="subasta">Fosil: Rectiliano</td>
                    <td class ="fecha inicio">10/10/2021</td>
                    <td class ="fecha fin">20/11/2021</td>
                    <td class ="Fecha puja">10/11/2021</td>
                    <td class ="Valor puja">$300.000</td>
                    <td class ="Estadosubasta">Cerrada</td>        
                    <td class="Ver detalle"><a type="button" class="btn btn-primary " href ={"/frontadmi"}>Ver</a></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td class ="Usuario">Mark Arias</td>
                    <td class ="Id Usuario">10043575520</td>
                    <td class ="subasta">Fosil: Rectiliano</td>
                    <td class ="fecha inicio">10/10/2021</td>
                    <td class ="fecha fin">20/11/2021</td>
                    <td class ="Fecha puja">15/11/2021</td>
                    <td class ="Valor puja">$520.000</td>
                    <td class ="Estadosubasta">Ganada</td>        
                    <td class="Ver detalle"><a type="button" class="btn btn-primary " href ={"/frontadmi"}>Ver</a></td>
                     </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td class ="Usuario">Ronald Muñoz</td>
                    <td class ="Id Usuario">10043575520</td>
                    <td class ="subasta">Fosil: Reptil</td>
                    <td class ="fecha inicio">01/10/2021</td>
                    <td class ="fecha fin">20/10/2021</td>
                    <td class ="Fecha puja">10/11/2021</td>
                    <td class ="Valor puja">$250.000</td>
                    <td class ="Estadosubasta">Cerrada</td>        
                    <td class="Ver detalle"><a type="button" class="btn btn-primary " href ={"/frontadmi"}>Ver</a></td>
                    
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td class ="Usuario">Brehilen Leon</td>
                    <td class ="Id Usuario">10043575580</td>
                    <td class ="subasta">Fosil: Amonita</td>
                    <td class ="fecha inicio">01/10/2021</td>
                    <td class ="fecha fin">20/12/2021</td>
                    <td class ="Fecha puja">20/11/2021</td>
                    <td class ="Valor puja">$380.000</td>
                    <td class ="Estadosubasta">En curso</td>        
                    <td class="Ver detalle"><a type="button" class="btn btn-primary " href ={"/frontadmi"}>Ver</a></td>
                    
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td class ="Usuario">Jose Perez</td>
                    <td class ="Id Usuario">10043575580</td>
                    <td class ="subasta">Fosil: Amonita</td>
                    <td class ="fecha inicio">01/10/2021</td>
                    <td class ="fecha fin">20/12/2021</td>
                    <td class ="Fecha puja">25/11/2021</td>
                    <td class ="Valor puja">$480.000</td>
                    <td class ="Estadosubasta">En curso</td>        
                    <td class="Ver detalle"><a type="button" class="btn btn-primary " href ={"/frontadmi"}>Ver</a></td>
                    
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td class ="Usuario">Mark Arias</td>
                    <td class ="Id Usuario">10043575520</td>
                    <td class ="subasta">Fosil: Amonita</td>
                    <td class ="fecha inicio">01/10/2021</td>
                    <td class ="fecha fin">20/12/2021</td>
                    <td class ="Fecha puja">28/11/2021</td>
                    <td class ="Valor puja">$540.000</td>
                    <td class ="Estadosubasta">En curso</td>        
                    <td class="Ver detalle"><a type="button" class="btn btn-primary " href ={"/frontadmi"}>Ver</a></td>
                    
                    </tr>
    
                
                </tbody>
            </table>
        </div>
    )
}
