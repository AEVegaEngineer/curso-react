import Swal from 'sweetalert2'
import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types"
import { finishLoading, startLoading } from './ui';
import { noteLogout } from './notes';

const auth = getAuth();

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    return signInWithEmailAndPassword( auth, email, password )
      .then(async(user) => {
        //await console.log(user);
        dispatch( login(user.user.uid, user.user.displayName) );
        dispatch(finishLoading());
      }).catch((error) => {
        let errMsg = '';
        switch (error.code) {
          case 'auth/user-not-found':
            errMsg = 'There is no user record corresponding to this email. If the email is verified, the user might have been deleted.';
            break; 
          case 'auth/wrong-password':
            errMsg = 'Wrong email or password.';
            break;        
          default:
            errMsg = `System failure, try again later. Error code: ${error.code}`;
            break;
        }        
        dispatch(finishLoading());
        Swal.fire('Error', errMsg, 'error');
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
        Swal.fire('Error', error.message, 'error');
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
    // limpia las notas al hacer logout
    dispatch(noteLogout());
  }
}

export const logout = () => ({
  type: types.logout
})