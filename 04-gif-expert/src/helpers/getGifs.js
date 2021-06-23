export const getGifs = async( category ) => {
    const apiKey = 'Qj6x1V0usItOXxE668qY6ZPmujFklcmV';
    const endpoint = 'http://api.giphy.com/v1/gifs/search';
    const limit = 10;
    const url = endpoint+'?q='+encodeURI(category)+'&limit='+limit+'&api_key='+apiKey;
    //console.log(url);
    const resp = await fetch( url );
    const {data} = await resp.json();
    //console.log(data);
    // mapea el objeto para sacar solo los elementos que queremos utilizar
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // si vienen las imagenes utiliza downsized_medium.url
        }
    })
    //console.log(gifs);
    return gifs;
}
//getGifs(); // esta funcion se va a ejecutar siempre que se cambie algun estado
// lo que quiere decir que si se establece un estado como setImagenes dentro de getGifs
// se generara un ciclo infinito