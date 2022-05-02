// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEuaeiWXS1SrM-noZVFPX_Mwod7ikk8fc",
    authDomain: "ema-john-simple-fd23d.firebaseapp.com",
    projectId: "ema-john-simple-fd23d",
    storageBucket: "ema-john-simple-fd23d.appspot.com",
    messagingSenderId: "678251477875",
    appId: "1:678251477875:web:29f6ff4c207fecc595a306"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;