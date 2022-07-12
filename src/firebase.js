// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuqChNrm3_HLanxNVtIFjfGSABv3n78gQ",
  authDomain: "hotel-fddff.firebaseapp.com",
  projectId: "hotel-fddff",
  storageBucket: "hotel-fddff.appspot.com",
  messagingSenderId: "365899640253",
  appId: "1:365899640253:web:72c22f60a6cc59d6bc36d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();