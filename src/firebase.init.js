 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk8uKSzdKwLKBrTail50fP1zTxkAX-jNw",
  authDomain: "reformation-sense.firebaseapp.com",
  projectId: "reformation-sense",
  storageBucket: "reformation-sense.appspot.com",
  messagingSenderId: "470314714336",
  appId: "1:470314714336:web:18c3f80f674a817e3cfc85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;