import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoListItem/>', () => {
  const index = 0;
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoListItem todo={demoTodos[0]} index={index} handleDelete={handleDelete} handleToggle={handleToggle}/>
  );
  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de llamar la funcion handleDelete', () => {
    // jest.fn()
    // toHaveBeenCalledWith, especifica el argumento con el que se llamo
    expect( handleDelete ).not.toHaveBeenCalled();
    const btnDelete = wrapper.find('button').at(0).simulate('click');    
    expect( handleDelete ).toHaveBeenCalledWith(demoTodos[0].id);    
  });

  test('Debe de llamar la funcion handleToggle', () => {
    // jest.fn()
    // toHaveBeenCalledWith
    expect( handleToggle ).not.toHaveBeenCalled();
    const pToggle = wrapper.find('p').at(0).simulate('click');    
    expect( handleToggle ).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('Debe de mostrar el texto correctamente', () => {
    // evaluar el contenido del parrafo
    expect(wrapper.find('p').text().trim()).toBe((index+1)+". "+demoTodos[0].desc);
  });

  test('debe de tener la clase complete si el todo.done esta en true', () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(
      <TodoListItem todo={todo} index={index} handleDelete={handleDelete} handleToggle={handleToggle}/>
    );
    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });
  
});
