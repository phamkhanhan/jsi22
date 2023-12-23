// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHTX9PICGa9BvmJrKLWylnWx_5DkQyVYg",
  authDomain: "login-signup-8261f.firebaseapp.com",
  databaseURL: "https://login-signup-8261f-default-rtdb.firebaseio.com",
  projectId: "login-signup-8261f",
  storageBucket: "login-signup-8261f.appspot.com",
  messagingSenderId: "258781867368",
  appId: "1:258781867368:web:50a9f4c101f429dc9e3add",
  measurementId: "G-NXEQME3YY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth()



let username_register = document.getElementById("username_input_register")
let password_register = document.getElementById("password_input_register")
let register_btn = document.getElementById("register_btn")

// dang ki 1 tai khoan
register_btn.addEventListener("click", function() {
    console.log("hello");
    let username = username_register.value
    let pasword = password_register.value

    createUserWithEmailAndPassword(auth, username, pasword)
    .then((userCredential)=> {
        const user = userCredential.user;
        set(ref(database, "user/" + user.uid), {
            username:username, 
            pasword:pasword,
        })

        alert("tao tai khoan thanh cong")
        window.location.href = "signin.html"

    }).catch((err) => {
        const errorCode = err.code;
        const errorMess = err.message

        alert(errorMess)
    })

})