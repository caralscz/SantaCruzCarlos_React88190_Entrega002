// =============================================================
//
// ErrorPage.jsx
// Es llamada si no se encuentra una ruta solicitada 
// en la aplicacion, por ejemplo si se escribe una ruta inexistente
//
// =============================================================

import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
      <h1 className="titulo-principal" >***  Error 404***</h1>
      <h3>Lo siento, la pagina no existe !! </h3>
      <Link to='/'  className="btn btn-secondary">Regresar al inicio</Link>
      <hr />
    </>
  )
}

export default ErrorPage