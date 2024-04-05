// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAS-M73hnQcqij_0jxEFTWXpot65mHOpYc",
  authDomain: "stackpham2-d762c.firebaseapp.com",
  projectId: "stackpham2-d762c",
  storageBucket: "stackpham2-d762c.appspot.com",
  messagingSenderId: "88401720283",
  appId: "1:88401720283:web:7c6b2147628b41ab4dadfe"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCo0Q81SWcv5C51yxG4LHAqHSQkXXQZgRs",
//   authDomain: "testing-d8b16.firebaseapp.com",
//   projectId: "testing-d8b16",
//   storageBucket: "testing-d8b16.appspot.com",
//   messagingSenderId: "1035555536799",
//   appId: "1:1035555536799:web:f0c18b1b5fb877b75e87aa"
// };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
