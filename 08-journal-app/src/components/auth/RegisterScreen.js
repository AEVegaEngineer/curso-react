import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import validator from 'validator'

import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  
  const [formValues, handleInputChange] = useForm({
    name: 'Andres',
    email: 'aevega@gmail.com',
    password: '123456',
    confirm: '123456'
  });

  const { name ,email, password, confirm } = formValues;

  let errorList = [];
  const handleRegister = (e) => {
    e.preventDefault();
    if(isFormValid()){      
      console.log(name ,email, password, confirm);
    } else {      
      
    }
    //dispatch(startRegisterEmailPassword(email, password));
  }
  
  // const handleGoogleRegister = () => {
  //   dispatch( startGoogleRegister() );
  // }

  const isFormValid = () => {
    let errorOcurred = false;
    if(name.trim().length === 0){
      errorList.push('name is required');
      errorOcurred = true;
    }
    if(!validator.isEmail(email)){
      errorList.push('email is not valid');
      errorOcurred = true;
    }
    if(password !== confirm){
      errorList.push('passwords do not match');
      errorOcurred = true;
    }
    if(password.length < 6){
      errorList.push('password length must be at least 6 characters');
      errorOcurred = true;
    }
    if(errorOcurred){
      dispatch(setError(errorList));
      //console.log(errorList);
    }else{
      dispatch(removeError());
    }    
    return !errorOcurred;
  }

  return (
    <>
      <h3 className="auth__tittle">Register</h3>
      <form onSubmit={handleRegister}>

        <div className="auth__alert-error">
          Hola mundo
        </div>

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
