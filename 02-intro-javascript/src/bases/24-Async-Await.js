/*
const getImagenPromesa = () => {
    const promesa = new Promise( (resolve, reject ) => {
        resolve('yep');
    });
    return promesa;
}
getImagenPromesa().then( console.log );
// Toda esta sintaxis se puede reemplazar por lo siguiente  usando async:
*/

const getImagen = async() => {   
    
    try {
        const apiKey = 'Qj6x1V0usItOXxE668qY6ZPmujFklcmV';
        const endpoint = 'http://api.giphy.com/v1/gifs/random';
    
        const respuesta = await fetch(`${endpoint}?api_key=${apiKey}`);
        const {data} = await respuesta.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
        
    } catch (error) {
        console.warn(error)
    }

}
getImagen();