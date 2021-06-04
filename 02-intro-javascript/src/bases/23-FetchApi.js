const apiKey = 'Qj6x1V0usItOXxE668qY6ZPmujFklcmV';
const endpoint = 'http://api.giphy.com/v1/gifs/random';

const peticion = fetch(`${endpoint}?api_key=${apiKey}`);
/*
peticion.then((resp) => {
    resp.json().then( data => {
        console.log(data)
    })
}).catch( console.warn )
// esto es largo y dificil de mantener, para mejorar
// se pueden utilizar promesas encadenadas:
*/
peticion
.then((resp) => resp.json())
.then( ({data}) => {
    const {url} = data.images.original;    
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
})
.catch( console.warn );