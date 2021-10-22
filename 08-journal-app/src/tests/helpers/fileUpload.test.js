import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({ 
  cloud_name: 'bhp-global', 
  api_key: '891677519143134', 
  api_secret: 'FrKAkHCs1Nj6mDXmekl2x2V1ROE',
  secure: true
});

describe('Pruebas en fileUpload', () => {
  test('Debe de cargar un archivo y returnar el url', async() => {
    const resp = await fetch('https://secure.gravatar.com/avatar/8223e756567ed1117c78b33a752f08d2?s=96&d=mm&r=g');
    const blob = await resp.blob();
    const file = new File([blob], 'foto.png');

    const url = await fileUpload(file);
    expect( typeof url ).toBe('string');

    // borrar imagen por ID
    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.png','');    

    cloudinary.v2.api.delete_resources(imageId, {}, () => {
      
    });
  });
  test('Debe de retornar un error', async() => {    
    const file = new File([], 'foto.png');
    const url = await fileUpload(file);
    expect( url ).toBe(null);
  });
});