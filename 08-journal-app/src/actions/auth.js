import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types"

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch( login(123,'pedro'));
    }, 3500);
  }
}

export const startRegisterWithEmailPasswordName = ( email, password, name) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async(user) => {
        await updateProfile(auth.currentUser,{ displayName: name });
        console.log(user)
        // dispatch(login(user.uid, user.displayName))
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error code: ' + errorCode + '. Message: ' + errorMessage);
      });
  }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
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
})