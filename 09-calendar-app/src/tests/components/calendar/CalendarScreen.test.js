import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { CalendarScreen } from '../../../components/calendar/CalendarScreen';

// jest.mock('../../../actions/events', () => ({
//   eventStartDelete: jest.fn()
// }));

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
    
  });
});