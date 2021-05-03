import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC2AnoChyNvzLP9--802iiH5Rt8DrF_wTc",
    authDomain: "product-db-d1008.firebaseapp.com",
    projectId: "product-db-d1008",
    storageBucket: "product-db-d1008.appspot.com",
    messagingSenderId: "270781132286",
    appId: "1:270781132286:web:f9e01fa9e6d3e35060e4af",
    measurementId: "G-61L14FRHF8"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;