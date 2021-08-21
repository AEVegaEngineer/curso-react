import React, {useState, useMemo} from 'react'
import { useCounter } from '../../hooks/useCounter';

import { procesoPesado } from '../../helpers/ProcesoPesado';

import '../02-useEffect/effects.css';

export const MemoHook = () => {
    const { Counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    
    // pasar la funcion de proceso pesado como argumento al useMemo y el arreglo de dependencia
    // dicta que al actualizarse el estado del Counter debe volverse a memorizar el resultado
    // de procesoPesado
    const memoProcesoPesado = useMemo(() => procesoPesado(Counter), [Counter])
    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{Counter}</small></h3>
            <hr/>
            <p>{memoProcesoPesado}</p>
            <button 
            className="btn btn-primary"
            onClick={ () => increment(1) }
            >
                +1
            </button>

            <button 
            className="btn btn-outline-primary m-3"
            onClick={()=>{
                setShow(!show);
            }}
            >
                show/hide { JSON.stringify(show)}
            </button>
        </div>
    )
}
