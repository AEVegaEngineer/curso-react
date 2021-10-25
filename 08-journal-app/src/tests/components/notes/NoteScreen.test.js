import React from 'react'
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store' 

import { activeNote } from '../../../actions/notes';
import { NoteScreen } from '../../../components/notes/NoteScreen';

jest.mock('../../../actions/notes', () => ({
  activeNote: jest.fn(),
}));

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError:null
  }, 
  notes: {
    active: {
      id: 1234,
      title: 'Hola',
      body: 'Mundo',
      date: 0
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
    <NoteScreen />
  </Provider>          
)
describe('Pruebas en <NoteScreen/>', () => {
  
  beforeEach(() => {
    store = mockStore(initState);
    jest.clearAllMocks();
  })

  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de disparar el activeNote al modificar cualquier campo en el arreglo de dependencias del useEffect en NoteScreen', () => {
    wrapper.find('input[name="title"]').simulate('change',{ 
      target: {
        name: 'title',
        value: 'Hola de nuevo'
      }
    });
    expect(activeNote).toHaveBeenLastCalledWith( 
      1234,
      {
        body: 'Mundo',
        title: 'Hola de nuevo',
        id: 1234,
        date: 0
      }
    );
  });
});