import configureStore from 'redux-mock-store' 
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import thunk from "redux-thunk";
import { mount } from 'enzyme';
import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import { types } from '../../../types/types';

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError:null
  }
};
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore(initState);

//store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <RegisterScreen />
    </MemoryRouter>
  </Provider>      
)

describe('Pruebas en <RegisterScreen/>', () => {

  // beforeEach(() => {
  //   store = mockStore(initState);
  //   jest.clearAllMocks();
  // })

  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de hacer el dispatch de la accion respectiva', () => {
    const emailField = wrapper.find('input[name="email"]');
    emailField.simulate('change',{ 
      target: {
        value: '', 
        name: 'email'
      }
    });
    wrapper.find('form').simulate('submit',{
      preventDefault(){}
    });
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.uiSetError,
      payload: ['email is not valid']
    })
  });

  test('Debe de mostrar la caja de alerta con el error', () => {

    //Reinicializando el store con nuevos estados

    const initState = {
      auth: {},
      ui: {
        loading: false,
        msgError: ['Email no es correcto']
      }
    };

    let store = mockStore(initState);
    
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <RegisterScreen />
        </MemoryRouter>
      </Provider>      
    );

    expect( wrapper.find('.auth__alert-error').exists() ).toBe(true);
    expect( wrapper.find('.auth__alert-error').text().trim() ).toBe(initState.ui.msgError[0]);

  });

});