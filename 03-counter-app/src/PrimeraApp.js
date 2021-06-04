//import React, { Fragment } from "react";
import React from "react";

const PrimeraApp = () => {
    const saludo = 'Hola mundo const';
    // const saludo = {
    //     nombre: 'Fernando',
    //     edad: 34
    // }
    return ( 
    //<Fragment>
    // No se pueden imprimir objetos o booleanos de esta manera, si es necesario imprimir un objeto se debe hacer un JSON.stringify
    <>      
        <h1>{saludo}</h1>
        {/* <pre>{JSON.stringify(saludo, null ,3)}</pre> */}
        <p>Mi primera aplicacion</p>
    </>
    //</Fragment>
    )
    
}

export default PrimeraApp;