// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcuwY6Rq7Cmy8ezmo2FQh13Q8mn3A2I38",
  authDomain: "assignment-f64b3.firebaseapp.com",
  projectId: "assignment-f64b3",
  storageBucket: "assignment-f64b3.appspot.com",
  messagingSenderId: "957301844511",
  appId: "1:957301844511:web:aaa7ee21b69ce15530432a",
  measurementId: "G-P5QKTG0Z0Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);



