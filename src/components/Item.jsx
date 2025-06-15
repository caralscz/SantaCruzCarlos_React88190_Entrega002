// =============================================================
//
// Item.jsx : Mostramos el detalle de un producto
// Se llama desde ItemList.jsx 
// En App.jsx se definieron :
//      <Route path='/Item/:idProd'           element={<ItemDetailContainer 
//      <Route path='/categoria/:idCategoria' element={<ItemListContainer 
//
// =============================================================

import React from 'react';
import { Link , useNavigate} from 'react-router-dom';

const Item = ({ losProductos }) => {

    const {id,categoria,prodNro, nombre, precio, stock, imagen, descripcion} = losProductos;

    // Controlamos si es un producto específico o una categoría.
    // Eliminé del array "productos" los elementos que tenían prodNro = "00" (categorías). 
    // Pero dejé la consulta por las dudas si lo agrego de nuevo
    // Es 'true' si es un producto (prodNro existe y no es "00"), 'false' si es categoría.
    const isProduct = prodNro && prodNro !== "00";

    return (

        <div className="card" style={{width: '11rem'}}>
            <img src={imagen} className="card-img-top" alt={nombre} />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text"> 
                        {/* Si es el nombre de una Categoría, no tiene descripcion ni precio  */}
                        { isProduct && `${descripcion} $${precio}` } 
                    </p> 
                   
                    <p style={{color:'white'}}> .</p>  {/* Doy un espacios */}

                    {/* El Link se renderiza SÓLO si NO es una categoría) */}
                    { isProduct ?
                     <Link to={'/item/' + id } className="btn btn-outline-dark btn-sm">Ver detalle</Link> :
                     <Link to={'/categoria/' + categoria } className="btn  btn-outline-dark btn-sm">Ver categoria</Link>
                    }
                </div>
        </div>
          );
}
// {/* <Link to={`/item/${id} `} className="btn btn-secondary">Ver detalle</Link> */} {/* Es otra forma de hacerlo */}

export default Item;