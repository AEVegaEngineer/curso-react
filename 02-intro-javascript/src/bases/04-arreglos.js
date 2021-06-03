// Arreglos en JS
// Coleccion de informacion que se encuentra dentro de una variable

// const arreglo = new Array();
const arreglo = [1,2,3,4];
/*
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);
*/
// no es recomendable utilizar push, ya que modifica el objeto original
// para insertar un elemento en un array se puede usar el operador spread (...)
// el operador spread extrae el contenido de lo que se le pasa

let arreglo2 = [...arreglo,5];
// la funcion dentro del map es un callback que se va a ejecutar por cada uno de los elementos de arreglo2
const arreglo3 = arreglo2.map( function(numero) {
    // si se deja vacio el cuerpo de esta funcion va a retornar undefined tantas veces como elementos tenga el arreglo
    // esto se debe a que toda funcion a la que no le establecemos un retorno va a retornar undefined
    return numero * 2;
});
console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );