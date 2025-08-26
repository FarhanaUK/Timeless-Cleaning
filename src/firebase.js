// src/firebase.js
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAfhnlct_QIIybVngbHMtO6YVAECp0X79c",
  authDomain: "bespoke-web-engineers.firebaseapp.com",
  projectId: "bespoke-web-engineers",
  storageBucket: "bespoke-web-engineers.firebasestorage.app",
  messagingSenderId: "1040527671915",
  appId: "1:1040527671915:web:303c62422d23f7780a272e",
  measurementId: "G-VGWL7VSGJV"
};


const app = initializeApp(firebaseConfig);


export { app };
