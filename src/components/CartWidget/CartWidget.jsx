import './CartWidget.css'
import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {
    const {productosTotales} = useCartContext()

    return(
        <>
        <img className="carticon" src='/carticon.png' alt="cart-icon" />
        <p className="numArticulos">{productosTotales()}</p>
        </>
    )

}

export default CartWidget