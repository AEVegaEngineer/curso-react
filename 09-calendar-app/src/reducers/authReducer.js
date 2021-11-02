import { types } from "../types/types";


const initialState = {
  checking: true,
  email: null,
  password: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        email: action.payload.uid,
        password: action.payload.displayName,
      }    
    default:
      return state;
  }
}