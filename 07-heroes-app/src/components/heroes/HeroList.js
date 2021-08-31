import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  // memoriza la lista y solo la actualiza cuando el publisher cambie
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  //const heroes = getHeroesByPublisher(publisher);
  
  return (
    // <div className="card-columns">
      <div className="card-group">
      {
        
        heroes.map(hero => (
          <HeroCard 
            key={hero.id}
            {...hero}
            >
          </HeroCard>
        ))
        
      }  
      </div>
    // </div>
  )
}
