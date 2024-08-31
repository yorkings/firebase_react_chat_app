
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY ,
  authDomain: "reactchat-4574b.firebaseapp.com",
  projectId: "reactchat-4574b",
  storageBucket: "reactchat-4574b.appspot.com",
  messagingSenderId: "480430903896",
  appId: "1:480430903896:web:4ac15de0a4b1f628a3f02d"
};

const app = initializeApp(firebaseConfig);
 

export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()