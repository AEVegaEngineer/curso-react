import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {
  const loggedOutState = {
    logged: false
  }
  let red = authReducer(loggedOutState,{});
  test('debe de retornar el estado por defecto', () => {
    expect(red).toEqual(loggedOutState);
  });  

  test('login - debe de autenticar y retornar el name del usuario', () => {    
    const loginAction = {
      type: types.login,
      payload: {
        name: 'Andres'
      }      
    }
    // estado inicial, no autenticado
    red = authReducer(loggedOutState, loginAction);
    expect(red).toEqual({
      name: 'Andres',
      logged: true
    });
  });

  test('logout - debe de borrar el name del usuario y logged en false', () => {
    const logoutAction = {
      type: types.logout 
    }
    // estado inicial, autenticado
    red = authReducer(
      {
        name: 'Andres',
        logged: true
      }
      ,logoutAction
    );
    expect(red).toEqual(loggedOutState);
  });
});