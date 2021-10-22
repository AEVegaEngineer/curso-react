import 'firebase/firestore';
import "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCphkp8PEQeGUk0T2nPTgDsEGeJ2lnYI-8",
  authDomain: "react-app-curso-c2511.firebaseapp.com",
  projectId: "react-app-curso-c2511",
  storageBucket: "react-app-curso-c2511.appspot.com",
  messagingSenderId: "131183975887",
  appId: "1:131183975887:web:971e79ebc1f94485ae06ba",
  measurementId: "G-Y98HHQ3N8Q"
};
const firebaseConfigTesting = {
  apiKey: "AIzaSyDPpw6ie_OfhbC3Q4-f7wEuIGmZ-_i5qEc",
  authDomain: "pruebas-ac663.firebaseapp.com",
  projectId: "pruebas-ac663",
  storageBucket: "pruebas-ac663.appspot.com",
  messagingSenderId: "468640814262",
  appId: "1:468640814262:web:6f82afc3eb3822bbe00217"
};

// Initialize Firebase
if (process.env.NODE_ENV === 'test') {
  //testing 
  initializeApp(firebaseConfigTesting);
} else {
  //dev / prod
  initializeApp(firebaseConfig);
}


 
//const analytics = firebase.getAnalytics(app);

const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider
}