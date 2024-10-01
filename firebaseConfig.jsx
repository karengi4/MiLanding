// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configurationS
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV4CoEEyBjbbd0O6wFeafw7eF1Cwtfwz0",
  authDomain: "mi-landing.firebaseapp.com",
  projectId: "mi-landing",
  storageBucket: "mi-landing.appspot.com",
  messagingSenderId: "521821396773",
  appId: "1:521821396773:web:0795a9b6cfc4266caf44cc",
  measurementId: "G-LV1YYC81YP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };