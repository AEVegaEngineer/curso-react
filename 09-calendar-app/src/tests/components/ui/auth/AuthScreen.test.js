import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { AuthScreen } from '../../../../components/auth/AuthScreen';
import { startLogin, startRegister } from '../../../../actions/auth';
import Swal from 'sweetalert2';


jest.mock('../../../../actions/auth',() => ({
  startLogin: jest.fn(),
  startRegister: jest.fn()
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};
let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <AuthScreen/>
  </Provider>
);

describe('Pruebas en <AuthScreen/>', () => {
  // siempre que se usen mocks se deben limpiar luego de cada prueba
  // sino acarreara datos de las distintas llamadas entre pruebas
  beforeEach( () => {
    jest.clearAllMocks();
  })


  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de llamar el dispatch del login', () => {
    wrapper.find('input[name="lEmail"]').simulate('change', {
      target: {
        name: 'lEmail',
        value: 'juan@gmail.com'
      }
    });
    wrapper.find('input[name="lPassword"]').simulate('change', {
      target: {
        name: 'lPassword',
        value: '123456'
      }
    });
    // dispara el primer formulario (login, osea at(0)) 
    wrapper.find('form').at(0).prop('onSubmit')({
      preventDefault(){}
    });
    expect(startLogin).toHaveBeenCalledWith('juan@gmail.com','123456');
  });

  test('No hay registro si las contrasenas son diferentes', () => {

    wrapper.find('input[name="rEmail"]').simulate('change', {
      target: {
        name: 'rEmail',
        value: 'juan@gmail.com'
      }
    });
    wrapper.find('input[name="rPassword1"]').simulate('change', {
      target: {
        name: 'rPassword1',
        value: '123456'
      }
    });
    wrapper.find('input[name="rPassword2"]').simulate('change', {
      target: {
        name: 'rPassword2',
        value: '1234567'
      }
    });
    // dispara el segundo formulario (registro, osea at(1)) 
    wrapper.find('form').at(1).prop('onSubmit')({
      preventDefault(){}
    });
    expect(startRegister).not.toHaveBeenCalled();
    expect( Swal.fire ).toHaveBeenCalledWith("Error",'Las contraseñas deben de ser iguales', "error");
  });

  test('Registrar si las contraseñas son iguales', () => {
    wrapper.find('input[name="rName"]').simulate('change', {
      target: {
        name: 'rName',
        value: 'juan'
      }
    });
    wrapper.find('input[name="rEmail"]').simulate('change', {
      target: {
        name: 'rEmail',
        value: 'juan@gmail.com'
      }
    });
    wrapper.find('input[name="rPassword1"]').simulate('change', {
      target: {
        name: 'rPassword1',
        value: '123456'
      }
    });
    wrapper.find('input[name="rPassword2"]').simulate('change', {
      target: {
        name: 'rPassword2',
        value: '123456'
      }
    });
    // dispara el segundo formulario (registro, osea at(1)) 
    wrapper.find('form').at(1).prop('onSubmit')({
      preventDefault(){}
    });
    expect(startRegister).toHaveBeenCalledWith('juan@gmail.com','123456','juan');   
    // este expect requiere que se limpien los mocks, sino, como ya se habia llamado anteriormente
    // el metodo fire, el mock retiene esa llamada y la muestra en esta prueba 
    expect( Swal.fire ).not.toHaveBeenCalled();
  });
});