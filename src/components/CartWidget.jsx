import {useContext} from "react"
import { CartContext } from "../context/CartContext.jsx"

const CartWidget = () => {
    const {cart} = useContext(CartContext)
    return (
        <div>
            <span>🛒</span>
            <span style={{color: "red"}}></span>
        </div>
    )
}

export default CartWidget;
