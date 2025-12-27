// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDRZXARHIzyGj3L-D7FINQgX2uXz-rovY",
  authDomain: "aimockinterviewer-6cb35.firebaseapp.com",
  projectId: "aimockinterviewer-6cb35",
  storageBucket: "aimockinterviewer-6cb35.firebasestorage.app",
  messagingSenderId: "393938821510",
  appId: "1:393938821510:web:bd4d8687ad4602cdab0c07",
  measurementId: "G-KDN0MCBZNW"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
