import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBgmd_rP-_AUzMncadigX19Sy8CyvguGQI",
  authDomain: "feeltivity.firebaseapp.com",
  projectId: "feeltivity",
  storageBucket: "feeltivity.appspot.com",
  messagingSenderId: "1049393684316",
  appId: "1:1049393684316:web:9213c9e2f0ac0438d3eb99",
  measurementId: "G-NRCL2VEMHJ"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app)
export const storage=getStorage(app)