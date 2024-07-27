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

document.getElementById("formm").addEventListener("submit", function (e) {
    e.preventDefault();

    var email = document.getElementById("emaill").value;
    var password = document.getElementById("passwordd").value;

    // Client-side validation
    if (password.length < 6) {
        alert("Password should be at least 6 characters long.");
        return;
    }
    
    auth.signInWithEmailAndPassword(email, password)
        .then(function (userCredential) {
            // Signed in 
            var user = userCredential.user;
            console.log('User signed in:', user);
            alert("Logged in successfully");
            window.location.href = "first.html"; // Redirect to another page after sign-in
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            
            if (errorCode === 'auth/user-not-found') {
                alert("No user found with this email. Please sign up.");
            } else if (errorCode === 'auth/wrong-password') {
                alert("Incorrect password. Please try again.");
            } else if (errorCode === 'auth/invalid-email') {
                alert("The email address is badly formatted.");
            } else {
                alert("Error signing in: " + errorMessage);
            }

            console.error('Error signing in:', errorCode, errorMessage);
        });
});
