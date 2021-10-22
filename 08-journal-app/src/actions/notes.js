import Swal from 'sweetalert2'
import {db} from '../firebase/firebase-config'
import { collection, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { types } from '../types/types';
import { loadNotes } from '../helpers/loadNotes';
import { fileUpload } from '../helpers/fileUpload';

export const startNewNote = () => {
  return async(dispatch, getState) => {
    const {uid} = getState().auth;
    const {notes} = getState().notes;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }
    const docRef = await addDoc(collection(db, `${ uid }`, "journal/notes"), newNote);
    //console.log("Document written with ID: ", docRef);
    const nueva= {...newNote}
    nueva.id = docRef.id;
    //dispatch(setNotes([...notes,nueva]));
    dispatch(activeNote(docRef.id, newNote));
    dispatch(addNewNote(docRef.id, newNote));
    
  }
}

export const activeNote = (id, note) => ({
  type: types.notesSetActive,
  payload: { 
    id,
    ...note
  }
})

export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: { 
    id,
    ...note
  }
})

export const startLoadingNotes = (uid) => {
  return async(dispatch) => {
    const notes = await loadNotes(uid);
    //console.log(notes)
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

export const refreshNote = ( id, note ) => {
  console.log(note);
  return {  
  type: types.notesUpdated,
  payload: {
    id, 
    note: {
      id, 
      ...note
    }
  }
}};

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

// todas las tareas asincronas se hacen con thunk
export const startDeleting = (id) => {
  return async (dispatch, getState) => {
    const {uid} = getState().auth;
    await deleteDoc(doc(db, `${uid}/journal/notes/${id}`));
    dispatch(deleteNote(id));
  }
}

export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id
});

export const noteLogout = () => ({
  type: types.notesLogoutCleaning
});