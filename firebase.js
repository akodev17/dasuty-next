// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_BASE_API_KEY,
  authDomain: "dasuty-main.firebaseapp.com",
  projectId: "dasuty-main",
  storageBucket: "dasuty-main.appspot.com",
  messagingSenderId: "1073260188146",
  appId: "1:1073260188146:web:79309c95280e5963745b6b",
  measurementId: "G-SH05WDR076"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
