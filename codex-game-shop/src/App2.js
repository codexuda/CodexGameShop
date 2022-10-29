import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MenuPrincipal from './components/MenuPrincipal';
import Rutas from './components/Rutas';

function App2() {
    return (
        <BrowserRouter>
            <MenuPrincipal />
            <Rutas />
        </BrowserRouter>
    );

}

export default App2;
