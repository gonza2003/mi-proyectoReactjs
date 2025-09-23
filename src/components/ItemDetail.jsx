import ItemCount from "./ItemCount";
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = ({detalle}) => {
    return (
        <div>
            <h2>Perfume: {detalle.nombre}</h2>
            <img src={detalle.img} alt={detalle.nombre} style={{ width: "150px" }} />
            <p>{detalle.descripcion}</p>
            <p>Precio: ${detalle.precio}</p>
            <p>Stock disponible: {detalle.stock}</p>
            <ItemCount stock={detalle.stock} initial={1} onAdd={(cantidad) => alert(`Agregaste ${cantidad} unidades`)} />
        </div>
    )
}

export default ItemDetail