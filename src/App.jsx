import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import HomeCover  from './components/HomeCover/HomeCover'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return(
    <BrowserRouter>
      <NavBar />
      <HomeCover />
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting={"Productos"} /> } />
        <Route path='/categorias/:categoria' element={ <ItemListContainer greeting={"Productos"} /> } />
        <Route path='/detail/:pid' element={<ItemDetailContainer />} />

        
        
      </Routes>
            
    </BrowserRouter>
  )
  
}

export default App
