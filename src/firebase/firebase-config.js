import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "whereswaldo-7d8ed.firebaseapp.com",
  projectId: "whereswaldo-7d8ed",
  storageBucket: "whereswaldo-7d8ed.appspot.com",
  messagingSenderId: "529382105260",
  appId: "1:529382105260:web:e35dfa2f16f54728963f09",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)