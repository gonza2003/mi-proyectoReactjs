import {useContext} from "react"
import { CartContext } from "../context/CartContext.jsx"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext)
    
    return (
        <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{ fontSize: '1.5rem' }}>🛒</span>
                {cartQuantity() > 0 && (
                    <span 
                        style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '-8px',
                            backgroundColor: 'red',
                            color: 'white',
                            borderRadius: '50%',
                            width: '20px',
                            height: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            fontWeight: 'bold'
                        }}
                    >
                        {cartQuantity()}
                    </span>
                )}
            </div>
        </Link>
    )
}

export default CartWidget;
