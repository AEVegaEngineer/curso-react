import { heroes } from "../data/heros";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];
  if (!validPublishers.includes(publisher)){
    throw new Error("Invalid publisher: " + publisher);
  }
  return heroes.filter(hero => hero.publisher === publisher);
}