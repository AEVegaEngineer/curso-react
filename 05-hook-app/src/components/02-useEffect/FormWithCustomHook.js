import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCustomHook = () => {
    
    // if(true){
    //     const [state, setstate] = useState(initialState)
    // }
    // React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component

    const [formValues, handleInputChange] = useForm({
        name:'', 
        email:'',
        password:''
    });

    const {name,email,password} = formValues;
    // useEffect( () => {
    //     console.log("hey");
    // });
    // Asi como esta dice: No importa que cambie, vuelvete a ejecutar

    
    // const handleInputChange = ({target}) => {
    //     setFormState({
    //         ...formState,
    //         [target.name] : target.value 
    //     });
    // }

    useEffect(() => {
        console.log("email cambio");
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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
                <input 
                    type="password" 
                    name="password" 
                    className="form-control" 
                    placeholder="***" 
                    autoComplete="off" 
                    value={password} 
                    onChange={handleInputChange}
                ></input>
            </div>
            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    )
}
