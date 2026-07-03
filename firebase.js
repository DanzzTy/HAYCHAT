import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
  getFirestore,
  setDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

// Firebase config kamu
const firebaseConfig = {
  apiKey: "AIzaSyDYDUZBQfmUdtoq0mPPEsjwYuixTGCLDF8",
  authDomain: "haychat-app.firebaseapp.com",
  projectId: "haychat-app",
  storageBucket: "haychat-app.appspot.com",
  messagingSenderId: "129217994637",
  appId: "1:129217994637:web:0aea6b35c8b76b3231a7c4"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
