import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthScreen } from '../components/auth/AuthScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { startChecking } from '../actions/auth'

export const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startChecking())    
  }, [dispatch])
  return (
    <Router> 
      <div>
        <Switch>
          <Route exact path="/auth" component={AuthScreen}/>
          <Route exact path="/" component={CalendarScreen}/>
          {/* Cualquier otra ruta desconocida, redirige al /auth */}
          <Redirect to="/auth"/>
        </Switch>
      </div>           
    </Router>
  )
}
