import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBb00jSq_a-Y_iigs2GnziWZmA57uAR7as",
  authDomain: "speakwise-teamcj.firebaseapp.com",
  projectId: "speakwise-teamcj",
  storageBucket: "speakwise-teamcj.appspot.com",
  messagingSenderId: "611663747328",
  appId: "1:611663747328:web:04047bddc2786c20f4fbe5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
