import configureStore from 'redux-mock-store' 
import thunk from 'redux-thunk';
import { login, logout, startLoginEmailPassword, startLogout } from '../../actions/auth';
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
    // COMO NO SON ASINCRONAS SE PUEDEN LLAMAR SIN EL DISPATCH
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

  test('Debe de realizar el logout de firebase', async() => {
    await store.dispatch( startLogout() );

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: types.logout });
    expect(actions[1]).toEqual({ type: types.notesLogoutCleaning });
  });

  test('debe de iniciar el startLoginEmailPassword', async() => {
    await store.dispatch(startLoginEmailPassword('test@testing.com','123456'));
    const actions = store.getActions();
    //console.log(actions)
    expect(actions[1]).toEqual({
      type: types.login,
      payload: {
        uid: 'Ir2r8hnB07haPTszKLxftp2t6bE2',
        displayName: null      
      } 
    });

  });
});