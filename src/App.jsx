import { useState } from 'react'
import './css/style.css'

{  /* The following line can be included in your src/index.js or App.js file */ }
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar'
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import ErrorPage from './components/ErrorPage';
import Contactenos from './components/Contactenos';
import Nosotros from './components/Nosotros';
import Ingresar from './components/Ingresar';

function App() {
  return (

    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={
          <ItemListContainer  saludo1="Bienvenido"
                              saludo2="Catalogo de productos"
                            />
        } />
        <Route path='/categoria/:idCategoria' element={
          <ItemListContainer  saludo1="Lista por categoria "
                            />
        } />
        <Route path='/Item/:idProd' element={<ItemDetailContainer />} />    {/* <p>Un solo producto, metodo 1 </p>  */}
        <Route path='/contactenos' element={<Contactenos />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/ingresar' element={<Ingresar />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>

  )
}

export default App
