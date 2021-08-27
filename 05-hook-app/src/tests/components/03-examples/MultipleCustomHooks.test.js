import React from 'react'
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

// esto evita las llamadas al use fetch
// necesito proveer una llamada por defecto cuando se use el usefetch
// inicialmente al declarar esto se genera un error
// para eso debo definir como quiero que trabaje
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks>', () => {
  // si nunca va a cambiar a diferencia del useFetch, le podemos definir un valor aqui
  // simula valor de retorno
  // se necesita el beforeEach para inicializar el valor de useCounter en todas las pruebas
  // el equivalente sin beforeEach es colocar el mockreturn del useCounter dentro de cada test
  beforeEach( () => {
    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    });
  });

  test('debe de mostrarse correctamente', () => {
    useFetch.mockReturnValue({
      data:null,
      loading: true, 
      error: null
    });
    const wrapper = shallow(<MultipleCustomHooks/>);
    // la ventaja de usar snapshot es que si alguien borra un tag o algo de la vista
    // esto atraparia ese error
    expect(wrapper).toMatchSnapshot();
  });
  test('debe mostrar la informacion', () => {
    useFetch.mockReturnValue({
      data: [{
        author:"Andres",
        quote: 'Hola mundo'
      }],
      loading: false, 
      error: null
    });
    const wrapper = shallow(<MultipleCustomHooks/>);
    //console.log(wrapper.html())
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-3').text().trim()).toBe('Hola mundo');
    expect(wrapper.find('footer').text().trim()).toBe('Andres');
  });
  
});