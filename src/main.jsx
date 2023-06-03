import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyANS0eJYNKiJ_QG9XIONrDCE6iraiPhxWo",
  authDomain: "coderhouse-ecommerce-21456.firebaseapp.com",
  projectId: "coderhouse-ecommerce-21456",
  storageBucket: "coderhouse-ecommerce-21456.appspot.com",
  messagingSenderId: "399837276371",
  appId: "1:399837276371:web:800c55082bb1fc13e2cc26"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
