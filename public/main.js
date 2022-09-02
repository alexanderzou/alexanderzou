// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV6dajbmZqZ9NX6kTswvi1D_W6b7vaaaI",
  authDomain: "personal-website-809e5.firebaseapp.com",
  projectId: "personal-website-809e5",
  storageBucket: "personal-website-809e5.appspot.com",
  messagingSenderId: "341246300533",
  appId: "1:341246300533:web:81007352736b2cbfaa433c",
  measurementId: "G-KJWG9SLQ82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);