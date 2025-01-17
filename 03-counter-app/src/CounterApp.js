import React, {useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ( {valueDeIndex = 100} ) => {

    const [counter , setCounter] = useState(valueDeIndex);
    // handleAdd
    const handleAdd = () => {
        setCounter(counter+1);
    }
    const handleReset = () => {
        setCounter(valueDeIndex);
    }
    const handleSubstract = () => {
        setCounter(counter-1);
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    )    
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;