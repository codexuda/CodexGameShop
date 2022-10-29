import React from 'react'
import { NavLink } from 'react-router-dom'

function NavClient() {
    return (
        <div
        style={{top:60,left:0,position:'absolute',width:'100%'}}
        >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Clientes</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/ListaProdCli">Lista Productos Clientes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Carrito">Carrito</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default NavClient