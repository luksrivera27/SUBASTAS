import React from 'react'

export default function TablaResuReporteAdmi() {
    return (
        <div>
            <table class="table table-hover">
                
            <thead>
                    <tr>
                    <th scope="col ">#</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Referencia</th>
                    <th scope="col">Subasta</th>
                    <th scope="col">Fecha de inicio</th>
                    <th scope="col">Tipo de usuario</th>
                    <th scope="col">Detalle</th>
                    <th scope="col">Control</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td class ="Usuario">Mark Arias</td>
                    <td class ="Id Usuario">10043575520</td>
                    <td class ="subasta">Fosil: Rectiliano</td>
                    <td class ="fecha inicio">10/10/2021</td>
                    <td class ="TipoUser">Usuario interno</td>        
                    <td class="Ver detalle"><a type="button" class="btn btn-primary " href ={"/VisualizaciondesubastaAdmi"}>Ver</a></td>
                    <td class="Ver detalle"><input type="submit" class="btn btn-primary " value="Eliminar"></input></td>
                    
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td class ="Usuario">Mark Arias</td>
                    <td class ="Id Usuario">10043575520</td>
                    <td class ="subasta">Fosil: Rectiliano</td>
                    <td class ="fecha inicio">10/10/2021</td>
                    <td class ="Tipo de usuario">Usuaario externo</td>        
                    <td class="Ver detalle"><a type="button" class="btn btn-primary " href ={"/VisualizaciondesubastaAdmi"}>Ver</a></td>
                    <td class="Ver detalle"><input type="submit" class="btn btn-primary " value="Eliminar"></input></td>
                     </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td class ="Usuario">Ronald Muñoz</td>
                    <td class ="Id Usuario">10043575520</td>
                    <td class ="subasta">Fosil: Reptil</td>
                    <td class ="fecha inicio">01/10/2021</td>
                    <td class ="Tipo de usuario">Usuario interno</td>       
                    <td class="Ver detalle"><a type="button" class="btn btn-primary " href ={"/VisualizaciondesubastaAdmi"}>Ver</a></td>
                    <td class="Ver detalle"><input type="submit" class="btn btn-primary " value="Eliminar"></input></td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td class ="Usuario">Brehilen Leon</td>
                    <td class ="Id Usuario">10043575580</td>
                    <td class ="subasta">Fosil: Amonita</td>
                    <td class ="fecha inicio">01/10/2021</td>
                    <td class ="Tipo de usuario">Admin</td>       
                    <td class="Ver detalle"><a type="button" class="btn btn-primary " href ={"/VisualizaciondesubastaAdmi"}>Ver</a></td>
                    <td class="Ver detalle"><input type="submit" class="btn btn-primary " value="Eliminar"></input></td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td class ="Usuario">Jose Perez</td>
                    <td class ="Id Usuario">10043575580</td>
                    <td class ="subasta">Fosil: Amonita</td>
                    <td class ="fecha inicio">01/10/2021</td>
                    <td class ="Tipo de usuario">Usuario externo</td>         
                    <td class="Ver detalle"><a type="button" class="btn btn-primary " href ={"/VisualizaciondesubastaAdmi"}>Ver</a></td>
                    <td class="Ver detalle"><input type="submit" class="btn btn-primary " value="Eliminar" ></input></td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td class ="Usuario">Mark Arias</td>
                    <td class ="Id Usuario">10043575520</td>
                    <td class ="subasta">Fosil: Amonita</td>
                    <td class ="fecha inicio">01/10/2021</td>
                    <td class ="Tipo de usuario">Usuario interno</td>        
                    <td class="Verdetalle"><a type="button" class="btn btn-primary " href ={"/VisualizaciondesubastaAdmi"}>Ver</a></td>
                    <td class="control"><input type="submit" class="btn btn-primary " value="Eliminar"></input></td>
                    </tr> 
    
                
                </tbody>
            </table>
        </div>
    )
}
