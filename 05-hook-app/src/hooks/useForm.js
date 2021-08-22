import { useState } from "react"

// initialState es un selector o campo en el formulario que quiero manipular
export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    return [values, handleInputChange, reset];
}
