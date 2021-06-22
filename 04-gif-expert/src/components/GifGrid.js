import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {
    
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category).then( imgs => setImages(imgs));
    }, [category]);

    

    return (
        <>
            <h3>{category}</h3>
            <div className = "card-grid">
                {
                    images.map( img => {
                        //return <GifGrid gif={gif} key={gif}/>
                        return <GifGridItem key={img.id} {...img}/> // se desestructura la imagen y se envia como parametro al componente
                    })
                }
            </div>
        </>
    )
}

