import { fileUpload } from "../../helpers/fileUpload";

describe('Pruebas en fileUpload', () => {
  test('Debe de cargar un archivo y returnar el url', async() => {
    const resp = await fetch('https://secure.gravatar.com/avatar/8223e756567ed1117c78b33a752f08d2?s=96&d=mm&r=g');
    const blob = await resp.blob();
    const file = new File([blob], 'foto.png');

    const url = await fileUpload(file);
    expect( typeof url ).toBe('string');
  });
  test('Debe de retornar un error', async() => {    
    const file = new File([], 'foto.png');
    const url = await fileUpload(file);
    expect( url ).toBe(null);
  });
});