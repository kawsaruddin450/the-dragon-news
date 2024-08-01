// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAImUFy2DPYYHtodKnkIvXh1kLOyPCW6_E",
  authDomain: "the-news-dragon-cf44e.firebaseapp.com",
  projectId: "the-news-dragon-cf44e",
  storageBucket: "the-news-dragon-cf44e.appspot.com",
  messagingSenderId: "706976525413",
  appId: "1:706976525413:web:ef57abac2079fcffae6a8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;