import {getHeroeById} from './bases/09-Multiples-exportaciones-por-defecto';
/*
const promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
        // console.log('2 segundos despues')
        //resolve();
        // Tarea
        const heroe = getHeroeById(2);
        //console.log(heroe);
        //resolve(heroe)
        reject('No se pudo encontrar el heroe');
    }, 2000);
});

promesa.then( (heroe) => {
    //console.log("then de la promesa, se ejecuta el resolve")
    console.log('heroe', heroe);
})
.catch( err => console.warn(err));
*/
const getHeroeByIdAsync = (id) =>{
    const promesa = new Promise( (resolve, reject) => {
        setTimeout(() => {
            // console.log('2 segundos despues')
            //resolve();
            // Tarea
            const p1 = getHeroeById(id);
            if(p1)
                resolve(p1);
            else    
                reject('No se pudo encontrar el heroe');
        }, 2000);
    });
    return promesa;
}
getHeroeByIdAsync(10)
    //.then( heroe => console.log('Heroe', heroe) )
    //.catch( err => console.warn(err))
    .then( console.log )
    .catch( console.warn);
