import firebase from "firebase/app";
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBICaug8KbPO2J7WUO-FO3AVMMW2uZHnp0",
    authDomain: "crud-app-1e1ef.firebaseapp.com",
    projectId: "crud-app-1e1ef",
    storageBucket: "crud-app-1e1ef.appspot.com",
    messagingSenderId: "158925305247",
    appId: "1:158925305247:web:82c41311e61f8fd44a39aa"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}