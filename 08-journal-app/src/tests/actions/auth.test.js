import configureStore from 'redux-mock-store' 
import thunk from 'redux-thunk';
import { login, logout } from '../../actions/auth';
import { types } from '../../types/types';

const initState = {
  auth: {},
  notes: {}
};
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore(initState);

describe('Pruebas con las acciones de Auth', () => {

  beforeEach(() => {
    store = mockStore(initState);
  })

  test('login y logout deben de crear la accion respectiva', () => {
    const uid = 'TESTING';
    const displayName = 'NombreMuestra';
    const loginAction = login(uid,displayName);
    const logoutAction = logout();

    expect(loginAction).toEqual({
      type: types.login,
      payload: {
        uid,
        displayName      
      }
    });

    expect(logoutAction).toEqual({
      type: types.logout
    });
    /*
    store.dispatch( login('TESTING', 'NombreMuestra') );
    store.dispatch( logout() );
    const actions = store.getActions();
     console.log(actions);
    expect (actions[0]).toEqual({
      type:types.login,
      payload: {
        uid: expect.any(String),
        displayName: expect.any(String),
      }
    });

    expect (actions[1]).toEqual({
      type:types.logout
    });
    */
  });
});