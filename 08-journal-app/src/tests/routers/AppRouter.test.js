import configureStore from 'redux-mock-store' 
import thunk from 'redux-thunk';

import React from 'react';
import {mount} from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'
import { act } from '@testing-library/react'


import { AppRouter } from '../../routers/AppRouter';
//import { firebase } from '../../firebase/firebase-config'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { login } from '../../actions/auth';

import Swal from 'sweetalert2'

// como sweetalert2 tiene exportacion por defecto (sin llaves)
// no es necesario mockear Swal, sino directamente el metodo
// que se esta llamando (fire)
jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));

jest.mock('../../actions/auth', () => ({
  login: jest.fn(),
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


describe('Pruebas en <AppRouter/>', () => {
  test('Debe de llamar el login si estoy autenticado', async() => { 
    // tengo que disparar el onAuthStateChanged de firebase   
    let user;
    await act( async () => {
      const auth = getAuth();
      const userCred = await signInWithEmailAndPassword(auth,'test@testing.com', '123456');
      user = userCred.user;
      //console.log(userCred)
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <AppRouter />
          </MemoryRouter>
        </Provider>      
      )

    });

    expect(login).toHaveBeenCalledWith('Hl353oHFY5hOUtEikAsv4qsQxf12', null);
    
  });

});