// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_kwToXl0YiSmMesWHOvrXImdi_y00Uh0",
    authDomain: "equi-sports-lichtad.firebaseapp.com",
    projectId: "equi-sports-lichtad",
    storageBucket: "equi-sports-lichtad.firebasestorage.app",
    messagingSenderId: "229778542875",
    appId: "1:229778542875:web:6ad142e9e1b4f7fb3283be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;