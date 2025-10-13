import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
    const { cart, removeItem, total, clear } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <div className="alert alert-info">
                            <h3>🛒 Tu carrito está vacío</h3>
                            <p>Agrega algunos productos para comenzar tu compra.</p>
                            <Link to="/productos" className="btn btn-primary">
                                Ver productos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <h2 className="mb-4">🛒 Mi Carrito</h2>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-8">
                    {cart.map((item) => (
                        <div key={item.id} className="card mb-3">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-2">
                                        {item.img && (
                                            <img 
                                                src={item.img} 
                                                alt={item.nombre}
                                                className="img-fluid rounded"
                                                style={{ maxWidth: "80px" }}
                                            />
                                        )}
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="card-title">{item.nombre}</h5>
                                        <p className="card-text text-muted">{item.descripcion}</p>
                                    </div>
                                    <div className="col-md-2">
                                        <p className="mb-0">
                                            <strong>Cantidad:</strong> {item.quantity}
                                        </p>
                                    </div>
                                    <div className="col-md-2">
                                        <p className="mb-0">
                                            <strong>Precio:</strong> ${item.precio.toLocaleString()}
                                        </p>
                                    </div>
                                    <div className="col-md-2">
                                        <p className="mb-0">
                                            <strong>Subtotal:</strong> ${(item.precio * item.quantity).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-12 text-end">
                                        <button 
                                            className="btn btn-outline-danger btn-sm"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h5>Resumen de compra</h5>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between mb-2">
                                <span>Total de productos:</span>
                                <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between mb-3">
                                <strong>Total:</strong>
                                <strong className="text-primary">${total().toLocaleString()}</strong>
                            </div>
                            
                            <div className="d-grid gap-2">
                                <Link to="/checkout" className="btn btn-success">
                                    Proceder al pago
                                </Link>
                                <button 
                                    className="btn btn-outline-secondary"
                                    onClick={clear}
                                >
                                    Vaciar carrito
                                </button>
                                <Link to="/productos" className="btn btn-outline-primary">
                                    Continuar comprando
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
