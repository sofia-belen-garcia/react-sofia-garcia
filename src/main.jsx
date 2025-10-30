import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_xOLvLCDfoDzh4hdFr7EiGeRogbmN25I",
  authDomain: "react-6b111.firebaseapp.com",
  projectId: "react-6b111",
  storageBucket: "react-6b111.firebasestorage.app",
  messagingSenderId: "382230531817",
  appId: "1:382230531817:web:d77ee9c57dc12b31e7ea78"
};

// Initialize Firebase
initializeApp(firebaseConfig); 

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <App />
  </StrictMode>,
)
