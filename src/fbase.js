import firebase from "firebase/app"
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyA39OTKCeZYTuuG53a-FZVkdUmmm0gfHSY",
    authDomain: "nwitter-4c7c4.firebaseapp.com",
    projectId: "nwitter-4c7c4",
    storageBucket: "witter-4c7c4.appspot.com",
    messagingSenderId: "19923118468",
    appId: "1:19923118468:web:058d9fb0432ab620f055d1"
  };

 
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService =  firebase.auth();