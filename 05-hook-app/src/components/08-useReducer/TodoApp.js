import React, {useReducer, useEffect} from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css'

//const initialState = ;

const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];

    // localstorage puede devolver null, un JSON.parse de null retorna null, por lo que se valida
    // si viene null, retorna un arreglo vacio, de lo contrario retorna los TODOS como arreglo
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    // el segundo parametro es el initialState, en este caso se manda como un arreglo vacio
    // porque lo que sea que retorne init se convierte en el initialState
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
    
    // se va a guardar en el local storage cuando el TODO cambie,
    // como depende del TODO se puede usar un efecto
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        const actionDelete = {
            type: 'delete',
            payload: todoId
        }
        dispatch(actionDelete);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type : 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo            
        });
    }

    
    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    {/* TodoList, todos, handleDelete, handleToggle */}
                    <TodoList 
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle} 
                        todos={todos}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTodo = {handleAddTodo} />
                </div>
            </div>
        </div>
    )
}
