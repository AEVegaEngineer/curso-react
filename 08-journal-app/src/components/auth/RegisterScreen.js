import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__tittle">Register</h3>
      <form>
        <input type="text" placeholder="Name" name="name" className="auth__input"/>
        <input type="text" placeholder="Email" name="email" className="auth__input"/>
        <input type="password" placeholder="Password" name="password" autoComplete="off" className="auth__input" />
        <input type="password" placeholder="Confirm password" name="confirm" autoComplete="off" className="auth__input" />
        <button type="submit" name="btnLogin" className='btn btn-primary btn-block mb-5'>Register</button>
        <hr></hr>
        
        <Link className="link mt-5" to="/auth/login">Already registered? Login here</Link>
      </form>
    </>
  )
}
