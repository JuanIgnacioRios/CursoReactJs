import React from 'react'
import './ItemListContainer.css'
import HomeCover  from '../HomeCover/HomeCover'
import { useEffect, useState } from 'react'
import { mFetch } from "../../utils/mFetch"
import { Link, useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { categoria } = useParams()
  
  useEffect(()=>{
    if(!categoria){

      mFetch()
      .then( resultado => {
        setProducts(resultado)
      })
      .catch (error => console.log(error))
      .finally(()=> setIsLoading(false))

    }else{

      mFetch()
      .then( resultado => {
        setProducts(resultado.filter(producto => producto.category === categoria))
      })
      .catch (error => console.log(error))
      .finally(()=> setIsLoading(false))

    }
   
  }, [categoria])
  

  return (
    <>
    <HomeCover />
    <div className='Products-section'>
        <h1 className='Products-title'>{greeting}</h1>
        <div className='cards-layout'>

          { isLoading ? 
            <h2>Cargando...</h2> 
          :           
            products.map ( ({id, photo, stock, name, price, category }) => 
            
              <div key={id} className="card">
                <div className='card-img-container'> 
                  <img src={photo} className="card-img-top" alt="imagen-card" />
                </div>
                <div className="card-body">
                  <h3>{name}</h3>
                  <label>Precio: {price} U$D</label><br></br>
                  <label>Categoria: {category}</label><br></br>
                  <label>Stock: {stock}</label><br></br>
                </div>
                <Link to={`/detail/${id}`}>
                  <button className='detalle'>Ver Más</button>
                </Link>
                
              </div>
            )}
        </div>
    </div>
    </>
  )
}

export default ItemListContainer