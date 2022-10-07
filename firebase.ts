// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATyazqnj1Oyv4GZ9N1Dx_IEK4lbOer5as",
  authDomain: "codework-ea125.firebaseapp.com",
  projectId: "codework-ea125",
  storageBucket: "codework-ea125.appspot.com",
  messagingSenderId: "728237680984",
  appId: "1:728237680984:web:10fe1521fbebf31aa31d2d",
  measurementId: "G-XG4XSMG8CQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);