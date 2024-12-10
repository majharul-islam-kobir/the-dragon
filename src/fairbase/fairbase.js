// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBftqo0TlVHVNbzvI0T1LCTX2mkb6F7UYc",
  authDomain: "dragon-6dccd.firebaseapp.com",
  projectId: "dragon-6dccd",
  storageBucket: "dragon-6dccd.firebasestorage.app",
  messagingSenderId: "418874192687",
  appId: "1:418874192687:web:e0f80f26e36d82d18ca7da",
  measurementId: "G-V7RB7916S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth} ;