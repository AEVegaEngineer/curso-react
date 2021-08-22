import React, {useState, useCallback, useEffect} from 'react'
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    // No se puede usar el increment de este modo ya que cada vez que se llame a callbackhook
    // se va a volver a alocar en memoria un objeto increment nuevo, por lo que se sigue
    // mostrando el mensaje
    // const increment = () => {
    //     setCounter( counter +1 );
    // }
    const increment = useCallback(
        (num) => {
            setCounter( c => c + num );
        },
        [setCounter]
    );

    // En este caso tambien es recomendado usar el useCallback
    // cuando se tiene un useEffect y el efecto tiene una funcion de dependencia
    // porque si no se usara el efecto se dispararia cada vez que se actualice esa funcion
    useEffect( () => {
        // ???
    }, [increment])
    return (
        <div>
            <h1>useCallbackHook: {counter}</h1>
            <hr/>
            <ShowIncrement increment={increment}/>
        </div>
    )
}
