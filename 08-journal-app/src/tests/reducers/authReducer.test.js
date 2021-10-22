/*
1. prueba para el login
2. prueba para el logout
1. prueba para el default
*/

import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {
  test('Debe de logear correctamente', () => {    
    const initialState = {};
    const action = {
      type: types.login,
      payload: {
        uid:'asdasdsadas',
        displayName: 'Andres'
      }
    };
    const auth = authReducer(initialState, action);
    expect(auth).toEqual({ uid: 'asdasdsadas', name: 'Andres' })
  });
  test('Debe de deslogear correctamente', () => {    
    const initialState = { uid: 'asdasdsadas', name: 'Andres' };
    const action = {
      type: types.logout
    };
    const logout = authReducer(initialState, action);
    expect(logout).toEqual({});
  });
  test('Debe de retornar el initialstate si se pasa un type desconocido', () => {    
    const initialState = { uid: 'asdasdsadas', name: 'Andres' };
    const action = {
      type: 'type_desconocido'
    };
    const unknown = authReducer(initialState, action);
    expect(unknown).toEqual(initialState);
  });
});