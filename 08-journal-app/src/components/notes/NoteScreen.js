import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm'
import { activeNote, startDeleting } from '../../actions/notes'

export const NoteScreen = () => {

  const dispatch = useDispatch();

  //active:note renombra a note la desestructuracion de la nota activa
  const {active:note} = useSelector(state => state.notes);   
  const [ formValues, handleInputChange, reset ] = useForm( note );
  const { body, title, id } = formValues;
  
  //const { id, body, title } = formValues;
  
  // if( note.id !== id ){
  //   reset(note);
  // }

  
  const activeId = useRef(note.id)
  
  useEffect(() => {
    if( note.id !== activeId.current ){
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, {...formValues}));
  }, [formValues,dispatch])

  const handleDelete = () => {
    dispatch( startDeleting(id) )
  }
  

  return (
    <div className="notes__main-content">
      <NotesAppBar/>

      <div className="notes__content">
        <input
          name="title"
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          name="body"
          placeholder="What happend today?"
          className="notes__textarea"
          onChange={handleInputChange}
          value={body}
        >
          
        </textarea>
        {
          (note.url) &&
          <div className="notes__image">
            <img alt="imagen" src={note.url}/>
          </div>
        }
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete note
        </button>
      </div>
      
    </div>
  )
}
