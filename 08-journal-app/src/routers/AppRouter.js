import { getAuth } from '@firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { login } from '../actions/auth'
import { startLoadingNotes } from '../actions/notes'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {

  // Mantener el estado de la autenticacion de firebase al recargar con un observable

  const dispatch = useDispatch();
  
  // checking  es un estado simple, la idea es mostrar un texto
  // de precarga de pantalla cuando se presiona F5, inicialmente
  // el valor de checking es siempre true, una vez se obtiene 
  // una respuesta del efecto, se setea checking en false y se
  // muestra la pagina.
  const [checking, setChecking] = useState(true);
  
  // estado simple para la proteccion de las rutas privadas
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    getAuth().onAuthStateChanged( async(user) => {
      if(user?.uid){
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));
      } else { 
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch,setChecking])

  
  if(checking) {
    return (
      <h1>Please wait...</h1>
    )
  }

  return (    
    <Router> 
      <div>
        <Switch>
          <PublicRoute                       
            path="/auth"
            isAuthenticated={isLoggedIn} 
            component={AuthRouter}
          />   
          <PrivateRoute
            exact             
            path="/" 
            isAuthenticated={isLoggedIn} 
            component={JournalScreen}
          />
          {/* Cualquier otra ruta desconocida, redirige al /auth */}
          <Redirect to="/auth/login"/>
        </Switch>
      </div>     
      
    </Router>
  )
}

