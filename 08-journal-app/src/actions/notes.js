import {db} from '../firebase/firebase-config'
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { types } from '../types/types';
import { loadNotes } from '../helpers/loadNotes';

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

export const startLoadingNotes = (uid) => {
  return async(dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  }
}

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes
});

export const inAppSaveNote = (note) => {
  return async (dispatch, getState) => {
    const {uid} = getState().auth;
    if(!note.url){
      delete note.url;
    }

    const noteToFirestore = {...note}
    delete noteToFirestore.id
    //console.log(`${uid}/journal/notes/${note.id}`)
    const noteRef = doc(db, `${uid}/journal/notes/${note.id}`)
    await updateDoc(noteRef,noteToFirestore);
  }
}