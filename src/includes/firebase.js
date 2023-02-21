//configure and connect to firebase

import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCABYMFTTJTK8GVypkxHQfafLoPA0rO0oc",
  authDomain: "chnud-20733.firebaseapp.com", //auth information
  projectId: "chnud-20733", //
  storageBucket: "chnud-20733.appspot.com", // the location where the db is stored
  messagingSenderId: "316588170517", //pushing
  appId: "1:316588170517:web:61b7f3a6ca4373e08b1d1c", //Multiple App to connect to the project
};

export default firebase.initializeApp(firebaseConfig);
