import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar/>

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
        />
        <textarea
          placeholder="What happend today?"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img alt="Cielo" src="https://play-lh.googleusercontent.com/3-AOeSSoqN3IK750gMz4FwOJw0MnIT-_dSA2Ujs9MzcS5bMaV9bwTBwH2udoEmBsBKY"/>
        </div>

        
      </div>
    </div>
  )
}
