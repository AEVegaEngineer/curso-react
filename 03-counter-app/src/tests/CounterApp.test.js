import React from 'react'
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'

describe('Pruebas en <CounterApp/>', () => {

    let wrapper = shallow(<CounterApp/>);

    beforeEach( () => {
        wrapper = shallow(<CounterApp/>);
    });

    test('Debe de mostrar <CounterApp/> correctamente', () => {
        const valorPorDefecto = 123;
        wrapper = shallow(<CounterApp valueDeIndex={valorPorDefecto}/>) 
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el valor por defecto de 100', () => {        
        const textoContador = wrapper.find('h2').text().trim();
        //console.log(textoContador);
        expect(textoContador).toBe('100');
    });

    test('Debe de incrementar con el boton de +1', () => {
        const btnAdd = wrapper.find('button').at(0).simulate('click');
        const textoContador = wrapper.find('h2').text().trim();
        //console.log(textoContador);
        expect(textoContador).toBe('101');
    });

    test('Debe de incrementar con el boton de -1', () => {
        const btnSubstract = wrapper.find('button').at(2).simulate('click');
        const textoContador = wrapper.find('h2').text().trim();
        //console.log(textoContador);
        expect(textoContador).toBe('99');        
    });
    
    test('Debe de colocar el valor por defecto con el boton Reset', () => {
        const valorDeIndex = 123;
        wrapper = shallow(<CounterApp valueDeIndex={valorDeIndex}/>);
        // se simula hacer dos clics en sumar
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        // se simula hacer clic en reset
        wrapper.find('button').at(1).simulate('click');
        //console.log(btnReset.html());
        const textoContador = wrapper.find('h2').text().trim();
        expect(textoContador).toBe(valorDeIndex.toString());
        //console.log(textoContador);
    });
});
