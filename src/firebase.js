import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDocT3P5hOZ1PawB5M7LeMvo7dp4vmAEic",
  authDomain: "react-air-store.firebaseapp.com",
  databaseURL: "https://react-air-store.firebaseio.com",
  projectId: "react-air-store",
  storageBucket: "react-air-store.appspot.com",
  messagingSenderId: "1026200556940",
  appId: "1:1026200556940:web:45f318c22d811363e332a9",
  measurementId: "G-BTYYG56EZS"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth };


