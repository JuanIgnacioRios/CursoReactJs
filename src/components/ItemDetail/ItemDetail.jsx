import React from 'react'
import { useEffect, useState } from 'react'
import { mFetch } from "../../utils/mFetch"
import './ItemDetail.css'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

export const ItemDetail = (product) => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isCant, setIsCant] = useState(false)

    var productId = product.product

    useEffect(()=>{
          mFetch()
          .then( resultado => {
            setProducts(resultado.filter(producto => producto.id === productId ))
          })
          .catch (error => console.log(error))
          .finally(()=> setIsLoading(false))
       
      }, [])

    
      const {addToCart} = useCartContext()
        
      const onAdd = (cantidad) =>{
        addToCart({...products, cantidad})
        setIsCant(true)
      }
      

  return (
    <div className='ProductPage'>
      <Link className="back-link" to="/"><button className='back-button'>Volver</button></Link>
       {isLoading ? 
            <h2>Cargando...</h2> 
            :
            products.map ( ({id, photo, stock, name, price, category }) => 
              <div key={id} className='ProductContainer'>
                <h1 className='ProductTitle'>{name}</h1>
                  <div  className='PP-container'>
                    <div className=''> 
                      <img src={photo} className="PP-img-container" alt="imagen-producto" />
                    </div>
                    <div className="PP-body">
                      <label>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint facilis unde alias eos sed provident qui accusantium quod molestias, enim cupiditate optio deserunt deleniti aliquid et earum nihil ex. Ipsam!</label><br></br>
                      <label>Precio: {price} U$D</label><br></br>
                      <label>Categoria: {category}</label><br></br>
                      <label>Stock: {stock}</label><br></br>
                      {isCant ?
                        <div class="iscant-button-container">
                          <Link to='/cart'><button>Finalizar Compra</button></Link>
                          <Link to='/'><button>Continuar Compra</button></Link>
                        </div>
                      :
                        <ItemCount stock={stock} onAdd={onAdd} />
                      }
                    </div>
                </div>                
              </div>
              


            )}
    </div>
  )
}
