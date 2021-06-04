import heroes/*, {owners}*/ from '../data/heroes';

//console.log(owners);

const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id)
}
//console.log(getHeroeById(2));

//tarea
const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner)
}
//console.log(getHeroesByOwner('DC'));

export {
    getHeroeById,
    getHeroesByOwner
}