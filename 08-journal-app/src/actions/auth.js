import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types"

const auth = getAuth();

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword( auth, email, password )
      .then(async(user) => {
        //await console.log(user);
        dispatch( login(user.user.uid, user.user.displayName) )
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error code: ' + errorCode + '. Message: ' + errorMessage);
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
})