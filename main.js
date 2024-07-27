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

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var num = getElementVal("num");
  var add = getElementVal("add");
  var city = getElementVal("city");

  saveMessages(name, emailid, num, add, city);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, num, add, city) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    num: num,
    add:add,
    city:city,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

function handleLogin(event) {
  event.preventDefault();
  // Implement your login logic here, e.g., validate credentials
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // For demonstration purposes, we just check if the email and password are not empty
  if (email && password) {
      alert('Login successful!');
      window.location.href = 'index.html'; // Replace with your next page URL
  } else {
      alert('Please enter your email and password.');
  }
}
