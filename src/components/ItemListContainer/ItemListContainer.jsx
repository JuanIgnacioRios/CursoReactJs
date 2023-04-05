import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='Products-section'>
        <h1 className='Products-title'>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer