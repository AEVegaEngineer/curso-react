import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const {loading} = useSelector( state => state.ui);
  
  const [formValues, handleInputChange] = useForm({
    email: 'aevega@gmail.com',
    password: '123456'
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    //console.log(email, password);
    dispatch(startLoginEmailPassword(email, password));
  }

  const handleGoogleLogin = () => {
    dispatch( startGoogleLogin() );
  }

  return (
    <>
      <h3 className="auth__tittle">Login</h3>
      <form onSubmit={handleLogin} className="animate__animated animate__fadeIn animate__faster">
        <input 
          type="text" 
          placeholder="Email" 
          name="email" 
          className="auth__input" 
          value={email} 
          onChange={handleInputChange}
        />
        <input 
          type="password" 
          placeholder="Password" 
          name="password" 
          autoComplete="off" 
          className="auth__input" 
          value={password} 
          onChange={handleInputChange}
        />
        <button 
          type="submit" 
          name="btnLogin" 
          className='btn btn-primary btn-block'
          disabled={loading}
        >Login</button>
        <hr></hr>
        <div className="auth__social-network">
          <p>Login with social media</p>
          <div 
              className="google-btn"
              onClick={handleGoogleLogin}
          >
              <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
              </div>
              <p className="btn-text">
                  <b>Sign in with google</b>
              </p>
          </div>          
        </div>
        <Link className="link" to="/auth/register">Create new account</Link>
      </form>
    </>
  )
}
