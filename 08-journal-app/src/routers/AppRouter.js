import { getAuth } from '@firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { login } from '../actions/auth'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {

  // Mantener el estado de la autenticacion de firebase al recargar con un observable

  const dispatch = useDispatch();

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      if(user?.uid){
        dispatch(login(user.uid, user.displayName));
      }
    });
  }, [dispatch])

  return (    
    <Router> 
      <div>
        <Switch>
          <Route                       
            path="/auth" 
            component={AuthRouter}
          />   
          <Route
            exact             
            path="/" 
            component={JournalScreen}
          />
          {/* Cualquier otra ruta desconocida, redirige al /auth */}
          <Redirect to="/auth"/>
        </Switch>
      </div>     
      
    </Router>
  )
}

