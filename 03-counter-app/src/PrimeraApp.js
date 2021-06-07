//import React, { Fragment } from "react";
import React from "react";
import PropTypes from 'prop-types';

//const PrimeraApp = ( props ) => {
    // usualmente se desestructura props con la variable que se va a utilizar
const PrimeraApp = ( {saludo} ) => {
    //const saludo = 'Hola mundo const';
    // const saludo = {
    //     nombre: 'Fernando',
    //     edad: 34
    // }
    // if(!saludo)
    // {
    //     throw new Error('El saludo es necesario');
    // }
    return ( 
    //<Fragment>
    // No se pueden imprimir objetos o booleanos de esta manera, si es necesario imprimir un objeto se debe hacer un JSON.stringify
    <>      
        {/* <h1>{props.saludo}</h1> */}
        <h1>{saludo}</h1>
        {/* <pre>{JSON.stringify(saludo, null ,3)}</pre> */}
        <p>Mi primera aplicacion</p>
    </>
    //</Fragment>
    )
    
}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;