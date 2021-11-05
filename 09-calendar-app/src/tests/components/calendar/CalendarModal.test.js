import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import moment from 'moment';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { CalendarModal } from '../../../components/calendar/CalendarModal';

// jest.mock('../../../actions/events', () => ({
//   eventSetActive: jest.fn(),
//   eventStartLoading: jest.fn(),
// }));
// Storage.prototype.setItem = jest.fn();

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlusOne = now.clone().add(1, 'hours');

const initState = {
  ui: {
    modalOpen: true,
  },
  auth: {
    uid: '2131',
    name: 'Andres'
  },
  calendar: {
    events: [],
    activeEvent: {
      title: 'Hola mundo',
      notes: 'Algunas notas',
      start: now.toDate(),
      end: nowPlusOne.toDate(),
    }
  }
};
let store = mockStore(initState);
// mockeo el dispatch porque en DeleteEventFab no me interesa
// probar lo que hace el dispatch, sino que se dispare unicamente
store.dispatch = jest.fn();


const wrapper = mount(
  <Provider store={store}>
    <CalendarModal/>
  </Provider>
)

describe('Pruebas en el higher order component <CalendarModal/>', () => {
  test('Debe de mostrar el modal', () => {
    // arroja un falso positivo. EL modal existe pero esta escondido
    // expect(wrapper.find('.modal').exists()).toBe(true);
    // console.log(wrapper.find('.modal').exists())

    // esto, a pesar de que la prueba pasa, va a arrojar un error de que
    // el prototype.getContext no se puede ejecutar ya que no existe un dom
    // para eso, las modificaciones se hicieron directamente en el setupTests
    expect(wrapper.find('.modal').at(0).prop('isOpen')).toBe(true);
    
  });
});