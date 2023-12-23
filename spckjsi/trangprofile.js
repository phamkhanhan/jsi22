// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
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







let input_img = document.getElementById("img")
let input_name = document.getElementById("username")
let input_age = document.getElementById("userage")
let input_place = document.getElementById("place")
let input_school_work = document.getElementById("school_work")
let input_description = document.getElementById("description")
let btn = document.getElementById("sendbtn")
let nguoidung = document.getElementById("nguoidung")
let age = document.getElementById("tuoi")
let place = document.getElementById("noisong")
let school_work = document.getElementById("truong")
let description = document.getElementById("mota")
let profile = document.querySelector(".profile")

// input_img.addEventListener("change", function(){
//     var file    = document.querySelector('input[type=file]').files[0];
//     var reader  = new FileReader();

//     reader.onloadend = function () {
//         console.log(reader.result);
//       profile.style.backgroundImage = `url("${reader.result}")`;
//     }

// })
// // profile.style.backgroundImage = "url(./anh/anhgai.webp)" 

// console.log(input_img.value);

input_img.onchange = function () {
    profile.style.backgroundImage = `url("${URL.createObjectURL(input_img.files[0])}")`;
    console.log(URL.createObjectURL(input_img.files[0]));
}

input_name.addEventListener("keyup", function () {

    nguoidung.innerText = input_name.value
})
input_age.addEventListener("keyup", function () {
    age.innerText = input_age.value
})
input_place.addEventListener("keyup", function () {
    place.innerText = input_place.value
})
input_school_work.addEventListener("keyup", function () {
    school_work.innerText = input_school_work.value
})
input_description.addEventListener("keyup", function () {
    console.log(input_description.value);
    description.innerText = input_description.value
})
let list_profile_from_localstrorage = JSON.parse(localStorage.getItem("profiles"))
if (list_profile_from_localstrorage == null) {
    localStorage.setItem("profiles", JSON.stringify([]))
    location.reload()
}

btn.addEventListener('click', function () {
    if (input_img.value == "" || input_name.value == "" || input_age.value == "" || input_place.value == "" || input_description.value == "") {
        alert("chua du thong tin")
    } else {


        if (checkavaliable(input_name.value, list_profile_from_localstrorage) == true) {
            alert("ten da dc su dung")
        } else {
            // var uploadTask = firebase.storage().ref('Images/'+ImgName+".png").put(files[0])
            console.log(profile.style.backgroundImage);
            list_profile_from_localstrorage.push({
                name: input_name.value,
                age: input_age.value,
                place: input_place.value,
                school_work: input_school_work.value,
                description: input_description.value,
                img : URL.createObjectURL(input_img.files[0])


            })
            localStorage.setItem("profiles", JSON.stringify(list_profile_from_localstrorage))
            alert("cap nhat tai khoan thanh cong")
            // location.reload()
        }


    }
})
function checkavaliable(username, data_profile) {
    for (let i = 0; i < data_profile.length; i++) {
        if (data_profile[i].name == username) {
            return true;

        }
        return false
    }


}
