// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvr69CzQZZwTe3Rc3q04DWm2Ptrfu5w6M",
    authDomain: "fitness-826cb.firebaseapp.com",
    projectId: "fitness-826cb",
    storageBucket: "fitness-826cb.appspot.com",
    messagingSenderId: "80006507577",
    appId: "1:80006507577:web:c66d86f0e6b707e7b9f1e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialise Firestore service
const db = getFirestore(app);

export default db;