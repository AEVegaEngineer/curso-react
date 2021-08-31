import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {
  const {heroeId} = useParams();
  // memoriza la data del heroe y solo la actualiza cuando el heroeId cambie
  const hero = useMemo(() => getHeroById(heroeId), [heroeId])
  //const hero = getHeroById(heroeId);

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

  const handleReturn = () => {
    // si se abre una ventana sin historial de navegacion directamente en un url de un heroe,
    // ej. http://localhost:3000/hero/dc-batman, y luego se le da al boton de back, se sale
    // la aplicacion, para evitarlo se puede hacer una validacion
    if(history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  }
  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img 
          src={`../assets/heroes/${heroeId}.jpg`}
          alt='superhero'
          className='img-thumbnail'
          />
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego: {alter_ego}</b></li>
          <li className='list-group-item'><b>Publisher: {publisher}</b></li>
          <li className='list-group-item'><b>First appearance: {first_appearance}</b></li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button 
          className='btn btn-outline-info'
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </div>
  )
}
