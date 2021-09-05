import { mount } from "enzyme";
import { MemoryRouter, Router } from "react-router";
import { AuthContext } from "../../auth/AuthContext";
import { Navbar } from "../../components/ui/NavBar";
import { types } from "../../types/types";

describe('Pruebas en <Navbar/>', () => {
  // este history mock mockea la historia del navegador
  // luego se le asigna al router del navbar
  // es necesario simular la historia para poder evaluar los push o replaces en el history
  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
  }

  const contextValue = {
    dispatch: jest.fn(),
    user: { logged:true, name: 'John'}
  };
  // el memory router es un higher order component hecho para hacer pruebas de router con ciertas rutas
  // por ejemplo PrivateRoute debe estar dentro de un router
  // el error que muestra si no lo tiene dice, no se puede usar link fuera de un router      

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar/>
        </Router>
      </MemoryRouter>      
    </AuthContext.Provider>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.name);
  });

  test('debe de llamar el logout y usar history', () => {
    const buttonClick = wrapper.find('button').prop('onClick');
    buttonClick();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout
    });
    // revisa que luego de desloguear se enrute al usuario al login
    expect(historyMock.replace).toHaveBeenCalled('/login');
  });
  
  
});