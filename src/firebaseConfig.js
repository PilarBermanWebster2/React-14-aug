// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2b-fHQVQ7KhzWxQBH-MDAM2AvEPf5ULM",
  authDomain: "react-pilar.firebaseapp.com",
  databaseURL:
    "https://react-pilar-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-pilar",
  storageBucket: "react-pilar.appspot.com",
  messagingSenderId: "657780358991",
  appId: "1:657780358991:web:b9d0160c1f1752abf90f3a",
  measurementId: "G-TP01ERRNPE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
