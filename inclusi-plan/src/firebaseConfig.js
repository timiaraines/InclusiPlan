// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyCZEwxnMO34aO3LAohF12emez5PHbwfwSo",
  authDomain: "inclusi-plan-auth.firebaseapp.com",
  projectId: "inclusi-plan-auth",
  storageBucket: "inclusi-plan-auth.appspot.com",
  messagingSenderId: "1040880389800",
  appId: "1:1040880389800:web:9e4c8b26a322ad97953c9d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app