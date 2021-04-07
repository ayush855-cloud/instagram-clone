// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAr-5uvj2KUcN6wb-aBEDOY58aAvZS8wUc",
    authDomain: "instagram-a2d73.firebaseapp.com",
    projectId: "instagram-a2d73",
    storageBucket: "instagram-a2d73.appspot.com",
    messagingSenderId: "479681757412",
    appId: "1:479681757412:web:27b7f51b984e80a1726cf1",
    measurementId: "G-D5GD5MV1E6"
  };

firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const auth =firebase.auth();
const storage=firebase.storage();

export {db,auth,storage};