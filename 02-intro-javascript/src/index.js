const personajes = ['Goku', 'Vegeta', 'Trunks'];
/*
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);
para evitar esto podemos desestructurar el array
*/
/*
const [ p1 ] = personajes;
console.log(p1);
// asi obtengo 'Goku'
*/
/*
const [ ,p2 ] = personajes;
console.log(p2);
// asi obtengo 'Vegeta'
*/
/*
const [ ,,p3 ] = personajes;
console.log(p3);
// asi obtengo 'Trunks'
*/

/*
const retornaArreglo = () => {
    return ['ABC', 123];
}
const [letras,numeros] = retornaArreglo();
console.log(letras,numeros);
*/

// Tarea 
// 1. El primer valor del arr se llamara nombre
// 2. el segundo valor se llamara setNombre
const estado = (valor) => {
    return [valor, () => { console.log('Hola Mundo')}];
}
const [nombre,setNombre] = estado('Goku');
//console.log(arr);
//arr[1](); // llamando una funcion declarada dentro del array
console.log(nombre);
setNombre();

