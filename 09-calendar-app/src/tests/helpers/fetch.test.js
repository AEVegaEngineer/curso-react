import { fetchConToken, fetchSinToken } from "../../helpers/fetch";

describe('Pruebas en el helper de Fetch', () => {
  let token = '';
  test('fetchSinToken debe funcionar', async() => {
    const resp = await fetchSinToken('auth', {email: 'aevega1991@gmail.com', password: '123456'}, 'POST');
    expect( resp instanceof Response).toBe(true);

    const body = await resp.json();
    expect( body.ok ).toBe(true);
    token = body.token;
  });

  test('fetchConToken debe funcionar', async() => {
    // valida que haya guardado un token en el localstorage y lo utiliza para la peticion
    localStorage.setItem('token',token);
    const resp = await fetchConToken('events/618053b4331741ffe12d4b01',{},'DELETE');
    const body = await resp.json();
    expect(body.msg).toBe('No existe un evento con ese id');
  });
});
