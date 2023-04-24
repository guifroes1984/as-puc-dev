import firebase from "firebase/app";
import'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyBqxGOGGfhQ5PZCqrisqaNXdzjCASa-asw",
    authDomain: "atividadesomativa2-c2e7c.firebaseapp.com",
    projectId: "atividadesomativa2-c2e7c",
    storageBucket: "atividadesomativa2-c2e7c.appspot.com",
    messagingSenderId: "312818828326",
    appId: "1:312818828326:web:33e70c88081b4d7dca12e7"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;