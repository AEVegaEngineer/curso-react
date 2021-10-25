import configureStore from 'redux-mock-store' 
import thunk from 'redux-thunk';
import React from 'react';
import {mount} from 'enzyme';
import { LoginScreen } from "../../../components/auth/LoginScreen";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

jest.mock('../../../actions/auth', () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn(),
}));

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError:null
  }
};
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore(initState);

store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <LoginScreen />
    </MemoryRouter>
  </Provider>      
)

describe('Pruebas en <LoginScreen/>', () => {
  beforeEach(() => {
    store = mockStore(initState);
    jest.clearAllMocks();
  })
  test('Debe de mostrar el login screen correctamente', () => {        
    expect(wrapper).toMatchSnapshot();
  });
  test('Debe de disparar la accion startGoogleLogin', () => {
    wrapper.find('.google-btn').prop('onClick')();
    expect(startGoogleLogin).toHaveBeenCalledTimes(1);
  });

  test('Debe de disparar el startLogin con los respectivos argumentos', () => {
    wrapper.find('form').props().onSubmit({
      preventDefault: () => {}
    })
    expect(startLoginEmailPassword).toHaveBeenCalledWith('aevega@gmail.com','123456');    
  });
});