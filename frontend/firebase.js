// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-food-delivery-baced.firebaseapp.com",
  projectId: "vingo-food-delivery-baced",
  storageBucket: "vingo-food-delivery-baced.firebasestorage.app",
  messagingSenderId: "141188684367",
  appId: "1:141188684367:web:b3ffb0fdb8b2d273fa683a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}