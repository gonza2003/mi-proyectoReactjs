import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    // Si el stock cambia, resetea el contador
    React.useEffect(() => {
        setCount(initial);
    }, [initial, stock]);

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

export default ItemCount;