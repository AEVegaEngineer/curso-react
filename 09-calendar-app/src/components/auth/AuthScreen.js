import React from 'react';
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2';
import { startLogin, startRegister } from '../../actions/auth';

import { useForm } from '../../hooks/useForm';
import './login.css';

export const AuthScreen = () => {

    const dispatch = useDispatch();

    const initialLoginForm = {
        lEmail: '',
        lPassword: '',
    };
    const [ formLoginValues, handleLoginInputChange ] = useForm(initialLoginForm);

    const initialRegisterForm = {
        rName: '',
        rEmail: '',
        rPassword1: '',
        rPassword2: '',
    };
    const [ formRegisterValues, handleRegisterInputChange ] = useForm(initialRegisterForm);

    const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

    const { lEmail, lPassword } = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();
        //console.log(formLoginValues);
        dispatch( startLogin( lEmail, lPassword ) );
    }

    const handleRegister = (e) => {
        e.preventDefault();
        //console.log(formRegisterValues);
        if( rPassword1 !== rPassword2 ) {
            return Swal.fire('Error','Las contraseñas deben de ser iguales', 'error');
        }
        dispatch( startRegister( rEmail, rPassword1, rName ) );
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                value={lEmail}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={lPassword}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="rName"
                                value={rName}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="rEmail"
                                value={rEmail}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name="rPassword1"
                                value={rPassword1}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name="rPassword2"
                                value={rPassword2}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}