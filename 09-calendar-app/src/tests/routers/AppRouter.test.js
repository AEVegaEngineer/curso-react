import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { AppRouter } from '../../routers/AppRouter';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);



describe('Pruebas en <AppRouter/>', () => {
  test('Se debe mostrar correctamente', () => {
    const initState = {
      auth: {
        checking: true
      }
    };
    let store = mockStore(initState);
    
    const wrapper = mount(
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h5').exists()).toBe(true);
  });
});