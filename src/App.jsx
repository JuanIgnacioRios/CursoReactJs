import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer/CartContainer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { CheckOut } from './components/CheckOut/CheckOut'


function App() {
  return(
    <CartContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting={"Productos"} /> } />
          <Route path='/categorias/:categoria' element={ <ItemListContainer greeting={"Productos"} /> } />
          <Route path='/detail/:pid' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} /> 
          <Route path='/checkout' element={<CheckOut />} /> 
        </Routes>      
      </Router>
    </CartContextProvider>
  )
  
}

export default App
