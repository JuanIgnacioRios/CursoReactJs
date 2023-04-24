import React from 'react'
import { useEffect, useState } from 'react'
import { mFetch } from "../../utils/mFetch"
import './ItemDetail.css'

export const ItemDetail = (product) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    var productId = product.product

    useEffect(()=>{
          mFetch()
          .then( resultado => {
            setProducts(resultado.filter(producto => producto.id === productId ))
          })
          .catch (error => console.log(error))
          .finally(()=> setIsLoading(false))
       
      }, [])

      console.log(products)

  return (
    <div>
       {products.map ( ({id, photo,  name, price, category }) => 
              <div key={id} className='ProductPage'>
                <h1 className='ProductPageTitle'>{name}</h1>
                <div className='PP-container'>
                  <div className=''> 
                    <img src={photo} className="PP-img-container" alt="imagen-producto" />
                  </div>
                  <div className="PP-body">
                    <label>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint facilis unde alias eos sed provident qui accusantium quod molestias, enim cupiditate optio deserunt deleniti aliquid et earum nihil ex. Ipsam!</label><br></br>
                    <label>Precio: {price} U$D</label><br></br>
                    <label>Categoria: {category}</label>
                </div>
                </div>                
              </div>
              


            )}
    </div>
  )
}
