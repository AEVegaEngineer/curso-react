import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
  const {heroeId} = useParams();
  const hero = getHeroById(heroeId);
  // como se va a desestructurar al heroe, se necesita revisar si el heroe no es undefined,
  // esto es, el parametro de busqueda heroeId es erroneo, para que no retorne un error,
  // esta verificacion redirecciona a la pagina root (marvel)
  if (!hero){
    return <Redirect to='/'/>;
  }
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;
  console.log(hero)
  return (
    <div>
      <h1>Hero Screen</h1>
    </div>
  )
}
