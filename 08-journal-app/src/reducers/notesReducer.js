import { types } from "../types/types";

const initialState = {
  notes: [], 
  active: null,
}

export const notesReducer = (state=initialState, action) => {
  switch (action.type) {
    case types.notesSetActive:
      return { 
        ...state,
        active: {
          ...action.payload
        }
      }
    case types.notesAddNew:
      return { 
        ...state,
        notes: [
          ...state.notes, action.payload
        ]
      }
    case types.notesLoad:
      return { 
        ...state,
        notes: [...action.payload]
      }
    case types.notesUpdated:
      //state.notes.map( note => note.id === action.payload.id && state.notes.push(note) )

      return { 
        ...state,
        notes: state.notes.map(
          note => note.id === action.payload.id 
            ? action.payload.note 
            : note
        )
      }
    case types.notesDelete:
      return {
        ...state,
        active: null,
        // regresa todas las notas excepto la que borre, (action.payload)
        notes: state.notes.filter( note => note.id !== action.payload )
      }
    case types.notesLogoutCleaning: 
      return {
        ...state,
        active: null,
        // limpia todas las notas al hacer logout
        notes: []
      }
    default:
      return state;
  }
}