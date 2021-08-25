import firebase from "firebase/app";
import "firebase/auth";
/*
const firebaseConfig = {
  apiKey: "AIzaSyDUImqktH3-V6SowZ9m5N-oL72fKJzMIII",
  authDomain: "nwitter-d2513.firebaseapp.com",
  projectId: "nwitter-d2513",
  storageBucket: "nwitter-d2513.appspot.com",
  messagingSenderId: "280807422985",
  appId: "1:280807422985:web:6e86cf5a7ba9bc9c8e8cd8",
};
*/
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
