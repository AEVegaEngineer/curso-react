import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PrivateRoute = ({ 
  isAuthenticated,
  component:Component, // se recibe component pero se renombra con C mayuscula para que se vea bien como componente
  ...rest // los demas argumentos como el exact y el path
}) => {
  // obtenemos del rest, la ultima url visitada y la guardamos en localStorage para ingresar ahi la proxima vez que inicie sesion
  // adicionalmente, si la ruta es /search, le concatenamos la busqueda realizada

  //const loc = rest.location.pathname;
  //localStorage.setItem('lastPath', (loc === '/search') ? loc+rest.location.search : loc);

  return (
    <Route
    {...rest} // le paso el resto de los argumentos
    component={(props) => ( // aqui se renombra de rest a props
      (isAuthenticated) 
      ? (<Component {...props} />) 
      : (<Redirect to="/auth" />) // si no esta autenticado lo redirige al login
    )} // llamo al componente con un callback para obtener sus props
    />
  )
}
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
}
