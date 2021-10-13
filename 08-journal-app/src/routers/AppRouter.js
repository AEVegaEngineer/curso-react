import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
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

