// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAVtPRldEmLOYgmsmq47VY0RHqtnoHYEYE",
    authDomain: "ibm-gc.firebaseapp.com",
    projectId: "ibm-gc",
    storageBucket: "ibm-gc.appspot.com",
    messagingSenderId: "288470887446",
    appId: "1:288470887446:web:ec7498b5baffea22951937",
    measurementId: "G-1DJRPDR6YR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


const firebase = {
    //Objects
    auth,
    app, 
    //Functions
    signInWithEmailAndPassword,
    onAuthStateChanged,
}

export { firebase };