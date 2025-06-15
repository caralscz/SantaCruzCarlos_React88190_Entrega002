// -------------------------------------------------------- +
//
// Venimos desde App.jsx  con '/' o '/categoria/:idCategoria' (desde NavBar.jsx)
// Llamamos a  getProductos() que nos devuelve un array de productos
//             esta función está definida en el mock "AsyncMock.jsx"
// Y mostramos los productos en ItemList
// 
// -------------------------------------------------------- +

import { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { getProductos } from '../mock/AsyncMock';
import ItemList from './ItemList';

const ItemListContainer = (props) => {
        
    const [data, setData] = useState([]) 
    let { idCategoria } = useParams(); /* Obtengo el parámetro de la URL */

    /* Si hay un idCategoria en la URL, lo asigno a unaCategoria, caso contrario asigno "99" */
    idCategoria = idCategoria ? idCategoria : '99'; 

    useEffect(() => {
        getProductos()
        .then((respuesta) => setData(respuesta))
        .catch((error) => console.log(error));
    }, []);

    return (
    <>
            <h1 className="titulo-principal" >{props.saludo1}</h1>
            <h3 >{props.saludo2}</h3>
            <div>
                <ItemList data={data} laCategoria={idCategoria} /> 
            </div>
    </>  
)
}

export default ItemListContainer