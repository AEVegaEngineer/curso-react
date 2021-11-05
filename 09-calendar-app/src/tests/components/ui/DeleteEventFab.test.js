import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { DeleteEventFab } from '../../../components/ui/DeleteEventFab';

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
});