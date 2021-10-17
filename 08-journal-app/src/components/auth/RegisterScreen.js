import React from 'react'
//import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

  //const dispatch = useDispatch();
  
  const [formValues, handleInputChange] = useForm({
    name: 'Andres',
    email: 'aevega@gmail.com',
    password: '123456',
    confirm: '123456'
  });

  const { name ,email, password, confirm } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name ,email, password, confirm);
    //dispatch(startRegisterEmailPassword(email, password));
  }
  
  // const handleGoogleRegister = () => {
  //   dispatch( startGoogleRegister() );
  // }

  const isFormValid = () => {

  }

  return (
    <>
      <h3 className="auth__tittle">Register</h3>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Name" name="name" 
          className="auth__input" 
          value={name}
          onChange={handleInputChange}
        />
        <input type="text" placeholder="Email" name="email" 
          className="auth__input"
          value={email}
          onChange={handleInputChange}
        />
        <input type="password" placeholder="Password" name="password" autoComplete="off" 
          className="auth__input" 
          value={password}
          onChange={handleInputChange}
        />
        <input type="password" placeholder="Confirm password" name="confirm" autoComplete="off" 
          className="auth__input" 
          value={confirm}
          onChange={handleInputChange}
        />
        <button type="submit" name="btnRegister" className='btn btn-primary btn-block mb-5'>Register</button>
        <hr></hr>
        
        <Link className="link mt-5" to="/auth/login">Already registered? Login here</Link>
      </form>
    </>
  )
}
