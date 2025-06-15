// =============================================================
//
// CartWidget.jsx
// Es llamada en el NavBar.jsx 
// Por ahora solo para mostrar el icono del carrito de compras
//
// =============================================================

import { MdOutlineShoppingCart } from "react-icons/md";
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
    
    return (
        <div>
            
            <MdOutlineShoppingCart color="grey" size={25}/>
            <Badge bg="success" >{3}</Badge>

        </div>
    );
    }

    export default CartWidget;