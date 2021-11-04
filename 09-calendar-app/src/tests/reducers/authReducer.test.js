import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

const initState = {
  checking: true,
  // email: null,
  // password: null,
}
const authenticatedState = {
  checking: false,
  uid: '123123123',
  name: 'Andres'
};
const unauthenticatedState = {
  checking: false,
};

describe('Pruebas en authReducer', () => {
  test('Debe de retornar el estado por defecto', () => {
    const state = authReducer(undefined, {});
    expect(state).toEqual(initState);
  });

  test('Debe autenticar al usuario', () => {
    const action = {
      type : types.authLogin,
      payload: {
        uid: '123123123',
        name: 'Andres'
      }
    }
    const state = authReducer(unauthenticatedState, action);  
    //console.log(state)  
    expect(state).toEqual(authenticatedState);
  });
  
  test('Debe verificar si el usuario esta autenticado', () => {
    const action = { type: types.authCheckingFinish };
    const state = authReducer(authenticatedState, action);  
    //console.log(state)  
    expect(state).toEqual(authenticatedState);
  });

  test('Debe desloguear al usuario', () => {
    const action = { type: types.authLogout };
    const state = authReducer(authenticatedState, action);  
    //console.log(state)  
    expect(state).toEqual(unauthenticatedState);
  });
  
})
