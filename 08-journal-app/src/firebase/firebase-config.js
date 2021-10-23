import 'firebase/firestore';
import "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

// con este console.log se pueden ver las variables de entorno
// que apuntan a testing cuando se corre npm run test
// y las que apuntan a dev cuando se corre npm start
/*
console.log('Working in '+process.env.NODE_ENV)
console.log(process.env)
*/

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
/*
const firebaseConfigTesting = {
  apiKey: "AIzaSyDPpw6ie_OfhbC3Q4-f7wEuIGmZ-_i5qEc",
  authDomain: "pruebas-ac663.firebaseapp.com",
  projectId: "pruebas-ac663",
  storageBucket: "pruebas-ac663.appspot.com",
  messagingSenderId: "468640814262",
  appId: "1:468640814262:web:6f82afc3eb3822bbe00217"
};
*/

initializeApp(firebaseConfig);
// Initialize Firebase
// if (process.env.NODE_ENV === 'test') {
//   //testing 
//   initializeApp(firebaseConfigTesting);
// } else {
//   //dev / prod
//   initializeApp(firebaseConfig);
// }


 
//const analytics = firebase.getAnalytics(app);

const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider
}