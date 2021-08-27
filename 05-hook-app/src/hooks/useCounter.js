import {useState} from 'react'

export const useCounter = (initialState = 10) => {

    const [Counter, setCounter] = useState(initialState);

    const increment = (factor = 1) => {
        setCounter(Counter => Counter+factor);        
    }

    const decrement = (factor = 1) => {
        setCounter(Counter => Counter-factor);        
    }

    const reset = () => {
        setCounter(initialState);        
    }
    
    return {Counter,increment,decrement,reset};
}
