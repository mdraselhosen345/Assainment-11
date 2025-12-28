// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";                                                            
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbVKn9CDtVfJQ9FdiVXRbZQX4GaV4aXy4",
  authDomain: "books-auth-d29e7.firebaseapp.com",
  projectId: "books-auth-d29e7",
  storageBucket: "books-auth-d29e7.firebasestorage.app",
//   storageBucket: "books-auth-d29e7.appspot.com",
  messagingSenderId: "1039152157172",
  appId: "1:1039152157172:web:1f6ac262408fec6981e9a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);