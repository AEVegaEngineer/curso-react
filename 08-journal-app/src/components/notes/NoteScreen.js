import React from 'react'
import { useSelector } from 'react-redux'
import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm'

export const NoteScreen = () => {

  //active:note renombra a note la desestructuracion de la nota activa
  const {active:note} = useSelector(state => state.notes); 
  
  const [ formValues, handleInputChange ] = useForm( note );

  const {body, title} = formValues;

  return (
    <div className="notes__main-content">
      <NotesAppBar/>

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="What happend today?"
          className="notes__textarea"
          onChange={handleInputChange}
        >
          {body}
        </textarea>
        {
          (note.url) &&
          <div className="notes__image">
            <img alt="Cielo" src="https://play-lh.googleusercontent.com/3-AOeSSoqN3IK750gMz4FwOJw0MnIT-_dSA2Ujs9MzcS5bMaV9bwTBwH2udoEmBsBKY"/>
          </div>
        }
      </div>
    </div>
  )
}
