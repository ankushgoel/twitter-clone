// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfpfMGhp68dBAYUI04dnXn1wWffQa95xQ",
  authDomain: "twitter-clone-e6765.firebaseapp.com",
  projectId: "twitter-clone-e6765",
  storageBucket: "twitter-clone-e6765.appspot.com",
  messagingSenderId: "761064106484",
  appId: "1:761064106484:web:7eb9940b75cbb0057f71a1",
  measurementId: "G-8M4H3968FT"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export default db;
