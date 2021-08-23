import React from 'react';
import PropTypes from 'prop-types';



export const TodoListItem = ({todo, index, handleDelete, handleToggle}) => { // esto viene en props pero se desestructura directamente a consts
    return (
        <li 
            key={todo.id}
            className="list-group-item"
        >
            <p 
                // verificamos si la tarea fue completada (clic) entonces
                // se le coloca la clase complete
                className={`${todo.done && 'complete'}`}
                onClick={() => {handleToggle(todo.id)}}
            >
                {index+1}. {todo.desc}
            </p>
            <button
                className="btn btn-danger"
                onClick={() => {handleDelete(todo.id)}}
            >Borrar</button>
        </li>
    );
}
TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}