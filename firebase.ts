import { getApp, getApps,initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQK_iRx2J8VaL5pLs2W2kdzUAqLIHuVaQ",
  authDomain: "chatgpt-clone-361ca.firebaseapp.com",
  projectId: "chatgpt-clone-361ca",
  storageBucket: "chatgpt-clone-361ca.appspot.com",
  messagingSenderId: "458826894005",
  appId: "1:458826894005:web:d985210e0c087c89b2ccfc"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }