import React from 'react'
import {mount, configure} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

configure({adapter: new Adapter()});

describe('Pruebas en <LoginScreen/>', () => {  
  const setUser = jest.fn();
  const wrapper = mount(
    <UserContext.Provider value={{ setUser }} >
      <LoginScreen />
    </UserContext.Provider>
  );
  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de ejecutar el setUser con el argumento esperado', () => {

    expect( setUser ).not.toHaveBeenCalled();

    const login = wrapper.find('button').prop('onClick');
    login({preventDefault(){}});
    
    expect( setUser ).toHaveBeenCalled();
    expect( setUser ).toHaveBeenCalledWith( expect.any(Object));
    
    expect( setUser ).toHaveBeenCalledWith({
      id: expect.any(Number),
      name: "Andres"
    });
    
  }); 
  
});