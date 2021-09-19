import { mount } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";

describe('Pruebas en <LoginScreen/>', () => {
  const historyMock = {
    // resuelve el error:  Error: Uncaught [TypeError: history.replace is not a function]
    replace: jest.fn(),
  }

  const contextValue = {
    dispatch: jest.fn(),
    user: { logged:false }
  };
  // el contexto es un higher order component, por lo que no se puede usar shallow
  
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen history={historyMock}/>
    </AuthContext.Provider>
    
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de realizar el dispatch y la navegacion', () => {
    const buttonClick = wrapper.find('button').prop('onClick');
    buttonClick();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      payload: {
        name: "Andres",
      },
      type: types.login
    });
    // revisa que luego de iniciar sesion se enrute al usuario
    expect(historyMock.replace).toHaveBeenCalledWith('/');

    // probando que el localstorage haya sido guardado correctamente
    localStorage.setItem('lastPath','/dc');
    buttonClick();

    // el replace toma el dato del localstorage
    expect(historyMock.replace).toHaveBeenCalledWith('/dc');
  }); 

  
  
});