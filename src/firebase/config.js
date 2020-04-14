import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBEO7GY6QH2F0nGRMVkonu938pKBcFmxaE",
    authDomain: "minigastogo.firebaseapp.com",
    databaseURL: "https://minigastogo.firebaseio.com",
    projectId: "minigastogo",
    storageBucket: "minigastogo.appspot.com",
    messagingSenderId: "474031201873",
    appId: "1:474031201873:web:693fd1a435ee7d47fb6270",
    measurementId: "G-26DWS35FZ5"
  };

  const fireconfig = firebase.initializeApp(firebaseConfig)

export default fireconfig;