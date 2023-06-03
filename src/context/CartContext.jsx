import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children})=> {
    const [cartList, setCartList] = useState([])

    const addToCart = (newProduct)=>{
        console.log(cartList)
        console.log(newProduct)
        const idx = cartList.findIndex(prod => newProduct.id === prod.id)
        
        if(idx === -1){
            setCartList([...cartList, newProduct])
        }else{
            cartList[idx].cantidad += newProduct.cantidad
            setCartList([...cartList])
        }

    }

    const handleRemoveProduct = (index) => {
        const updatedCartList = [...cartList];
        updatedCartList.splice(index, 1);
        setCartList(updatedCartList);
      };

    const vaciarCarrtio = () => {
        setCartList([])
    }

    const totalAPagar = () => {
        let montoTotal = 0
        for (let index = 0; index < cartList.length; index++) {
            montoTotal += cartList[index].price * cartList[index].cantidad
        }
        return montoTotal
    }

    const productosTotales = () => {
        let totalProducts = cartList.length
        return totalProducts
    }

    return (
       <CartContext.Provider value={{
            cartList,
            addToCart,
            handleRemoveProduct,
            vaciarCarrtio,
            totalAPagar,
            productosTotales 
       }}>
            {children}
       </CartContext.Provider>
    )
}
