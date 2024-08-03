// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7lDil9WCm-qLstrp94K38WUwh-_FITZY",
  authDomain: "chatapp-eff97.firebaseapp.com",
  projectId: "chatapp-eff97",
  storageBucket: "chatapp-eff97.appspot.com",
  messagingSenderId: "827443472292",
  appId: "1:827443472292:web:87930e5db1936e32fd4331"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
