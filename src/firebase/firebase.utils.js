import firebase from 'firebase/app';
//database
import 'firebase/firestore';
//auth
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDFYzDpIQ9WkFDa_KntganotqQbhLjZhNg",
    authDomain: "crwn-db-dc244.firebaseapp.com",
    databaseURL: "https://crwn-db-dc244.firebaseio.com",
    projectId: "crwn-db-dc244",
    storageBucket: "crwn-db-dc244.appspot.com",
    messagingSenderId: "1033290387514",
    appId: "1:1033290387514:web:b9d8e56190cf89dd0ae503",
    measurementId: "G-R5BPQF714W"
  };
  
  firebase.initializeApp(config);
  
    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;