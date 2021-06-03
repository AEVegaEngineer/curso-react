import {heroes} from './data/heroes';

/*
const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id)
}
console.log(getHeroeById(2));
*/
//tarea
const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === 'DC')
}
console.log(getHeroesByOwner('DC'));