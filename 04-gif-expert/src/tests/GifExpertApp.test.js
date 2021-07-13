import React from 'react' 
import { shallow } from 'enzyme'
import GifExpertApp from '../GifExpertApp'

describe('Pruebas en <GifExpertApp/>', () => {

    let wrapper = shallow(<GifExpertApp/>);

    beforeEach( () => {
        wrapper = shallow(<GifExpertApp/>);
    });

    test('Debe de mostrar <GifExpertApp/> correctamente', () => {
        wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });

});