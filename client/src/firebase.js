// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4944d.firebaseapp.com",
  projectId: "mern-blog-4944d",
  storageBucket: "mern-blog-4944d.appspot.com",
  messagingSenderId: "238764335018",
  appId: "1:238764335018:web:d380d2631c8c2d326615d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

