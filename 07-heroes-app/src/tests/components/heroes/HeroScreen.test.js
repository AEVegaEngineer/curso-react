import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router';
import { HeroScreen } from '../../../components/heroes/HeroScreen';

describe('Pruebas en <HeroScreen/>', () => {

  const historyMock = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  }

  const wrapper = mount(
    <MemoryRouter initialEntries={['/hero']}>
      <HeroScreen history={historyMock}/>
    </MemoryRouter>    
  );
  test('debe de mostrarse correctamente', () => {
    // si el memoryrouter no tiene initialEntries, y no se le mandan argumentos por el url
    // el snapshot va a mostrar algo parecido a:
    //exports[`Pruebas en <HeroScreen/> debe de mostrarse correctamente 1`] = `""`;
    // esto sucede porque no se ha establecido un heroe, y si no se tiene heroe se redirige a '/'
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });
  
  
});