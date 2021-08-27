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
    
  })
  
  

});