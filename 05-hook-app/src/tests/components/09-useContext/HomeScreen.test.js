import React from 'react'
import {mount, configure} from "enzyme";
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({adapter: new Adapter()});

describe('Priuebas en <HomeScreen/>', () => {
  // para poder usar el HomeScreen se debe crear un contexto, basicamente
  // esto funciona creando un contexto en UserContext.js
  // luego MainApp.js establece ese context con un provider y coloca en su value
  // las variables que se quieren publicar en ese contexto y debajo del contexto
  // pone el Router y como la app esta dentro de ese router, tiene acceso a esas variables
  const user = {
    name: 'Andres',
    email: 'fernando@gmail.com'
  }
  // si usamos shallow, se va a renderizar unicamente el higher order component
  // es decir que toda la informacion subyacente del componente queda oculta
  // si necesitamos que se vea lo que contiene el componente
  const wrapper = mount(
    <UserContext.Provider value={{ user }} >
      <HomeScreen/>
    </UserContext.Provider>
  );
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })
  
});