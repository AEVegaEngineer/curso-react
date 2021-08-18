import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
    const {state,increment,decrement,reset} = useCounter(100);
    return (
        <>
            <h1>Counter with Hook: {state} </h1>
            <hr></hr>
            {/* <button onClick={increment} className="btn btn-primary">+1</button> */}
            {/* No se puede colocar de este modo ya que como establecimos unos factores
            como parametros debemos tratarlo como funcion de flecha para que no tome
            el evento del clic como parametro (el evento que se envia por defecto) */}
            <button onClick={() => increment(2)} className="btn btn-primary">+1</button>
            <button onClick={() => decrement(2)} className="btn btn-danger">+2</button>
            <button onClick={ reset } className="btn btn-danger">Reset</button>
        </>
    )
}
