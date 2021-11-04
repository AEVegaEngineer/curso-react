import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { startLogin } from '../../actions/auth';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {}
let store = mockStore(initState);

//mock del local storage
Storage.prototype.setItem = jest.fn();

describe('Pruebas en las acciones Auth', () => {
  beforeEach(() => {
    store = mockStore(initState);

    // se limpian los mocks para asegurarse de que no traigan informacion basura
    jest.clearAllMocks();
  })
  test('startLogin correcto', async() => {
    await store.dispatch( startLogin('fernando@gmail.com', '123456'));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.authLogin,
      payload: {
        uid: expect.any(String),
        name: expect.any(String)
      }
    });
    expect( localStorage.setItem ).toHaveBeenCalledWith('token', expect.any(String));
    expect( localStorage.setItem ).toHaveBeenCalledWith('token-init-date', expect.any(Number));

    // Extraer argumentos de las llamadas realizadas a mi funcion mock localStorage.setItem
    // calls es un array, si se hace console.log se pueden ver los argumentos
    //const token = localStorage.setItem.mock.calls[0][1];
    //console.log(token)
  });
})
