

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = 'Qj6x1V0usItOXxE668qY6ZPmujFklcmV';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        //console.log(resp);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        /*
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
        */
        return url;

    } catch (error) {
        // manejo del error
        //console.error(error)
        return "No existe";
    }
}

//getImagen();



