import React from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    
  const { pid } = useParams()  
  

  return (
    <div><ItemDetail product={pid}/></div>
  )
}

export default ItemDetailContainer