import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
    test('debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        //console.log(heroe)
        const heroeData = heroes.find( h => h.id === id);
        expect( heroe ).toEqual( heroeData );
    });    
    test('retornar undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect( heroe ).toBe( undefined );
    });  
    // TAREAS
    // evaluar los heroes de DC
    // en lugar de id creamos un index llamado owner
    // toEqual al arreglo filtrado
    test('debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const DCHeroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner);
        //console.log(DCHeroes);

        expect(DCHeroes).toEqual(heroesData);
        
        //Test literal (rompe si los objetos cambian)
        expect(DCHeroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

    });
    // evaluar los heroes de Marvel
    // toBe length = 2
    test('debe retornar un arreglo con los heroes de Marvel de longitud 2', () => {
        const owner = 'Marvel';
        const DCHeroes = getHeroesByOwner(owner);
        const DCHeroesLen = DCHeroes.length;
        //console.log(DCHeroes);
        expect(DCHeroesLen).toBe(2);
    });
})
