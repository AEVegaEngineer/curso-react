import React from 'react'

// memoriza este componente si los argumentos no cambian
export const ShowIncrement = React.memo(({increment}) => {
    console.log("Me volvi a generar :(");
    return (
        <button
            className="btn btn-primary"
            onClick={ () => {
                // envio 5 como argumento para recibirlo en CallbackHook -> increment como num
                increment(5);
            }}
        >
            Incrementar
        </button>
    )
})
