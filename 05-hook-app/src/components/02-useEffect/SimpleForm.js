import React, { useEffect,useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {
    
    // if(true){
    //     const [state, setstate] = useState(initialState)
    // }
    // React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component

    const [formState, setFormState] = useState({
        name:'', 
        email:''
    });

    const {name,email} = formState;
    // useEffect( () => {
    //     console.log("hey");
    // });
    // Asi como esta dice: No importa que cambie, vuelvete a ejecutar

    useEffect( () => {
        // console.log("el componente se cargo por primera vez!");
    }, []);

    useEffect( () => {
        // console.log("formState Cambio");
    }, [formState]);

    useEffect( () => {
        // console.log("email Cambio");
    }, [email]);

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name] : target.value 
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
                <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="tu nombre" 
                    autoComplete="off" 
                    value={name} 
                    onChange={handleInputChange}
                ></input>
                <input 
                    type="email" 
                    name="email" 
                    className="form-control" 
                    placeholder="email@mail.com" 
                    autoComplete="off" 
                    value={email} 
                    onChange={handleInputChange}
                ></input>
            </div>
            {(name === '123') && <Message/>}
        </>
    )
}
