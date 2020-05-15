import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // Added for reactstrap
import './index.css';
import 'aos/dist/aos.css'; // Added for AOS animation library
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyAIiW1E6N9LKIdFR02B-ervzwsd_5moFzg",
  authDomain: "chirpout-capstone.firebaseapp.com",
  databaseURL: "https://chirpout-capstone.firebaseio.com",
  projectId: "chirpout-capstone",
  storageBucket: "chirpout-capstone.appspot.com",
  messagingSenderId: "256351463387",
  appId: "1:256351463387:web:caefa946dcaa745703a9fe"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
