import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router';
import { HeroScreen } from '../../../components/heroes/HeroScreen';

describe('Pruebas en <HeroScreen/>', () => {

  const historyMock = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  }
  
  test('debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen history={historyMock}/>
      </MemoryRouter>    
    );
    // si el memoryrouter no tiene initialEntries, y no se le mandan argumentos por el url
    // el snapshot va a mostrar algo parecido a:
    //exports[`Pruebas en <HeroScreen/> debe de mostrarse correctamente 1`] = `""`;
    // esto sucede porque no se ha establecido un heroe, y si no se tiene heroe se redirige a '/'
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });

  test('debe de mostrar un hero si el parametro existe y se encuentra', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroeId" component={HeroScreen}/>
      </MemoryRouter>    
    );
    expect(wrapper.find('.row').exists()).toBe(true);
  });
  
  test('debe de regresar a la pantalla anterior con PUSH', () => {
    // override de historyMock para poner el length en 1
    // si el length es 1, se redirecciona a '/'
    const historyMock = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    }
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route 
          path="/hero/:heroeId" 
          component={() => <HeroScreen history={historyMock}/>}
        />
      </MemoryRouter>    
    );
    const click = wrapper.find('button').prop('onClick');
    click();
    expect(historyMock.push).toHaveBeenCalledWith('/');
    expect(historyMock.goBack).not.toHaveBeenCalled();
  });
  
  test('debe de regresar a la pantalla anterior go back', () => {
    // se usa el historyMock declarado al principio, 
    // si se tiene un history.length > 2 se redirecciona hacia la pantalla anterior
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route 
          path="/hero/:heroeId" 
          component={() => <HeroScreen history={historyMock}/>}
        />
      </MemoryRouter>    
    );
    const click = wrapper.find('button').prop('onClick');
    click();
    expect(historyMock.goBack).toHaveBeenCalled();
    expect(historyMock.push).not.toHaveBeenCalled();
  }); 

  test('debe de llamar el redirect si el hero no existe', () => {
    // se usa el historyMock declarado al principio, 
    // si se tiene un history.length > 2 se redirecciona hacia la pantalla anterior
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider12312321']}>
        <Route 
          path="/hero/:heroeId" 
          component={() => <HeroScreen history={historyMock}/>}
        />
      </MemoryRouter>    
    );
    expect(wrapper.text()).toBe('');
    /*
    const click = wrapper.find('button').prop('onClick');
    click();
    expect(historyMock.goBack).toHaveBeenCalled();
    expect(historyMock.push).not.toHaveBeenCalled();
    */
  });
  
});