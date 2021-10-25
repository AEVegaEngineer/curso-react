import React from 'react'
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store' 

import { Sidebar } from '../../../components/journal/Sidebar';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';

jest.mock('../../../actions/auth', () => ({
  startLogout: jest.fn(),
}));
jest.mock('../../../actions/notes', () => ({
  startNewNote: jest.fn(),
}));

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError:null
  }, 
  notes: {
    active: {
      id: 'abc',       
    }, 
    notes: []
  }
};
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore(initState);

store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <Sidebar />
  </Provider>          
)
describe('Pruebas en <Sidebar/>', () => {

  beforeEach(() => {
    store = mockStore(initState);
    jest.clearAllMocks();
  })

  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Debe de llamar a la accion startLogout al clickear en el enlace', () => {
    wrapper.find('.btn').prop('onClick')();
    expect(startLogout).toHaveBeenCalled();
  });
  test('Debe de llamar al startNewNote', () => {
    wrapper.find('.journal__new-entry').prop('onClick')();
    expect(startNewNote).toHaveBeenCalled();
  });
});