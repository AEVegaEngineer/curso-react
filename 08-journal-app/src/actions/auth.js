import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types"
import { finishLoading, startLoading } from './ui';

const auth = getAuth();

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    signInWithEmailAndPassword( auth, email, password )
      .then(async(user) => {
        //await console.log(user);
        dispatch( login(user.user.uid, user.user.displayName) );
        dispatch(finishLoading());
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error code: ' + errorCode + '. Message: ' + errorMessage);
        dispatch(finishLoading());
      });
  }
}

export const startRegisterWithEmailPasswordName = ( email, password, name) => {
  return (dispatch) => {
    
    createUserWithEmailAndPassword(auth, email, password)
      .then(async(user) => {
        await updateProfile(auth.currentUser,{ displayName: name });
        console.log(user)
        // dispatch(login(user.uid, user.displayName))
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error code: ' + errorCode + '. Message: ' + errorMessage);
      });
  }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleAuthProvider)
      .then(({user}) => {
        dispatch(login(user.uid, user.displayName))
      })
      .catch(error => {console.log('Error: '+error)});
  }
}

export const login = (uid, displayName) => ({  
  type: types.login,
  payload: {
    uid,
    displayName      
  }  
});

export const startLogout = () => {
  return async(dispatch) => {
    await getAuth().signOut();
    dispatch(logout());
  }
}

export const logout = () => ({
  type: types.logout
})