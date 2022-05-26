// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId

  // apiKey: "AIzaSyBunIKd8kzB5YOjMPmDUS1kVdc3YtIAcEg",
  // authDomain: "furni-corner.firebaseapp.com",
  // projectId: "furni-corner",
  // storageBucket: "furni-corner.appspot.com",
  // messagingSenderId: "574361387133",
  // appId: "1:574361387133:web:0baeff0b47070d8e80b114"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;