import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories = [] }) => {  
    
    const [categories, setCategories] = useState(defaultCategories);
    /*
    const handleAdd = () => {   
        // se puede usar el operador spread para obtener los elementos que ya componen las categorias
        // y se agrega Hunter al final
        setCategories([...categories, 'Hunter']);
        // lo agrega al principio
        // setCategories(['Hunter', ...categories]);
    }
    */
    return (    
    <>      
        <h2>GifExpertApp</h2>
        <hr></hr>
        <AddCategory setCategories = {setCategories} />
        <ol>
            {
                categories.map( category => {
                    return <GifGrid category={category} key={category}/>
                })
            }
        </ol>
    </>
    )    
}

export default GifExpertApp;