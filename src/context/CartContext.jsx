import { createContext, useState } from 'react'



// Crear el contexto
export const CartContext = createContext()

// Crear el proveedor del contexto
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    // Función para agregar un producto al carrito
    const addItem = (item, qty) => {
        if (isInCart(item.id)) {
            const carritoActualizado = cart.map((prod) => {
                if (item.id === prod.id) {
                    return { ...prod, quantity: prod.quantity + qty }
                } else {
                    return prod
                }
            })
            setCart(carritoActualizado)
        } else {
            setCart([...cart, { ...item, quantity: qty }])
        }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const total = () => {
    return cart.reduce((acc, prod) => acc += (prod.quantity * prod.precio), 0)
}

const cartQuantity = () => {
    return cart.reduce((acc, prod) => acc += prod.quantity, 0)
}

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, total, cartQuantity, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}
