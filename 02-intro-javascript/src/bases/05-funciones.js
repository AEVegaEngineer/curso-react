//import React from 'react';
// Funciones en JS
/*
function saludar (nombre) {
    return `Hola, ${nombre}`;
}
*/
//console.log(saludar('Goku'))
//console.log(saludar); // esto retorna una referencia a la funcion

//si ahora  asignamos un valor a saludar
//saludar = 30;
//console.log(saludar); // esto retorna el valor, pero hemos pisado la definicion de la funcion, 
//nos lo dice el warning, pero no nos arroja error
// por esto se debe evitar declarar funciones de esta manera.
// para evitar este problema asignamos el valor de la funcion a una constante, esta actuara como referencia
// y podremos llamar a estas funciones sin peligro de sobreescribirlas

/*
const saludar2 = function (nombre) {
    return `Hola, ${nombre}`;
}
*/
// si intentamos asignar un valor a esta funcion
//saludar2 = 30; //nos arroja un error
//console.log(saludar2('Goku'));

//transformando esta funcion a una funcion de flecha
/*
const saludar3 = (nombre) => {
    return `Hola, ${nombre}`;
}
console.log(saludar3('Vegeta'));
*/

//resumiendo la funcion anterior
/*
const saludar4 = (nombre) => `Hola, ${nombre}`;
console.log(saludar4('Vegeta'));
*/

/*
const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'usuario'
    }
}
*/
// esta funcion anterior es lo mismo que escribir
/*
const getUser = () => ({
    uid: 'ABC123',
    username: 'usuario'
});
console.log(getUser());
*/


// tarea
// 1. transformar a funcion de flecha
// 2. tiene que retornar un objeto implicito
// 3. probar
/*
function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC123',
        username: nombre
    }
}
*/

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre
});
const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);