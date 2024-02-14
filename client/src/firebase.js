// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "podcast-e2eb7.firebaseapp.com",
  projectId: "podcast-e2eb7",
  storageBucket: "podcast-e2eb7.appspot.com",
  messagingSenderId: "184404795367",
  appId: "1:184404795367:web:12c557e846e7e4ef09a742",
  measurementId: "G-W1ESEWPR7N",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
