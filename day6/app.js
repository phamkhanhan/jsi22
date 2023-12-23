// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAn2PIngNGKYtZ67FQSQ_Tke-pCbmv_Ltc",
    authDomain: "login-jsi22-857e1.firebaseapp.com",
    projectId: "login-jsi22-857e1",
    storageBucket: "login-jsi22-857e1.appspot.com",
    messagingSenderId: "355016064969",
    appId: "1:355016064969:web:2e2a853b04dc847e5b3218",
    measurementId: "G-JKNQ55410B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth()


let username_login = document.getElementById("username_input_login")
let password_login = document.getElementById("password_input_login")
let username_register = document.getElementById("username_input_register")
let password_register = document.getElementById("password_input_register")
let login_btn = document.getElementById("login_btn")
let register_btn = document.getElementById("register_btn")

// dang ki 1 tai khoan
register_btn.addEventListener("click", function() {
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

    }).catch((err) => {
        const errorCode = err.code;
        const errorMess = err.message

        alert(errorMess)
    })

})

// dang nhap 1 tai khoan co san
login_btn.addEventListener("click", function(){
    let username = username_login.value;
    let password = password_login.value;

    signInWithEmailAndPassword(auth, username, password)
    .then((userCredential)=>{
        const user = userCredential.user
        let date = new Date()
        update(ref(database, "user/" + user.uid), {
            lastLogin: date

        })

        alert("dang nhap thanh cong")
        localStorage.setItem("name",username)
        window.location.href = "success.html"
    })
    .catch((err) => {
        const errorCode = err.code;
        const errorMess = err.message;
         
        alert(errorMess)
    })

    
})