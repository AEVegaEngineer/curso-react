import React from 'react'
import {mount, configure} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { UserContext } from '../../../components/09-useContext/UserContext';
import { AboutScreen } from '../../../components/09-useContext/AboutScreen';

configure({adapter: new Adapter()});


describe('Pruebas en <AboutScreen/>', () => {
  // para poder usar el AboutScreen se debe crear un contexto, basicamente
  // esto funciona creando un contexto en UserContext.js
  // luego MainApp.js establece ese context con un provider y coloca en su value
  // las variables que se quieren publicar en ese contexto y debajo del contexto
  // pone el Router y como la app esta dentro de ese router, tiene acceso a esas variables
  const user = {
    name: 'Andres',
    email: 'aevega1991@gmail.com'
  }
  const setUser = jest.fn();
  // si usamos shallow, se va a renderizar unicamente el higher order component
  // es decir que toda la informacion subyacente del componente queda oculta
  // si necesitamos que se vea lo que contiene el componente
  const wrapper = mount(
    <UserContext.Provider value={{ user, setUser }} >
      <AboutScreen/>
    </UserContext.Provider>
  );
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar al usuario en el tag pre', () => {
    expect(JSON.parse(wrapper.find('pre').text().trim())).toEqual(user);    
    expect( setUser ).toHaveBeenCalledTimes(0);
  });

  test('debe de desloguear al usuario al hacer click en logout', async() => {
    expect( setUser ).toHaveBeenCalledTimes(0);
    const logout = wrapper.find('button').prop('onClick');
    logout();    
    expect( setUser ).toHaveBeenCalledTimes(1); 
    //expect(JSON.parse(wrapper.find('pre').text().trim())).toEqual({});  
  });

});