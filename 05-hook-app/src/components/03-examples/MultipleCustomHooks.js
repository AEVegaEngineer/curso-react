import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'
export const MultipleCustomHooks = () => {

    const {Counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${Counter}`);
    //console.log(data);
    // null -> ! = true -> !! = false
    // si viene la data, retorna data[0], sino retorna false
    const {author, quote} = !!data && data[0]; 
    
    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr></hr>
            {
                loading 
                ? 
                    (        
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right" style={{textAlign:'right'}}>
                            <p className="mb-3">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }
            <button 
                onClick={() => {increment(1)}}
                className="btn btn-primary"
            >
                Siguiente quote
            </button>
        </div>
    )
}
