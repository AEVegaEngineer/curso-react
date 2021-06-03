const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5553235,
        lat:12.6545,
        lon:34.5465,
    }
}
//console.table( {persona} );
console.log( {persona} );
/*
const persona2 = persona; // no es una copia fiel, es una copia de referencia al espacio de memoria de persona
persona2.nombre = 'Peter';
console.log( {persona} );
console.log( {persona2} );
*/
// para crear realmente una copia sin modificar el objeto copiado se puede hacer asi (objeto literal):
const persona3 = {...persona};
persona3.nombre = 'Peter';
console.log( {persona3} );

console.log( {persona} );