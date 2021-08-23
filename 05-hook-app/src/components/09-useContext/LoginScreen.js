import React, {useContext} from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    //1 obtener la referencia al context\    
    //2 setuser
    //3 
    const user = {
        id: 123,
        name: 'Andres'
    }
    const {setUser} = useContext(UserContext);

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button className="btn btn-primary" onClick={() => {setUser(user)}}>
                Login
            </button>
        </div>
    )
}
