import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA0wBjkjIrvW390eJFlx4KsyHjX2ldECcE",
  authDomain: "cd-library-1b1b0.firebaseapp.com",
  projectId: "cd-library-1b1b0",
  storageBucket: "cd-library-1b1b0.appspot.com",
  messagingSenderId: "743305499892",
  appId: "1:743305499892:web:b54e8ea1b89ac0c5abfaa1"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App fireStoreApp={app}/>
  </React.StrictMode>
);
