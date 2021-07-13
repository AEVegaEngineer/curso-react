import React from 'react' 
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'


describe('Pruebas en <GifGridItem/>', () => {
    const title = "esto es un titulo";
    const url = "http://localhost/titulo1";
    let wrapper;

    beforeEach( () => {
        wrapper = shallow(<GifGridItem title={title} url={url}/>);
    });

    test('Debe de mostrar <GifGridItem/> correctamente', () => {
        //wrapper = shallow(<GifGridItem title="esto es el ultimo titulo" url="http://localhost/titulo3"/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el title', () => {
         const p = wrapper.find('p');
         expect( p.text().trim() ).toBe(title);
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        //console.log( img.prop('src') )
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    });    
    
    test('debe tener animate__fadeInDown', () => {
        const div = wrapper.find('div');
        //animate__fadeInDown
        //console.log(div.prop('className'))
        const className = div.prop('className');
        expect( className.includes('animate__fadeInDown') ).toBe(true);
    });

});

