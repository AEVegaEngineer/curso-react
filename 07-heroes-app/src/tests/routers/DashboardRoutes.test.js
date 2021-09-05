import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe('Pruebas en <DashboardRoutes/>', () => {
  test('debe de mostrarse correctamente', () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: { logged:true, name: 'John'}
    };
    const wrapper = mount(
      // se coloca el contexto porque se supone que en el dashboard ya el usuario esta logueado
      // el memory router es un higher order component hecho para hacer pruebas de router con ciertas rutas
      // por ejemplo DashboardRoutes debe estar dentro de un router
      // el error que muestra si no lo tiene dice, no se puede usar link fuera de un router
      
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>        
      </AuthContext.Provider>  
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe("John")
  });  
});