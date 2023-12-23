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




let username_login = document.getElementById("username_input_login")
let password_login = document.getElementById("password_input_login")
let login_btn = document.getElementById("login_btn")


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
        window.location.href = "trangchu.html"
        
    })
    .catch((err) => {
        const errorCode = err.code;
        const errorMess = err.message;
         
        alert(errorMess)
    })

    
})