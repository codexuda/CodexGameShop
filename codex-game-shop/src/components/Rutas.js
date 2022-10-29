import { Routes, Route } from "react-router-dom";

import Inicio from '../vistas/Inicio'

import Administrador from '../vistas/Administrador'
import ListaProd from './administrador/ListaProd'
import Modificar from './administrador/Modificar'
import Ventas from './administrador/Ventas'

import Clientes from '../vistas/Clientes'
import Carrito from './cliente/Carrito'
import ListaProdCli from './cliente/ListaProdCli'


const Rutas = () => {
    return (
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path="/Administrador" element={<Administrador />} />
            <Route path="/Clientes" element={<Clientes />} />
            <Route path='/ListaProd' element={<ListaProd />} />
            <Route path='/Modificar' element={<Modificar />} />
            <Route path='/ventas' element={<Ventas />} />
            <Route path='/Carrito' element={<Carrito />} />
            <Route path='/ListaProdCli' element={<ListaProdCli />} />

        </Routes>
    );
}

export default Rutas; 
