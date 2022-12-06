// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiCjQcotbR4MZBPT551BG51sjqHpO8UIw",
  authDomain: "spendno-d2683.firebaseapp.com",
  projectId: "spendno-d2683",
  storageBucket: "spendno-d2683.appspot.com",
  messagingSenderId: "611341945130",
  appId: "1:611341945130:web:a6f95468a241fd3f95f653"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
