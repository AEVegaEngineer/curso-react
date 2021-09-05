import React from 'react'
import {mount} from 'enzyme'
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';
describe('Pruebas en <AppRouter/>', () => {
  

  test('debe de mostrar el login si no esta autenticado', () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: { logged:false }
    };
    // el contexto es un higher order component, por lo que no se puede usar shallow
    
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter/>
      </AuthContext.Provider>
      
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('h1').text().trim()).toBe("Login");

  });

  test('debe de mostrar el componente marvel si esta autenticado', () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: { logged:true, name:"Juan" }
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter/>
      </AuthContext.Provider>
      
    );
    expect(wrapper).toMatchSnapshot();
    // si existe un navbar es xq esta autenticado
    expect(wrapper.find('.navbar').exists()).toBe(true);

    console.log(wrapper.html())
  })
  
  
});