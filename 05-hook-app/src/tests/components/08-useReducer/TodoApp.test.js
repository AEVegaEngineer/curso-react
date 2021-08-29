import React from 'react'

import {mount, shallow, configure} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react'

configure({adapter: new Adapter()});

describe('Pruebas en <TodoApp/>', () => {

  const wrapper = shallow(<TodoApp/>);

  // es una manera sencilla de comprobar si se ha guardado un elemento en el storage
  Storage.prototype.setItem = jest.fn(() =>{});

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // esta prueba ya se llevo a cabo en TodoAdd pero
  // en este caso se quiere probar agregar los todos
  // de otra manera, y verificar que se hayan renderizado correctamente
  test('debe de agregar un TODO', () => {
    const wrapper = mount(<TodoApp/>);
    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');

    expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
    // esto sirve para revisar que argumentos fueron pasados a esas llamadas de funcion
    // expect( localStorage.setItem ).toHaveBeenCalledWith({});
    
  });

  // esta prueba tambien se hizo previamente
  test('debe de eliminar un todo', () => {
    const wrapper = mount(<TodoApp/>);
    // agrega un todo
    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
    });
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp (1)');
    // lo elimina
    act(() => {
      wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);    
    });
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
  })
  
  
});