import ItemCount from "./ItemCount";
import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from "../context/CartContext.jsx";

const ItemDetail = ({detalle}) => {
    const { addItem } = useContext(CartContext);
    
    const onAdd = (cantidad) => {
        addItem(detalle, cantidad);
        alert(`Agregaste ${cantidad} unidades`);
    }

    return (
        <div>
            <h2>Perfume: {detalle.nombre}</h2>
            <img src={detalle.img} alt={detalle.nombre} style={{ width: "150px" }} />
            <p>{detalle.descripcion}</p>
            <p>Precio: ${detalle.precio}</p>
            <p>Stock disponible: {detalle.stock}</p>
            <ItemCount stock={detalle.stock} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail