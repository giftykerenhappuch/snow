const firebaseConfig = {
    //   copy your firebase config informations
      apiKey: "AIzaSyBEe675Hi0iWj1TXDOj1vtInXVOpeYBpMk",
      authDomain: "snow-3cc7b.firebaseapp.com",
      databaseURL: "https://snow-3cc7b-default-rtdb.firebaseio.com",
      projectId: "snow-3cc7b",
      storageBucket: "snow-3cc7b.appspot.com",
      messagingSenderId: "453587794824",
      appId: "1:453587794824:web:cce6632a07ef0a3ff6183d",
      measurementId: "G-PV4TQJ17L0"
  };
  firebase.initializeApp(firebaseConfig);
  var Authentiication = firebase.database().ref("Authentiication");
  document.getElementById('loginForm').addEventListener('Login',login)