import { types } from "../types/types";

// {
//   id: new Date().getTime(),
//   title: 'Cumple del jefe',
//   start: moment().toDate(),// new Date()
//   end: moment().add(2, 'hours').toDate(),
//   bgcolor: '#fafafa',
//   notes: 'comprar el pastel',
//   user: {
//     _id: '123',
//     name: 'Fernando',
//   }
// }

const initialState = { 
  events: [ ],
  activeEvent: null
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return{
        ...state,
        activeEvent: action.payload
      }
    case types.eventAddNew:
      return{
        ...state,
        events: [
          ...state.events, action.payload
        ]
      }
    case types.eventClearActive:
      return{
        ...state,
        activeEvent: null
      }
    case types.eventUnloaded:
      return{
        ...state,
        events: [],
        activeEvent: null
      }
    case types.eventUpdated:
      return{
        ...state,
        events: state.events.map(
          e => (e.id === action.payload.id) ? action.payload : e
        )
      }
    case types.eventDeleted:
      // regresa todos los eventos excepto el seleccionado
      return{
        ...state,
        events: state.events.filter(
          e => (e.id !== state.activeEvent.id)
        ),
        // restablece el activeEvent luego de eliminar ese evento
        activeEvent:null
      }

    case types.eventLoaded:
      return {
        ...state,
        events: [...action.payload]
      }
    default:
      return state;
  }
}