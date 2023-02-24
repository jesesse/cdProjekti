import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTA13GMjmwARBQO3wOnbgaVtBCVPoEYCM",
  authDomain: "cd-library-48fc0.firebaseapp.com",
  projectId: "cd-library-48fc0",
  storageBucket: "cd-library-48fc0.appspot.com",
  messagingSenderId: "80611641762",
  appId: "1:80611641762:web:a26b0e90084cc681010afb"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App fireStoreApp={app}/>
  </React.StrictMode>
);
