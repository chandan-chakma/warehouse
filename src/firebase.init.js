// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjch3ipglOXJIXP40xKwNXMs86nmNPx6g",
    authDomain: "warehouse-management-7884c.firebaseapp.com",
    projectId: "warehouse-management-7884c",
    storageBucket: "warehouse-management-7884c.appspot.com",
    messagingSenderId: "552995486632",
    appId: "1:552995486632:web:404fc9173eea30345dfb9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
