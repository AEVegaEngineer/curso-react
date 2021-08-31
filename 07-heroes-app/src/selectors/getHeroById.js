import { heroes } from "../data/heros";

export const getHeroeById = (id) => {
  return heroes.find( hero => hero.id === id );
}