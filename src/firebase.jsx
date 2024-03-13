// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDfcItaz2N4z0eRlAh_uXSlxpnAWL8yfI0",
  authDomain: "aidaytool2.firebaseapp.com",
  projectId: "aidaytool2",
  storageBucket: "aidaytool2.appspot.com",
  messagingSenderId: "33716000749",
  appId: "1:33716000749:web:d7e67a132da667a1af39e4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
