import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBvCyhy5exNqoHzILP6YVUFiQeVnXQ5gkQ",
  authDomain: "react-marioplan-2ed58.firebaseapp.com",
  databaseURL: "https://react-marioplan-2ed58.firebaseio.com",
  projectId: "react-marioplan-2ed58",
  storageBucket: "react-marioplan-2ed58.appspot.com",
  messagingSenderId: "162071909006",
  appId: "1:162071909006:web:5b689bf128f443eb36efdf",
  measurementId: "G-C13WBYC209",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
