import { heroes } from "../data/heros";

export const getHeroById = (id) => {
  return heroes.find( hero => hero.id === id );
}