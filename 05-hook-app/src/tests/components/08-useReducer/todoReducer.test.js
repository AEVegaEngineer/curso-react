import { useReducer } from "react";
import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en todoReducer', () => {
  
  test('debe de retornar el estado por defecto', () => {
    const state = todoReducer( demoTodos, {} );
    expect( state ).toEqual(demoTodos);
  });

  test('debe de agregar un TODO', () => {
    const action = {
      type: 'add',
      payload: {
        id: 3, 
        desc: 'Aprender Mongo',
        done: false
      }            
    }
    const state = todoReducer( demoTodos, action );
    expect( state.length ).toBe(3);
    
    expect( state ).toEqual([...demoTodos,
      { id: 3, desc: 'Aprender Mongo', done: false }
    ]);
    
  });

  test('debe de borrar un TODO', () => {
    // action.payload = id del todo
    const action = {
      type: 'delete',
      payload: 1           
    }
    const state = todoReducer( demoTodos, action );
    expect( state.length ).toBe(1);
    const stateLeft = state.filter(todo => todo.id !== 1);
    expect( state ).toEqual(stateLeft);
  });

  test('debe de hacer el toggle del TODO', () => {
    const action = {
      type: 'toggle',
      payload: 2           
    }
    const state = todoReducer( demoTodos, action );
    const [stateToggled] = state.filter(todo => todo.id === 2);
    expect(stateToggled.done).toBe(true);
    
  });

});