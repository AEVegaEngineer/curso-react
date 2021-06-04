// operador condicional ternario
const activo = true;
/*
let mensaje = '';
if ( activo ){
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
}
// esto se reemplaza por un ternario
*/
//let mensaje = (activo) ? 'Activo' : 'Inactivo';


/*
if ( activo ){
    mensaje = 'Activo';
}
// si solo quisiesemos un if sin else
*/
let mensaje = (activo) && 'Activo';
// si activo = false entonces mensaje sera false
console.log(mensaje);