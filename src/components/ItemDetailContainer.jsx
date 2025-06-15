// =============================================================
// Viene desde "Item.jsx" y muestra el detalle de un producto y
//       definido en App.jsx como Route path='/Item/:idProd'
//
// En este componente obtengo un solo producto por ID directamente desde el mock,
// =============================================================

import React, { useEffect, useState} from 'react';
import { getProductos, getUnProducto } from '../mock/AsyncMock';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'; /* Para leer los parámetros de la URL */

 const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({}); /* espero un objeto */
    // const params = useParams(); /*  Obtengo los parámetros de la URL - Opcion 1 */
    const {idProd} = useParams();  /*  - Opcion 2 */

    useEffect(() => {
        getUnProducto(idProd)
        .then((res) => setDetail(res)) 
        .catch((error) => alert(error)); 
    }, []);
    
  return (
    <>
    <ItemDetail detail={detail}/> 
    </>
  )
}

export default ItemDetailContainer