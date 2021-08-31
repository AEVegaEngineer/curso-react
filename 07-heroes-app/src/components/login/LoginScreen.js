import React from 'react'

/*
Dentro del componente LoginScreen existen props predefinidas por el react router dom,
para verlas, ir al inspector y en la pestana components clicear LoginScreen.
Para acceder a uno de esos props se debe hacer desestructuracion en el componente, como
ocurre abajo con el History
*/
export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    //history.push('/'); // redirecciona a la pagina de marvel
    history.replace('/'); // reemplaza el historial de busqueda anterior (login) por la ruta '/' (MarvelScreen)
  }
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr/>
      <button 
      className="btn btn-primary"
      onClick={handleLogin}
      >
        Ingresar
      </button>
    </div>
  )
}
