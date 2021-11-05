import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { DeleteEventFab } from '../../../components/ui/DeleteEventFab';
import { eventStartDelete } from '../../../actions/events';

jest.mock('../../../actions/events', () => ({
  eventStartDelete: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {}
let store = mockStore(initState);
// mockeo el dispatch porque en DeleteEventFab no me interesa
// probar lo que hace el dispatch, sino que se dispare unicamente
store.dispatch = jest.fn();


const wrapper = mount(
  <Provider store={store}>
    <DeleteEventFab />
  </Provider>
)

describe('Pruebas en <DeleteEventFab/>', () => {
  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de llamar el eventStartDelete al hacer el click', () => {
    wrapper.find('button').prop('onClick')();
    // se podria llamar de esta manera pero es ambiguo ya que si alguien cambia
    // por error eventStartDelete que se le pasa al dispatch por un login, por ejemplo,
    // la prueba seguiria dando correcta pero habria un error logico.
    //expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function));
    // para estos casos es mejor mockear la funcion interna de la accion
    expect(eventStartDelete).toHaveBeenCalled();
    
  });
});