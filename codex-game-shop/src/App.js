import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavAdmin from './components/administrador/NavAdmin';
import ListaProd from './components/administrador/ListaProd';
import Ventas from './components/administrador/Ventas';
import Modificar from './components/administrador/Modificar';

function App() {
  return (
    <div className="App">

      <Router>
        <NavAdmin/>
        <Routes>
          
          <Route exact path='/ListaProd' element={<ListaProd/>} />
          <Route exact path='/Modificar' element={<Modificar/>} />
          <Route exact path='/ventas' element={<Ventas/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
