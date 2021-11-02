import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { AuthScreen } from '../components/auth/AuthScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { startChecking } from '../actions/auth'
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();
  //checking va a revisar la autenticación, en cuanto retorne false, indica que ya terminó de revisar la autenticación
  const { checking, uid } = useSelector(state => state.auth);
  useEffect(() => {
    dispatch(startChecking())    
  }, [dispatch]);
  if( checking ) {
    return (<h5>Espere...</h5>)
  }
  return (
    <Router> 
      <div>
        <Switch>
          <PublicRoute 
            exact 
            path="/auth" 
            component={AuthScreen}
            isAuthenticated={!!uid} //doble negacion sirve para retornar un booleano a partir de un string, retornando false en caso de ser null
          />
          <PrivateRoute 
            exact 
            path="/" 
            component={CalendarScreen}
            isAuthenticated={!!uid} //doble negacion sirve para retornar un booleano a partir de un string, retornando false en caso de ser null
          />
          {/* Cualquier otra ruta desconocida, redirige al /auth */}
          <Redirect to="/auth"/>
        </Switch>
      </div>           
    </Router>
  )
}
