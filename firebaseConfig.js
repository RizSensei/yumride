// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9zBlFWSmmzivNJbJZDDB3YhnBs4pofYA",
  authDomain: "yumride-72179.firebaseapp.com",
  projectId: "yumride-72179",
  storageBucket: "yumride-72179.appspot.com",
  messagingSenderId: "176569346653",
  appId: "1:176569346653:web:739775e11adff468fb3bb4",
  measurementId: "G-6KRLQ3X5EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);