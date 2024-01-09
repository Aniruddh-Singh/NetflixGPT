import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfjYgixVyOH4skL7jLg04bIOxrjLEbjP4",
    authDomain: "netflixgpt-6ce05.firebaseapp.com",
    projectId: "netflixgpt-6ce05",
    storageBucket: "netflixgpt-6ce05.appspot.com",
    messagingSenderId: "470927333595",
    appId: "1:470927333595:web:c0cb4af8537002a82114fe",
    measurementId: "G-W0L6J794CV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
getAnalytics(app);

export const auth = getAuth();
