
import { render } from "@testing-library/react";
import React from 'react'
import { shallow } from 'enzyme'
import PrimeraApp from '../PrimeraApp'


describe('Pruebas en <PrimeraApp/>', () => {
    /*
    test('Debe de mostrar el mensaje "Hola Soy Goku"', () => {
        const saludo = 'Hola, soy Goku';
        const {getByText} = render(<PrimeraApp saludo = {saludo}/>);
        expect( getByText(saludo) ).toBeInTheDocument();
    })    
    */
    test('debe de mostrar <PrimeraApp/> correctamente', () => {
        const saludo = 'hola soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>) 
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'hola soy Goku';
        const subtitulo = 'Soy un subtitulo'
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );
        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);
        expect(textoParrafo).toBe(subtitulo);
    })
    
})
