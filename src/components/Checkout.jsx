import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

const Checkout = () => {
    const { cart, total, clear } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        direccion: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const order = {
                buyer: formData,
                items: cart,
                total: total(),
                date: serverTimestamp()
            };

            const docRef = await addDoc(collection(db, 'orders'), order);
            setOrderId(docRef.id);
            clear();
        } catch (error) {
            console.error('Error al crear la orden:', error);
            alert('Error al procesar la orden. Intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    if (cart.length === 0 && !orderId) {
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <div className="alert alert-warning">
                            <h3>No hay productos en el carrito</h3>
                            <p>Agrega algunos productos antes de proceder al checkout.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (orderId) {
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="alert alert-success">
                                    <h3>¡Orden creada exitosamente!</h3>
                                    <p className="mb-3">Tu compra ha sido procesada correctamente.</p>
                                    <div className="bg-light p-3 rounded mb-3">
                                        <h5>ID de la orden:</h5>
                                        <h4 className="text-primary">{orderId}</h4>
                                    </div>
                                    <p className="text-muted">
                                        Te enviaremos un email con los detalles de tu compra.
                                    </p>
                                    <a href="/productos" className="btn btn-primary">
                                        Continuar comprando
                                    </a>
                                </div>
                            </div>
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
                    <h2 className="mb-4">💳 Checkout</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h5>Información de contacto</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="nombre" className="form-label">Nombre completo *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nombre"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="email" className="form-label">Email *</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="telefono" className="form-label">Teléfono *</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="telefono"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="direccion" className="form-label">Dirección *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="direccion"
                                            name="direccion"
                                            value={formData.direccion}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-success"
                                    disabled={loading}
                                >
                                    {loading ? 'Procesando...' : 'Confirmar compra'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h5>Resumen de compra</h5>
                        </div>
                        <div className="card-body">
                            {cart.map((item) => (
                                <div key={item.id} className="d-flex justify-content-between mb-2">
                                    <span>{item.nombre} x{item.quantity}</span>
                                    <span>${(item.precio * item.quantity).toLocaleString()}</span>
                                </div>
                            ))}
                            <hr />
                            <div className="d-flex justify-content-between">
                                <strong>Total:</strong>
                                <strong className="text-primary">${total().toLocaleString()}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
