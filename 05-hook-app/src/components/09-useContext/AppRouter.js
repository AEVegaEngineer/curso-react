import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import {AboutScreen} from "./AboutScreen"
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <div  className="container">
                    <Switch>
                        <Route exact path="/" component={HomeScreen} />
                        <Route exact path="/about" component={AboutScreen} />
                        <Route exact path="/login" component={LoginScreen} />
                        {/* <Route component={HomeScreen} /> */}
                        
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
