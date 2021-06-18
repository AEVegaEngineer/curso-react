import React, { useState } from "react";

const GifExpertApp = ( ) => {  
    
    const [categories, setCategories] = useState(['One Punch', 'Samuray X', 'Dragon Ball']);

    const handleAdd = () => {   
        // se puede usar el operador spread para obtener los elementos que ya componen las categorias
        // y se agrega Hunter al final
        setCategories([...categories, 'Hunter']);
        // lo agrega al principio
        // setCategories(['Hunter', ...categories]);
    }
    return (    
    <>      
        <h2>GifExpertApp</h2>
        <hr></hr>
        <button onClick={handleAdd}>Agregar</button>
        <ol>
            {
                categories.map( category => {
                    return <li key={category}>{category}</li>
                })
            }
        </ol>
    </>
    )    
}

export default GifExpertApp;