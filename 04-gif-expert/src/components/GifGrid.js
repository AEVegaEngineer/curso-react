import React from 'react'

export const GifGrid = ({category}) => {

    const getGifs = async() => {
        const apiKey = 'Qj6x1V0usItOXxE668qY6ZPmujFklcmV';
        const endpoint = 'http://api.giphy.com/v1/gifs/search';
        const limit = 10;
        const search = 'Rick+and+Morty';
        const url = endpoint+'?q='+search+'&limit='+limit+'&api_key='+apiKey;
        //console.log(url);
        const resp = await fetch( url );
        const {data} = await resp.json();
        console.log(data);
        // mapea el objeto para sacar solo los elementos que queremos utilizar
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url // si vienen las imagenes utiliza downsized_medium.url
            }
        })
        console.log(gifs);
    }
    getGifs();
    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}

