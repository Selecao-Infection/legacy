// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVVOMW8t_7sToqpTuwivBj7dVkLb9g2P8",
  authDomain: "selecao-f7023.firebaseapp.com",
  projectId: "selecao-f7023",
  storageBucket: "selecao-f7023.appspot.com",
  messagingSenderId: "510748327814",
  appId: "1:510748327814:web:a89c92b63fc5edcd3eb607",
  measurementId: "G-FMS2ZNPY20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const storage = getStorage(app);
export {auth,storage}

