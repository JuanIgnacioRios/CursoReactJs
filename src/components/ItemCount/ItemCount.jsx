import { useCounter } from "../../hook/useCounter"
import './ItemCount.css'

const ItemCount = ({ inital=1, stock, onAdd }) => {

    const { counter, handleSumar, handleRestar } = useCounter(inital, 1, stock)

    return (
        <div className="item-count-cotainer">
            <button onClick={handleSumar}> + 1</button> 
            <label>{counter}</label>
            <button onClick={handleRestar}> - 1</button> 
            <button onClick={()=>{onAdd(counter)}}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
