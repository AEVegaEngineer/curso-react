import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef />', () => {
  const wrapper = shallow(<RealExampleRef/>);
  test('debe mostrarse correctamente', () => {
    
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el componente <MultipleCustomHooks />', () => {
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    const btnShow = wrapper.find('button').at(0).simulate('click');
    
    // const componente = wrapper.find('div').at(0).html();
    // console.log(componente);
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    
  });
  
});