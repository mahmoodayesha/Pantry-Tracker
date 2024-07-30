// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtjm0ywOmUqIt2Ejq10wpeRRYb419Qt-w",
  authDomain: "plentrytracker.firebaseapp.com",
  projectId: "plentrytracker",
  storageBucket: "plentrytracker.appspot.com",
  messagingSenderId: "751249157442",
  appId: "1:751249157442:web:a9db9a40dd85c2087cecdb",
  measurementId: "G-JXV73SQ629"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
// const analytics = getAnalytics(app);
export {app,firestore}