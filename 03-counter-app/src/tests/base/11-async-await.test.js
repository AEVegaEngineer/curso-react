import { getImagen } from "../../base/11-async-await"

describe('Pruebas con async-await y Fetch', () => {
    test('debe de retornar el url de la imagen', async() => {
        const url = await getImagen();
        //console.log(url);
        // expect(typeof url).toBe('string');   //para casos donde llamada de la api falla por ejemplo porque el key es incorrecto, esto no sirve
        expect(url.includes('https://')).toBe(true);
    });
});
