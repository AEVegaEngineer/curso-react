import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Swal from 'sweetalert2';
import '@testing-library/jest-dom';

import { startLogin, startRegister } from '../../actions/auth';
import { types } from '../../types/types';
import * as fetchModule from '../../helpers/fetch';


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

  test('startLogin incorrecto', async() => {
    // contraseña incorrecta
    await store.dispatch( startLogin('fernando@gmail.com', '1234562'));
    let actions = store.getActions();
    expect(actions).toEqual([]);
    expect( Swal.fire ).toHaveBeenCalledWith("Error", "Usuario o contraseña incorrecta", "error");

    // email incorrecto
    await store.dispatch( startLogin('fernando2@gmail.com', '123456'));
    actions = store.getActions();
    expect( Swal.fire ).toHaveBeenCalledWith("Error", "Usuario o contraseña incorrecta", "error");
  });

  test('startRegister correcto', async() => {
    // se mockea fetchSinToken unicamente para este test, los demas tests tienen el original
    // esto para evitar generar un registro de usuario, si no se quisiera hacer este mock,
    // se tendria que crear un metodo interno para limpiar el registro creado en el test (borrar usuario)
    fetchModule.fetchSinToken = jest.fn(() => ({
      json() {
        return{
          ok: true,
          uid: '123',
          name: 'carlos',
          token: 'ABC123ABC123'
        }
      }
    }));

    await store.dispatch( startRegister('test@test.com', '123456', 'test'));
    let actions = store.getActions();
    //console.log(actions);
    expect( actions[0] ).toEqual({
      type: types.authLogin,
      payload: {
        uid: '123',
        name: 'carlos'
      }
    });
    expect( localStorage.setItem ).toHaveBeenCalledWith('token', 'ABC123ABC123');
    expect( localStorage.setItem ).toHaveBeenCalledWith('token-init-date', expect.any(Number));
  });
})
