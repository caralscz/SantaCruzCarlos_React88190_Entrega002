// -------------------------------------------------------- +
//
// Muestro los productos dependiendo del valor pasado en "props.laCategoria"
// Si laCategoria === "99"  lista TODOS los productos por pedido de la consigna          
// Si props.laCategoria  !=="99"  quiere los productos de esa categoría
// siempre los guardo en un array llamado tbCategorias 
//
// -------------------------------------------------------- +

import React from 'react'; 
import Item from './Item';

const ItemList = (props) => {
    
    let  tbCategorias = [];
    let  nombreCateg = "";  // Variable para guardar el nombre de la categoría
    
    // Filtro los productos segun lo solicitado 
    
    if  (props.laCategoria === "99") {
        // Si laCategoria es "99", muestro todos los productos
        tbCategorias = props.data; 
        nombreCateg = "";
    }
    else {
        // Si laCategoria es diferente de "99", filtro por categoría
        tbCategorias = props.data.filter(prod => prod.categoria === props.laCategoria);
        nombreCateg = tbCategorias.length > 0 ? tbCategorias[0].nombreCateg : "... estamos trabajando ...";
    }

    return (
        <>
            <h3 > {nombreCateg}</h3>
            <hr />
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px' , justifyContent: 'space-around', alignItems: 'center'}}>
                {tbCategorias.map((prod) =><Item key={prod.id} losProductos={prod} />)}
        </div>
        </>
    );
}

export default ItemList; 