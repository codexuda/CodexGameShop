import { Routes, Route } from "react-router-dom";

import Administrador from '../vistas/Administrador'
import Clientes from '../vistas/Clientes'
import Inicio from '../vistas/Inicio'
//import ListaProd from '../components/administrador/ListaProd'
//import ListaProd from '../components/administrador/Modificar'
//import ListaProd from '../components/administrador/Ventas'

const Rutas =() => {
    return (
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path="/administrador" element={<Administrador/>}/>
            <Route path="/clientes" element={<Clientes/>}/>
            <Route path='/ListaProd' element={<ListaProd/>} />
            <Route path='/Modificar' element={<Modificar/>} />
            <Route path='/ventas' element={<Ventas/>} />

        </Routes>
    );
}

export default Rutas; 
