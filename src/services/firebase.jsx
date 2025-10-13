// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYoDvaMGjvSc_3SJPLrGUnz4P-S9Xcc6Q",
  authDomain: "mi-ecommerce-4de6a.firebaseapp.com",
  projectId: "mi-ecommerce-4de6a",
  storageBucket: "mi-ecommerce-4de6a.firebasestorage.app",
  messagingSenderId: "982761594625",
  appId: "1:982761594625:web:a246e0281f33c9a5ad8500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)