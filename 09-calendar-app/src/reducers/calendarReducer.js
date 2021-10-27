import moment from "moment";
import { types } from "../types/types";

const initialState = { 
  events: [
    {
      title: 'Cumple del jefe',
      start: moment().toDate(),// new Date()
      end: moment().add(2, 'hours').toDate(),
      bgcolor: '#fafafa',
      notes: 'comprar el pastel',
      user: {
        _id: '123',
        name: 'Fernando',
      }
    }
  ],
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
    default:
      return state;
  }
}