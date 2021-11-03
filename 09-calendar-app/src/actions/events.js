import { fetchConToken } from "../helpers/fetch";
import { convertDateStrToDateObj } from "../helpers/convertDateStrToDateObj";
import { types } from "../types/types";


export const eventStartAddNew = (event) => {
  // El id y nombre del usuario se toman desde el state
  // ya que no vienen directamente en la respuesta del backend
  // se podrian agregar en la respuesta del backend, pero este no es el caso
  return async( dispatch, getState )=> {  
    const { uid, name }   = getState().auth;
    try {
      //console.log(event)
      const resp = await fetchConToken('events/add', event, 'POST');
      const body = await resp.json();

      //console.log(body)
      if(body.ok) {
        event.id = body.evento.id;
        event.user = {
          _id: uid,
          name: name
        }
        //console.log(event)
        dispatch(eventAddNew(event))
      }
    } catch (error) {
      console.log(error)
    }
  }
}

const eventAddNew = (event) => ({
  type: types.eventAddNew,
  payload: event
});


export const eventSetActive = (event) => ({
  type: types.eventSetActive,
  payload: event
});

export const eventClearActive = () => ({
  type: types.eventClearActive,
});

export const eventUpdated = (event) => ({
  type: types.eventUpdated,
  payload: event
});

export const eventDeleted = () => ({
  type: types.eventDeleted,
});

export const eventStartLoading = () => {
  return async(dispatch) => {
    try {      
      const resp = await fetchConToken('events');
      const body = await resp.json();
      const events = convertDateStrToDateObj(body.eventos);
      //console.log(body)
      
      dispatch(eventLoaded(events))
    } catch (error) {
      console.log(error)
    }
  }
}

const eventLoaded = (events) => ({
  type : types.eventLoaded,
  payload: events
});