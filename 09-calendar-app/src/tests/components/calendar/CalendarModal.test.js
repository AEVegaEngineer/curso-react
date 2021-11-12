import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import moment from 'moment';
import { act } from '@testing-library/react'

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { CalendarModal } from '../../../components/calendar/CalendarModal';
import { eventStartUpdate, eventClearActive, eventStartAddNew } from '../../../actions/events';
import Swal from 'sweetalert2';

jest.mock('../../../actions/events', () => ({
  eventStartUpdate: jest.fn(),
  eventClearActive: jest.fn(),
  eventStartAddNew: jest.fn(),
}));
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
// mockeo el dispatch porque no me interesa
// probar lo que hace el dispatch, sino que se dispare unicamente
store.dispatch = jest.fn();


const wrapper = mount(
  <Provider store={store}>
    <CalendarModal/>
  </Provider>
)

describe('Pruebas en el higher order component <CalendarModal/>', () => {

  beforeEach( () => {
    jest.clearAllMocks();
  })

  test('Debe de mostrar el modal', () => {
    // arroja un falso positivo. EL modal existe pero esta escondido
    // expect(wrapper.find('.modal').exists()).toBe(true);
    // console.log(wrapper.find('.modal').exists())

    // esto, a pesar de que la prueba pasa, va a arrojar un error de que
    // el prototype.getContext no se puede ejecutar ya que no existe un dom
    // para eso, las modificaciones se hicieron directamente en el setupTests
    expect(wrapper.find('.modal').at(0).prop('isOpen')).toBe(true);
    
  });
  test('Debe de llamar la accion de actualizar y cerrar el modal', () => {
    wrapper.find('form').simulate('submit',{preventDefault(){}});
    expect(eventStartUpdate).toHaveBeenCalledWith(initState.calendar.activeEvent);
    // eventClearActive es un metodo dentro de closeModal, al validarlo, validamos que se cierre el modal
    expect(eventClearActive).toHaveBeenCalled();
  });

  test('Debe de mostrar error si falta el titulo', () => {
    wrapper.find('form').simulate('submit',{preventDefault(){}});    
    expect( wrapper.find('input[name="title"]').hasClass('is-invalid')).toBe(true);
  });

  // la diferencia entre crear un nuevo evento y actualizarlo es que si activeEvent tiene un valor
  // se debe actualizar, de lo contrario se debe crear, para eso debemos manipular el initState
  // y por lo tanto, reinicializar el wrapper

  test('Debe de crear un nuevo evento', () => {
    
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
        activeEvent: null
      }
    };
    let store = mockStore(initState); 
    store.dispatch = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <CalendarModal/>
      </Provider>
    )

    wrapper.find('input[name="title"]').simulate('change',{
      target: {
        name: 'title',
        value: 'Hola pruebas'
      }
    });
    wrapper.find('form').simulate('submit',{preventDefault(){}});    
    // si todo sale bien se deberia crear un nuevo registro, por lo que se llamara a eventStartAddNew
    expect(eventStartAddNew).toHaveBeenCalledWith({
      "end": expect.anything(),
      "notes": "",
      "start": expect.anything(),
      "title": "Hola pruebas"
    });
    // luego se deberia cerrar el modal
    expect(eventClearActive).toHaveBeenCalled();
  });
  test('Debe validar las fechas (DateTimePicker)', () => {
    wrapper.find('input[name="title"]').simulate('change',{
      target: {
        name: 'title',
        value: 'Hola pruebas'
      }
    });
    const hoy = new Date();
    act( () => {
      wrapper.find('DateTimePicker').at(1).prop('onChange')(hoy);
    });
    wrapper.find('form').simulate('submit',{preventDefault(){}});   
    expect(Swal.fire).toHaveBeenCalledWith("Error", "La fecha fin debe ser mayor a la fecha de incio", "error");
  });
});