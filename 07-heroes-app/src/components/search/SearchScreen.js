import React from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heros'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = ({ history }) => {

  const location = useLocation();
  // {q = ''} cachea si viene undefined y retorna ''
  const {q = ''} = queryString.parse(location.search)
  console.log(q);
  
  const heroesFiltered = heroes;

  // si refresco el navegador, el valor de la caja de texto va a ser el que se recibe en la query del url
  const initialForm = {
    search: q
  }
  const [formValues, handleInputChange] = useForm(initialForm);
  const {search} = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
  }  

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
              name="search" 
              autoComplete="off"
              value={search}
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
              heroesFiltered.map(hero => (
                <HeroCard key={hero.id} {...hero}/>
              ))
            }
        </div>
      </div>
    </div>
  )
}
