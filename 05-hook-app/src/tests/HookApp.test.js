import React from 'react' 
import { shallow } from 'enzyme'
import { HookApp } from '../HookApp'

describe('Pruebas de HookApp', () => {
    let wrapper = shallow(<HookApp/>);

    beforeEach( () => {
        wrapper = shallow(<HookApp/>);
    });

    test('Debe mostrar el snapshot del componente correctamente', () => {
        wrapper = shallow(<HookApp/>);
        expect(wrapper).toMatchSnapshot();
    })
    
});