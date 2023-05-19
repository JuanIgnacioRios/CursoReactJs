import { useState } from "react"

export const useCounter = (inital = 0, min, max) => {
    const [ counter, setCounter ] = useState(inital)

    let handleSumar = () => {
        if (counter < max) {
            setCounter(counter + 1)        
            
        }        
    }

    let handleRestar = () => {        
        if (counter > min) { // 1>1
            setCounter(counter - 1)            
        }        
    }

    return {counter, handleSumar, handleRestar }

}
