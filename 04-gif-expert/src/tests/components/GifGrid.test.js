import React from 'react' 
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs.js')

describe('Pruebas en <GifGrid/>', () => {
    //let wrapper;
    const category = "Dragon ball z"
    /*
    beforeEach( () => {
        wrapper = shallow(<GifGrid category={category}/>);
    });
    */
    test('Debe de mostrar <GifGrid/> correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        //wrapper = shallow(<GifGridItem title="esto es el ultimo titulo" url="http://localhost/titulo3"/>);
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa',
            title: 'Cualquier cosa'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });
})
