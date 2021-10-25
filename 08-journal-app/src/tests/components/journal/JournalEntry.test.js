import React from 'react'
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store' 
import { JournalEntry } from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';


const initState = {};
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore(initState);

store.dispatch = jest.fn();


const note = {
  id: 10,
  date: 0,
  title: 'Hola',
  body: 'Mundo', 
  url: 'https://algunlugar.com/foto.jpg'
}
const wrapper = mount(
  <Provider store={store}>
    <JournalEntry {...note}/>
  </Provider>          
)

describe('Pruebas en <JournalEntry/>', () => {

  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Debe de activar la nota', () => {
    wrapper.find('.journal__entry').prop('onClick')();
    expect(store.dispatch).toHaveBeenCalledWith(
      activeNote( note.id, {...note})
    );
  });
});