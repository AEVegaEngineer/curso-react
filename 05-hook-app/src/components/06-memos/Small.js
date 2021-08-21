import React from 'react'

// con react memo no es necesario volver a llamar a cargar este componente
// innecesariamente si sus propiedades no han cambiado
export const Small = React.memo(({value}) => {
    console.log('Me volvi a llamar :(');
    return (
        <small>
            {value}
        </small>
    )
})
