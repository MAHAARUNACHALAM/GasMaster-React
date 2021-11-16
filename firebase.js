// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAhGTs8xgqealpLhRJ7esWCMKGAiJuarKI",
	authDomain: "lpggasmaster1.firebaseapp.com",
	projectId: "lpggasmaster1",
	storageBucket: "lpggasmaster1.appspot.com",
	messagingSenderId: "86328726257",
	appId: "1:86328726257:web:c80506ebd499fe405dcf50",
};

// Initialize Firebase
// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export default firebase;
