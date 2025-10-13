import ItemCount from "./ItemCount";
import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from "../context/CartContext.jsx";

const ItemDetail = ({detalle}) => {
    const { addItem, isInCart } = useContext(CartContext);
    const [addedToCart, setAddedToCart] = useState(false);
    
    const onAdd = (cantidad) => {
        addItem(detalle, cantidad);
        setAddedToCart(true);
        alert(`Agregaste ${cantidad} unidades al carrito`);
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    {detalle.img && (
                        <img 
                            src={detalle.img} 
                            alt={detalle.nombre} 
                            className="img-fluid rounded" 
                            style={{ maxWidth: "400px" }} 
                        />
                    )}
                </div>
                <div className="col-md-6">
                    <h2 className="mb-3">{detalle.nombre}</h2>
                    <p className="text-muted mb-3">{detalle.descripcion}</p>
                    <p className="h4 text-primary mb-3">${detalle.precio.toLocaleString()}</p>
                    <p className="mb-3">
                        <strong>Stock disponible:</strong> {detalle.stock}
                    </p>
                    
                    {detalle.stock > 0 ? (
                        addedToCart || isInCart(detalle.id) ? (
                            <div className="alert alert-success">
                                <h5>¡Producto agregado al carrito!</h5>
                                <p>Puedes ver tu carrito o continuar comprando.</p>
                            </div>
                        ) : (
                            <ItemCount 
                                key={detalle.id} 
                                stock={detalle.stock} 
                                initial={1} 
                                onAdd={onAdd} 
                            />
                        )
                    ) : (
                        <div className="alert alert-warning">
                            <h5>Producto sin stock</h5>
                            <p>Este producto no está disponible en este momento.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail