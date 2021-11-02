import { useState } from "react"

// initialState es un selector o campo en el formulario que quiero manipular
export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = ( newFormState = initialState) => {
        setValues(newFormState);
    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    return [values, handleInputChange, reset];
}
/*
**** Ejemplo de uso:
const initialForm = {
    name: '',
    age: 0,
    email: '',
};
const [ formValues, handleInputChange, reset ] = useForm(initialForm);
*/