import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCwfR6wB3y1cI7ucLgVPXYhYtMtJAdbXP8",
  authDomain: "feeltivity-9c2b5.firebaseapp.com",
  projectId: "feeltivity-9c2b5",
  storageBucket: "feeltivity-9c2b5.appspot.com",
  messagingSenderId: "1025472089403",
  appId: "1:1025472089403:web:0896f6bae66fce3d02fb1e"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app)
export const storage=getStorage(app)