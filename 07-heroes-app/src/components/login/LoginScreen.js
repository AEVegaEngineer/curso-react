import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

/*
Dentro del componente LoginScreen existen props predefinidas por el react router dom,
para verlas, ir al inspector y en la pestana components clicear LoginScreen.
Para acceder a uno de esos props se debe hacer desestructuracion en el componente, como
ocurre abajo con el History
*/
export const LoginScreen = ({ history }) => {
  
  const {dispatch} = useContext(AuthContext);
  const handleLogin = () => {
    //history.push('/'); // redirecciona a la pagina de marvel
    //(MarvelScreen)    
    const actionLogin = {
      type: types.login,
      payload: {
        name:'Andres'
      }
    }
    dispatch(actionLogin);
    history.replace('/'); // reemplaza el historial de busqueda anterior (login) por la ruta '/' 
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
