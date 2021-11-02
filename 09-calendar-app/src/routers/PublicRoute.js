import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PublicRoute = ({ 
  isAuthenticated,
  component:Component, // se recibe component pero se renombra con C mayuscula para que se vea bien como componente
  ...rest // los demas argumentos como el exact y el path
}) => {
  return (
    <Route
    {...rest} // le paso el resto de los argumentos
    component={(props) => ( // aqui se renombra de rest a props
      (!isAuthenticated) 
      ? (<Component {...props} />) 
      : (<Redirect to="/" />) // si esta autenticado lo mantiene en el dashboard
    )} // llamo al componente con un callback para obtener sus props
    />
  )
}
PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
}
