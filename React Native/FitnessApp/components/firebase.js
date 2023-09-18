// import * as firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBtTYoOILjaDAJIOC-yLFThn0RaNh3xsKc",
    authDomain: "testfitness-b4aee.firebaseapp.com",
    projectId: "testfitness-b4aee",
    storageBucket: "testfitness-b4aee.appspot.com",
    messagingSenderId: "715427926944",
    appId: "1:715427926944:web:c43e1166711c9d3c080ac5",
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export { firebase };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
