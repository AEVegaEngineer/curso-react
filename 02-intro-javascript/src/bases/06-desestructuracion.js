// Desestructuracion o asignacion desestructurante
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Tony',
    edad:45,
    clave: 'Ironman',
    rango: 'Soldado'
}
const persona2 = {
    nombre: 'Peter',
    edad:15,
    clave: 'Spiderman'
}

/*
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
para evitar esto se puede desestructurar el objeto
*/

// esto quiere decir, obtener el campo nombre del 
// objeto persona y asignarlo a la variable nombre
/*
const { nombre } = persona;
console.log(nombre)
*/
// si tuviesemos otra variable o quisiesemos renombrar
// el campo desestructurado se hace de esta manera:
/*
const { nombre:nombre2, edad, clave } = persona;
console.log(nombre2, edad, clave);
*/

// algo que se usa mucho es la desestructuracion
// directamente en el argumento de la funcion
// se pueden establecer valores por defecto si no estan
// definidos en el objeto
/*
const retornaPersona = ( { clave, nombre, rango = 'Capitan'} ) => {
    console.log(nombre, rango);    
}
retornaPersona(persona);
retornaPersona(persona2);
*/

//Tarea
const getPersona = ( { clave, edad, nombre, rango = 'Capitan'} ) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}
// extraccion de propiedades dentro de objeto anidado
const { nombreClave, anios, latlng: {lat, lng} } = getPersona(persona);

console.log(nombreClave, anios, lat, lng);