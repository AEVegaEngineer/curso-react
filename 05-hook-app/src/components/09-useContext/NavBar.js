import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="./">useContext</Link>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
            <NavLink exact to="/login" activeClassName="active" className="nav-link">Login</NavLink>
            <NavLink exact to="/about" activeClassName="active" className="nav-link">About</NavLink>              
          </div>
        </div>
      </div>
    </nav>
  )
}
