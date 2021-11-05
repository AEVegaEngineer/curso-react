import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { AuthScreen } from '../../../../components/auth/AuthScreen';
import { startLogin } from '../../../../actions/auth';


jest.mock('../../../../actions/auth',() => ({
  startLogin: jest.fn()
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
    wrapper.find('form').at(0).prop('onSubmit')({
      preventDefault(){}
    });
    expect(startLogin).toHaveBeenCalledWith('juan@gmail.com','123456');
  });
});