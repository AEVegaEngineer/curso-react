import Swal from 'sweetalert2'
import {db} from '../firebase/firebase-config'
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { types } from '../types/types';
import { loadNotes } from '../helpers/loadNotes';
import { fileUpload } from '../helpers/fileUpload';

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
    try {
      await updateDoc(noteRef,noteToFirestore);
      dispatch(refreshNote(note.id, noteToFirestore));
    } catch (error) {
      console.log(error);
    }    
    Swal.fire('Saved', note.title, 'success')
  }
}

export const refreshNote = ( id, note ) => ({
  type: types.notesUpdated,
  payload: {
    id, 
    note: {
      id, 
      ...note
    }
  }
});

export const startUploading = (file) => {
  return async(dispatch, getState) => {
    const {active: activeNote} = getState().notes;

    Swal.fire({
      title: 'Uploading...',
      text: 'please wait...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });

    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;

    
    Swal.close();
    dispatch(inAppSaveNote(activeNote));

  }
}