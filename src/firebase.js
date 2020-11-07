import firebase from 'firebase';




const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCPspWsJatg4QUCJ6LSmp4Xt4ndsANDWUQ",
    authDomain: "facebook-messenger-clone-b9272.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-b9272.firebaseio.com",
    projectId: "facebook-messenger-clone-b9272",
    storageBucket: "facebook-messenger-clone-b9272.appspot.com",
    messagingSenderId: "691013762087",
    appId: "1:691013762087:web:e25bda97a07f7bf6662202",
    measurementId: "G-40QVDP1P7S"}
);

const db = firebaseApp.firestore();

export default db;