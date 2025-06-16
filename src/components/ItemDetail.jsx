// =============================================================
// 
// Mostramos el detalle de un producto
// Lo llamamos desde "ItemDetailContainer.jsx" para mostrar los detalles de un producto
// Este componente es una copia del componente "Item.jsx"
//      la diferencia es que aquí tiene Link de retorno del detalle del producto
//      y el componente "ItemCount" para agregar al carrito
// En App.jsx se definieron :
//      <Route path='/categoria/:idCategoria' element={<ItemListContainer 
//
// =============================================================

import React from 'react';
import ItemCount from './ItemCount';
import { Link , useNavigate} from 'react-router-dom';
// import { BiColor } from 'react-icons/bi';

const ItemDetail = ({detail}) => {
    if (!detail || Object.keys(detail).length === 0) {
        // Muestra un mensaje si el item no existe o mientras se carga el detalle
        return  <p style={{color: 'red'}}><b>Estamos cargando el producto... </b></p>; 
    }   

    const {id,categoria,prodNro, nombre, precio, stock, imagen, descripcion} = detail;
  
    const onAdd = (cantidad)=>{
        alert(`Ud. agregó ${cantidad} de items`)
    }

    return (
        <>
            <div className="card" >
                <h2 className="card-header">Detalle del producto</h2>
                <span className="badge bg-secondary text-wrap" style={{width: '18rem'}}>
                <div className="card" style={{ width: '18rem' }}>
                    <img 
                        src={imagen} 
                        className="card-img-top  mx-auto d-block" 
                        alt={nombre}   
                        style={{ width: '11rem' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{nombre}      </h5>
                        <p className="card-text">{descripcion}    </p>
                        <p className="card-text">{` $${precio}`} </p>
                        <p className="card-text">Cantidad en stock: {stock} </p>
                        <ItemCount stock={detail.stock} onAdd={onAdd}/>

                        <p style={{color:'white'}}> .</p>  {/* Doy dos espacios */}
                        <p style={{color:'white'}}> .</p>
                        <Link to={'/categoria/' + categoria} className="btn btn-outline-dark btn-sm">Ver categoria</Link>
                    </div>
                </div>
                </span>
            </div>
        </>
    );

}

export default ItemDetail