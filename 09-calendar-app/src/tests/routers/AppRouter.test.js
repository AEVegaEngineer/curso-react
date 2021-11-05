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

  // para las pruebas siguientes, se asume que en el estado de la aplicacion 
  // se debe tener un uid seteado en auth cuando una persona esta autenticada,
  // si la persona esta autenticada, se muestra el calendario, sino el login

  test('Debe de mostrar la ruta publica (login)', () => {
    const initState = {
      auth: {
        checking: false,
        uid: null
      }
    };
    let store = mockStore(initState);
    
    const wrapper = mount(
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.login-container').exists()).toBe(true);
  });

  test('Debe de mostrar la ruta privada (calendario)', () => {
    const initState = {
      auth: {
        checking: false,
        uid: '123',
        name: 'juan carlos'
      },
      calendar: {
        events: [],        
      },
      ui: {
        modalOpen: false,
      }
    };
    let store = mockStore(initState);
    
    const wrapper = mount(
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    );
    // en apps como la del calendario, donde mes a mes va a cambiar la ui,
    // reflejando los distintos dias del mes, este snapshot va a fallar y tendremos que
    // refrescarlo, una manera de evitar este refresco es quitar el snapshot y
    // verificar que existan elementos como los botones de la interfaz, y los elementos
    // comunes de las distintas vistas del calendario
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.calendar-screen').exists()).toBe(true);
  });
});