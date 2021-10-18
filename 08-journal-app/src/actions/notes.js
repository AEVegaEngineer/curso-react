import {db} from '../firebase/firebase-config'
import { collection, addDoc } from "firebase/firestore";
import { types } from '../types/types';

export const startNewNote = () => {
  return async(dispatch, getState) => {
    const {uid} = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }
    const docRef = await addDoc(collection(db, `${ uid }`, "journal/notes"), newNote);
    //console.log("Document written with ID: ", docRef);
    dispatch (activeNote(docRef.id, newNote))
  }
}

export const activeNote = (id, note) => ({
  type: types.notesSetActive,
  payload: { 
    id,
    ...note
  }
})

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes
});