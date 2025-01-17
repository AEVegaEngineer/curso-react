import React from 'react'
import { Link } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages'



export const HeroCard = ({ 
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
 }) => {
  return (
    <div className="card" style={{ width:"18rem", minWidth:"18rem"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img 
            //src={`./assets/heroes/${ id }.jpg`} // desde public/assets
            src={heroImages(`./${id}.jpg`).default} // desde src/assets
            className="card-img" 
            alt={superhero}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {
              (alter_ego !== characters)
                && <p className="card-text">{characters}</p>
            }
            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>
            <Link to={`./hero/${id}`}>
            More...
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
