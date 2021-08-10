import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en AddCategory', () => {
    //const setCategories = () => {};
    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/>);
    });
    test('Debe de mostrarse correctamente', () => {        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo';
        input.simulate('change', { target : { value } });
    });

    test('No debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        // 1. simular el input change
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target : { value } });

        // 2. simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        // 3. se debe de haber llamado el setCategories al menos 1 vez
        expect( setCategories ).toHaveBeenCalled();

        // 4. el valor del input debe estar ''        
        const inputValue = input.prop('value');    
        expect( inputValue ).toBe('');
        
    });
})
