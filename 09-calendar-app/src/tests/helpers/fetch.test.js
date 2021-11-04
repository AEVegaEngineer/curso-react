import { fetchSinToken } from "../../helpers/fetch";

describe('Pruebas en el helper de Fetch', () => {
  test('fetchSinToken debe funcionar', async() => {
    const resp = await fetchSinToken('auth', {email: 'aevega1991@gmail.com', password: '123456'}, 'POST');
    expect( resp instanceof Response).toBe(true);

    const body = await resp.json();
    expect( body.ok ).toBe(true);
  });
});
