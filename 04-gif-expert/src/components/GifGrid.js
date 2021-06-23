import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import React, { useState, useEffect } from 'react';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from "./GifGridItem";
//import 'animate.min.css';

export const GifGrid = ({category}) => {
    
    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs(category);
    //console.log(loading);
    //console.log(data);
    // useEffect(() => {
    //     getGifs(category)
    //         .then( imgs => setImages(imgs));
    // }, [category]);

    

    return (
        <>
            <h3>{category}</h3>
            
            { loading && <p>Loading</p> }
            
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

