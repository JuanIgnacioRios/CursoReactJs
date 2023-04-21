import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import HomeCover  from './components/HomeCover/HomeCover'

function App() {
  return(
    <>
    <NavBar />
    <HomeCover />
    <ItemListContainer greeting={"Productos"}/>
    </>
  )
  
}

export default App
