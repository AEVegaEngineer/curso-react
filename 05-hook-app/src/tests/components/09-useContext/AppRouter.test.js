import React from 'react'
import {mount, configure} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

configure({adapter: new Adapter()});

describe('Pruebas en <AppRouter/>', () => {
  const user = {
    id: 1,
    name: 'Andres'
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter/>
    </UserContext.Provider>
  );
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});