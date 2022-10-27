// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxsoZDHtRwAi1KEYwSPpQwMaBZVA7MXiM",
  authDomain: "brins-3be0f.firebaseapp.com",
  projectId: "brins-3be0f",
  storageBucket: "brins-3be0f.appspot.com",
  messagingSenderId: "1024427150152",
  appId: "1:1024427150152:web:8b52d234233eedf943c17d",
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
