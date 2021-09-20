import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('pruebas en <SearchScreen/>', () => {
  test('debe de mostrarse correctament con valores por defecto', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path="/search" component={SearchScreen}/>
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a Hero');
  });

  test('debe de mostrar a batman y el input con el queryString', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path="/search" component={SearchScreen}/>
      </MemoryRouter>
    );
    expect(wrapper.find('input').prop('value').trim()).toBe('batman');
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de mostrar un error si no se encuentra el Hero', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <Route path="/search" component={SearchScreen}/>
      </MemoryRouter>
    );
    expect(wrapper.find('.alert-danger').text().trim()).toBe("There is no hero named batman123");
    
  });
  
  test('debe de llamar el push del history', () => {
    const historyMock = {      
      push: jest.fn(),
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <Route 
          path="/search" 
          // de esta manera no puedo enviar el argumento history
          //component={SearchScreen}
          // se debe hacer asi
          component={() => <SearchScreen history={historyMock}/>}
        />
      </MemoryRouter>
    );
    wrapper.find('input').simulate('change',{ 
      target : { 
        name: 'searchText',
        value: 'batman'
      }
    });

    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    });

    expect(historyMock.push).toHaveBeenCalledWith(`?q=batman`)
  });
  
  
  
  
});