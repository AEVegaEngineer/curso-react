import React from 'react';
import {shallow} from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd/>', () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow( 
    <TodoAdd
      handleAddTodo={handleAddTodo}
    />
  );
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('No debe de llamar handleAddTodo', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({preventDefault(){}});
    expect( handleAddTodo ).toHaveBeenCalledTimes(0);
  });

  test('Debe de llamar la funcion handleAddTodo con un argumento', () => {  
    expect( handleAddTodo ).not.toHaveBeenCalled();
    const valor = "aprender algo"
    
    wrapper.find('input').simulate('change',{ target: { 
      value:valor,
      name:"description"
    }});  

    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({preventDefault(){}});
    
    expect( handleAddTodo ).toHaveBeenCalled();
    expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object));
    expect( handleAddTodo ).toHaveBeenCalledWith({
      desc: valor,
      done: false,
      id: expect.any(Number)
    });
    // luego de mandar el formulario se hace el reset, el cual deja el value del input vacio
    expect(wrapper.find('input').prop('value')).toBe('');
  });
  
});