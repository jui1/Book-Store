// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArrsXmjFjTWU1nShBBGm-Z0eKFtMNdr_c",
  authDomain: "mern-book-4a660.firebaseapp.com",
  projectId: "mern-book-4a660",
  storageBucket: "mern-book-4a660.appspot.com",
  messagingSenderId: "491052441619",
  appId: "1:491052441619:web:0d31aeeb898efc790f9fe6",
  measurementId: "G-JC16F0XSNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;