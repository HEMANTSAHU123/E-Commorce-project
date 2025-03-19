import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyDfEzk3b6kjDwX81zoa3fA1wbKACCO7SOE",
  authDomain: "e-commorce-website.firebaseapp.com",
  projectId: "e-commorce-website",
  databaseURL: "https://e-commorce-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "e-commorce-website.firebasestorage.app",
  messagingSenderId: "884387059078",
  appId: "1:884387059078:web:570b9ec9039aae05668807",
  measurementId: "G-BRXGFWWFWD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app); 
export const realtimeDatabase = getDatabase(app); 
export const db=getFirestore(app);
