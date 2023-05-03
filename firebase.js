// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD0pGtRI2Rv-Nzvd8IN4RsF80XcIFSaFY",
  authDomain: "foodapp-6ffec.firebaseapp.com",
  projectId: "foodapp-6ffec",
  storageBucket: "foodapp-6ffec.appspot.com",
  messagingSenderId: "449973947139",
  appId: "1:449973947139:web:518b823db779d45267f736",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
