let ten = document.getElementById("ten")
ten.innerText = localStorage.getItem("name")


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";  
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
// const auth = getAuth()

let todo_input = document.getElementById("todo_input")
let todo_btn = document.getElementById("todo_btn")
 
todo_btn.addEventListener("click", function (){
    console.log("hello");
    set(ref(database, "todolist/" + "todo_list"), {
        todo_input:todo_input.value
    })
    
})