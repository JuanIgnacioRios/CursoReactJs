import { useCartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import './CartContainer.css'

export const CartContainer = () => {
    const {cartList,  vaciarCarrtio, handleRemoveProduct, totalAPagar } = useCartContext()

    console.log(cartList)

    const isCartEmpty = () => {
        return cartList.length === 0;
    };

    return (
        <section id="cart-section">
            <div className="cart-container">
                
                {isCartEmpty() ?
                <>
                    <h1>No hay productos en el carrito</h1>
                    <Link to="/"><button className="cart-button continue-shopping-button" >Seguir Comprando</button></Link>
                </>
                :
                <>
                <div className="buttons-container">
                    <Link to="/checkout"><button className="cart-button checkout">TerminarCompra</button></Link>
                    <Link to="/"><button className="cart-button continue-shopping-button2" >Seguir Comprando</button></Link>
                    <button className="cart-button" onClick={vaciarCarrtio}>Vaciar Carrito</button>
                    <div className="total-ammount-container">
                        <h3>Monto Total: ${totalAPagar()}</h3>
                    </div>
                </div>
                {cartList.map((product, index) => (
                    <div className="cart-item">
                        <img src={product.photo} alt="imagen" className="cart-item-image"/>
                        <div className="cart-item-info">
                            <div className="info-container">
                                <h1>{product.name}</h1>
                                <h3>Precio ${product.price}</h3>
                                <h3>Cantidad : {product.cantidad}</h3>
                            </div>
                        </div>
                        <button onClick={() => handleRemoveProduct(index)}> X </button>
                    </div>
                ))}
                </>
                }                   
                
            </div>
        </section>
    )
}

export default CartContainer