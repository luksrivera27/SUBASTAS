import React from 'react'
import './StyleVisUsua.css'
import IconoVendido from './IconoVendido.png'
export default function HeaderVisUsua() {
    return (
        <div class="header d-flex flex-wrap align-items-center justify-content-md-between py-2 mb-2 ">
            <a href={""} class="d-flex align-items-center me-5 text-dark text-decoration-none">
            <img class="logo" src={IconoVendido} alt="logo" class="bi mx-2" width="40" height="32" role="img" />
            <h2 class="Vendido" >Vendido</h2>
            </a>
            <div class="text-end">
                <label class="usuario mx-4" htmlFor="">David Rodriguez(UI)</label>
            </div>
        </div>
    )
}