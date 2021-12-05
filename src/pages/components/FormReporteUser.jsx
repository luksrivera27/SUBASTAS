import React from 'react'
import data1 from "./data1.png"
import './master.css'


export default function FormReporteUser() {
    return (
    <div class="bodyformularios">   
     <div class="login-box">
         <img src={data1} className="avatar" alt="data1" /> 

{}

        <form>
        <input type="date" placeholder="fecha inicio"/>
        
        <input type="date" placeholder="fecha inicio"/>  
        <a href={"/Historialusuarioexterno"}><input type="button" value="Ver Reporte"/></a>
        
        </form>

    </div>  
    </div>
    )
}