import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { CalendarScreen } from '../../../components/calendar/CalendarScreen';
import { messages } from '../../../helpers/calendar-messages-es';
import { types } from '../../../types/types';
import { eventSetActive } from '../../../actions/events';
import { act } from '@testing-library/react'

jest.mock('../../../actions/events', () => ({
  eventSetActive: jest.fn(),
  eventStartLoading: jest.fn(),
}));
Storage.prototype.setItem = jest.fn();

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  ui: {
    modalOpen: false,
  },
  auth: {
    uid: '2131',
    name: 'Andres'
  },
  calendar: {
    events: []
  }
};
let store = mockStore(initState);
// mockeo el dispatch porque en DeleteEventFab no me interesa
// probar lo que hace el dispatch, sino que se dispare unicamente
store.dispatch = jest.fn();


const wrapper = mount(
  <Provider store={store}>
    <CalendarScreen/>
  </Provider>
)

describe('Pruebas en <CalendarScreen/>', () => {
  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Pruebas con las interacciones del calendario', () => {
    // asegurando que este usando el lenguaje en espanol
    const calendar = wrapper.find('Calendar');
    //console.log(calendar.html())
    const calendarMessages = calendar.prop('messages');
    expect(calendarMessages).toEqual(messages);

    // testeando los doble clics
    calendar.prop('onDoubleClickEvent')();
    // como estas acciones son sincronas, puedo poner el type directamente
    expect( store.dispatch ).toHaveBeenCalledWith({ type: types.uiOpenModal });

    // testeando la seleccion de las cards
    calendar.prop('onSelectEvent')({ start: 'hola'}); 
    expect( eventSetActive ).toHaveBeenCalledWith({ start: 'hola'});
    // act se debe usar porque esa instrucción hace una modificación con el setState, 
    // casi siempre el error va a indicar cuando es necesario usarlo
    act(() => {

      // si se cambia el view, se debe guardar la ultima posicion del calendario observada en el local storage
      // se manda week como parametro a la funcion onView
      calendar.prop('onView')('week'); 
      // lastView es el nombre de la variable del local storage
      expect( localStorage.setItem ).toHaveBeenCalledWith('lastView','week'); 

    })

  })
});