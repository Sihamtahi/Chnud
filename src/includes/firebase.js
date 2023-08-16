//configure and connect to firebase

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCABYMFTTJTK8GVypkxHQfafLoPA0rO0oc",
  authDomain: "chnud-20733.firebaseapp.com", //auth information
  projectId: "chnud-20733", //
  storageBucket: "chnud-20733.appspot.com", // the location where the db is stored
  messagingSenderId: "316588170517", //pushing
  appId: "1:316588170517:web:61b7f3a6ca4373e08b1d1c", //Multiple App to connect to the project
};

//Initialise the app
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const userCollection = db.collection("users");
const songsCollection = db.collection("songs");

export { auth, db, userCollection, storage, songsCollection };
