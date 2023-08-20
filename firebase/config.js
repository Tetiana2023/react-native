// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIFXvl9bihtQWrxmxPvShO2AcWiNQ8oZ8",
  authDomain: "rn-proj-4cb4f.firebaseapp.com",
  projectId: "rn-proj-4cb4f",
  storageBucket: "rn-proj-4cb4f.appspot.com",
  messagingSenderId: "311060321315",
  appId: "1:311060321315:web:126ec3be293fb902618d96",
  measurementId: "G-S19QSB90N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);