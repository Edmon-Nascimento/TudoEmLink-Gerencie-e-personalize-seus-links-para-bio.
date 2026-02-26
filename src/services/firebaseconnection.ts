import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAy-gvrpMBATkWXRNCmuPgTdc_PC6Rme4c",
  authDomain: "tudoemlink.firebaseapp.com",
  projectId: "tudoemlink",
  storageBucket: "tudoemlink.firebasestorage.app",
  messagingSenderId: "1063219508197",
  appId: "1:1063219508197:web:bb8d6f1677d6e96375350c",
  measurementId: "G-NZFJP7RXTH"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)