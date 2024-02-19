import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB24RlABMXqRg2UmAVXJF76SdbAIwrK0zI",
  authDomain: "eclone12024.firebaseapp.com",
  projectId: "eclone12024",
  storageBucket: "eclone12024.appspot.com",
  messagingSenderId: "496127919600",
  appId: "1:496127919600:web:150548d9a9ad047f474935"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();