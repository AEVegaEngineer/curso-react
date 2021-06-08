import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('Debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }  
        const user = getUser();
        expect(user).toEqual(userTest);
    })    

    //getUsuarioActivo debe retornar un objeto
    test('getUsuarioActivo debe retornar un objeto', () => {
        const nombre = 'Andres'
        const userTest = {
            uid: 'ABC567',
            username: nombre
        } 
        const user = getUsuarioActivo(nombre);
        expect(user).toEqual(userTest);
    })
    
})
