import React from 'react'

export const GifGridItem = ({id, title, url}) => { // se recibe el parametro desestructurado
    //console.log(id, title, url);
    return (
        <div className="card animate__animated animate__fadeInDown">
            <img src={url} alt={title}></img>
            <p> {title} </p>
        </div>
    )
}
