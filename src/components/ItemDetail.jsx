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

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
    return (
        <div className="d-flex align-items-center gap-2">
            <button
                className="btn btn-outline-secondary"
                onClick={() => setCount(count > 1 ? count - 1 : 1)}
            >
                -
            </button>
            <span>{count}</span>
            <button
                className="btn btn-outline-secondary"
                onClick={() => setCount(count < stock ? count + 1 : stock)}
            >
                +
            </button>
            <button
                className="btn btn-success"
                onClick={() => onAdd(count)}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemDetail