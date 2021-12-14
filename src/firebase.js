import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyDGN28iagN27yMmXKN6lFHxQczW2fRjFJ0",
    authDomain: "project-mentor-d5c00.firebaseapp.com",
    projectId: "project-mentor-d5c00",
    storageBucket: "project-mentor-d5c00.appspot.com",
    messagingSenderId: "462286624173",
    appId: "1:462286624173:web:3ed25140b15645b78f7d24",
    measurementId: "G-FNE8BLZ4MC",
});

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

