import { Routes, Route } from "react-router-dom";

import Administrador from '../vistas/Administrador'
import Clientes from '../vistas/Clientes'
import Inicio from '../vistas/Inicio'




const Rutas =() => {
    return (
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path="/administrador" element={<Administrador/>}/>
            <Route path="/clientes" element={<Clientes/>}/>
        </Routes>
    );
}

export default Rutas; 
