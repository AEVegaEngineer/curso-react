import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router';

describe('Pruebas en <PrivateRoute/>',() => {
  const rest = {
    location: {
      pathname: '/marvel'
    }
  }

  Storage.prototype.setItem = jest.fn();

  test('debe de mostrar el componente si esta autenticado y guardar localStorage', () => {
    // cuando se tiene el tipo de estructura que tiene un higher order component, no se puede
    // usar shallow, ya que solo va a renderizar, en este caso, al MemoryRouter
    const wrapper = mount(
      // el memory router es un higher order component hecho para hacer pruebas de router con ciertas rutas
      // por ejemplo PrivateRoute debe estar dentro de un router
      <MemoryRouter>
        <PrivateRoute   
          isAuthenticated={true}
          component={() => <span>Listo</span>}
          {...rest}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath',rest.location.pathname);
  });  

  test('debe de bloquear el componente si NO esta autenticado', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute   
          isAuthenticated={false}
          component={() => <span>Listo</span>}
          {...rest}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('span').exists()).toBe(false);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath',rest.location.pathname);
  })
  
  
  
});