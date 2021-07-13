import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => { // esto viene en props pero se desestructura directamente a setCategories

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
        //console.log("handle input change llamado");
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 )
        {
            setCategories( cats => [ inputValue, ...cats]); // se llama directamente el callback del estado anterior 'cats'            
            //props.setCategories([...props.categories, inputValue]) // si se quisiese usar props, habria q obtener tambien las categorias
            setInputValue('');
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={inputValue} onChange={handleInputChange}/>
        </form>
    );
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}