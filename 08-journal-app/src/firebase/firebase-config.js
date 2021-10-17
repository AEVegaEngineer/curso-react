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




// Initialize Firebase
initializeApp(firebaseConfig);
 
//const analytics = firebase.getAnalytics(app);

const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider
}