// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfxU5Pqwz5G3_1rKCa51qZEu4nRVrGF9w",
  authDomain: "surge-events.firebaseapp.com",
  projectId: "surge-events",
  storageBucket: "surge-events.appspot.com",
  messagingSenderId: "486173378444",
  appId: "1:486173378444:web:d6a7c32bfc588e930b78a9",
  measurementId: "G-WJ3ZB1VPJZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

