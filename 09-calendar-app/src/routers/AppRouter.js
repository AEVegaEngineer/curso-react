import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthScreen } from '../components/auth/AuthScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
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
