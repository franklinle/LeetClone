import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6WSZhwgvnlnwlCk_ddAy4NBTa3_SGDsg",
  authDomain: "leetclone-1e0e0.firebaseapp.com",
  projectId: "leetclone-1e0e0",
  storageBucket: "leetclone-1e0e0.appspot.com",
  messagingSenderId: "68057499387",
  appId: "1:68057499387:web:78429322921f9a598ed25e",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
