import React, {useState} from 'react'
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import { Small } from './Small';

export const Memorize = () => {
    const { Counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);
    return (
        <div>
            <h1>Counter: <Small value={Counter}></Small></h1>
            <hr/>
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
