import React, {useLayoutEffect, useRef, useState} from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'
export const Layout = () => {

    const {Counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${Counter}`);
    //console.log(data);
    // null -> ! = true -> !! = false
    // si viene la data, retorna data[0], sino retorna false
    const {quote} = !!data && data[0]; 
    const [BoxSize, setBoxSize] = useState({});

    const pTag = useRef()

    // Se usa para verificar propiedades de los elementos visuales una vez se han 
    // terminado de renderizar, por ejemplo, 
    useLayoutEffect( () => {
        //console.log(pTag.current.getBoundingClientRect());
        setBoxSize(pTag.current.getBoundingClientRect());
    },[quote])
    
    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr></hr>
            
            <blockquote className="blockquote text-right" style={{textAlign:'right'}}>
                <p 
                className="mb-3"
                ref={pTag}
                >{quote}</p>
            </blockquote>  
            <pre>
                Tamanio de caja de quote
                <br/>
                {JSON.stringify(BoxSize, null, 3)}
            </pre>                 
            <button 
                onClick={() => {increment(1)}}
                className="btn btn-primary"
            >
                Siguiente quote
            </button>
        </div>
    )
}
