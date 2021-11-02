import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";
import Swal from 'sweetalert2'

export const startLogin = (email, password) => {
  // es asincrono asi que necesita este return
  return async(dispatch) => {
    const resp = await fetchSinToken('auth', {email,password}, 'POST');
    const body = await resp.json();
    //const token = await resp.headers.get();    
    //console.log(body)
    
    if(body.ok){
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(login({
        uid: body.uid,
        name: body.name
      }))
    } else {
      Swal.fire('Error', body.msg, 'error');
    }    
  }
}


export const startRegister = (email, password, name) => {
  return async(dispatch) => {
    const resp = await fetchSinToken('auth/new', {email, password, name}, 'POST');
    const body = await resp.json();
    //const token = await resp.headers.get();    
    //console.log(body)
    
    if(body.ok){
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(login({
        uid: body.uid,
        name: body.name
      }))
    } else {
      Swal.fire('Error', body.msg, 'error');
    }  
  }
}

export const startCheking = () => {
  return async(dispatch) => {
    const resp = await fetchConToken('auth/renew');
    const body = await resp.json();    

    if(body.ok){
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(login({
        uid: body.uid,
        name: body.name
      }))
    } else {
      Swal.fire('Error', body.msg, 'error');
      dispatch(checkingFinish());
    }  
  }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = (user) => ({
  type : types.authLogin,
  payload: user
});