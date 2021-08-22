import React, {useReducer, useEffect} from 'react'
import { todoReducer } from './todoReducer';
import './styles.css'
import { useForm } from '../../hooks/useForm';

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
    
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    // se va a guardar en el local storage cuando el TODO cambie,
    // como depende del TODO se puede usar un efecto
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1){
            return;
        }
        
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };
        const action = {
            type: 'add',
            payload: newTodo            
        }
        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                            <li 
                            key={todo.id}
                            className="list-group-item"
                            >
                                <p className="text-center">{i+1}. {todo.desc}</p>
                                <button
                                className="btn btn-danger"
                                >Borrar</button>
                            </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Aprender ..."
                        autoComplete="off"
                        value={description}
                        onChange={handleInputChange}
                        />
                        <div className="d-grid gap-2">
                            <button
                                type="submit"
                                className="btn btn-outline-primary mt-1"
                            >
                                Agregar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
