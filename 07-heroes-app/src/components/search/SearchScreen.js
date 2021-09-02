import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

  const location = useLocation();
  // {q = ''} cachea si viene undefined y retorna ''
  const {q = ''} = queryString.parse(location.search);
  
  
  // si refresco el navegador, el valor de la caja de texto va a ser el que se recibe en la query del url
  const initialForm = {
    searchText: q
  }
  const [formValues, handleInputChange] = useForm(initialForm);
  const {searchText} = formValues;
  
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  }  
  
  // useMemo para grabar los heroes filtrados y solo ejecutar getHeroes cuando se actualice la query
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  return (
    <div>
      <h1>Search Screen</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr/>
          <form onSubmit={handleSearch}>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Find your hero" 
              name="searchText" 
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <div className="d-grid gap-2">
              <button 
                className="btn btn-outline-primary btn-block" 
                type="submit"
              >
                Search...
              </button>
            </div>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr/>
            {
              // si no se ha buscado nada
              (q==='') && 
              <div className="alert alert-info">
                Search a Hero
              </div>
            }

            {
              // si no se han encontrado heroes con esa query
              (q!=='' && heroesFiltered.length===0) &&  
              <div className="alert alert-danger">
                There is no hero named {q}
              </div>
            }

            {
              heroesFiltered.map(hero => (
                <HeroCard key={hero.id} {...hero}/>
              ))
            }
        </div>
      </div>
    </div>
  )
}
