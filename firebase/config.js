// import * as firebase from 'firebase';
import 'firebase/auth';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


import { getAnalytics } from "firebase/analytics";

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

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// export default firebase;