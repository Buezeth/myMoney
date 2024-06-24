// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, Timestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfDOelcggM-Szumyvo4idXJpjdT_gZ9dQ",
  authDomain: "my-money-6b5fc.firebaseapp.com",
  projectId: "my-money-6b5fc",
  storageBucket: "my-money-6b5fc.appspot.com",
  messagingSenderId: "757285192503",
  appId: "1:757285192503:web:f49b041026f6ec744d90b2"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase)
export const db = getFirestore(firebase)
// export const timeStamp = Timestamp()