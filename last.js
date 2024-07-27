// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBEe675Hi0iWj1TXDOj1vtInXVOpeYBpMk",
    authDomain: "snow-3cc7b.firebaseapp.com",
    databaseURL: "https://snow-3cc7b-default-rtdb.firebaseio.com",
    projectId: "snow-3cc7b",
    storageBucket: "snow-3cc7b.appspot.com",
    messagingSenderId: "453587794824",
    appId: "1:453587794824:web:cce6632a07ef0a3ff6183d",
    measurementId: "G-PV4TQJ17L0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Firebase Authentication and get a reference to the service
  var auth = firebase.auth();
  
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passwordd = document.getElementById("passwordd").value;
  
    // Client-side validation
    if (password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return;
    }
    if(password!=passwordd){
        alert("Please Enter same password")
    }
  
    auth.createUserWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        // Signed up 
      if(password==passwordd){
        var user = userCredential.user;
        console.log('User signed up:', user);
        alert("signedup successfully");
        window.location.href="first.html"
      }
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        
        if (errorCode === 'auth/email-already-in-use') {
          alert("The email address is already in use. Please try a different email or log in if you already have an account.");
        } else if (errorCode === 'auth/weak-password') {
          alert("Password should be at least 6 characters long.");
        } else {
          alert("Error signing up: " + errorMessage);
        }
  
        console.error('Error signing up:', errorCode, errorMessage);
      });
  });
  