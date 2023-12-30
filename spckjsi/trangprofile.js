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

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-storage.js";
import {
  getDatabase,
  ref as dbRef,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";

var downloadURL = ""

const firebaseConfig = {
    apiKey: "AIzaSyAn2PIngNGKYtZ67FQSQ_Tke-pCbmv_Ltc",
    authDomain: "login-jsi22-857e1.firebaseapp.com",
    databaseURL: "https://login-jsi22-857e1-default-rtdb.firebaseio.com",
    projectId: "login-jsi22-857e1",
    storageBucket: "login-jsi22-857e1.appspot.com",
    messagingSenderId: "355016064969",
    appId: "1:355016064969:web:2e2a853b04dc847e5b3218",
    measurementId: "G-JKNQ55410B"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);

// const fileInput = document.getElementById("fileInput"); // Input element for file selection

input_img.addEventListener("change", async function (e) {
  const file = e.target.files[0]; // Get the selected file

  // Create a storage reference
  const storageRef = ref(storage, "images/" + file.name);

  try {
    // Upload file to Firebase Storage
    const snapshot = await uploadBytes(storageRef, file);

    // Get the download URL after successful upload
    downloadURL = await getDownloadURL(snapshot.ref);
    
    profile.style.backgroundImage = `url("${downloadURL}")`

    // Store downloadURL in Firebase Database for retrieval
    const dbImagesRef = dbRef(database, "images");
    push(dbImagesRef, {
      imageURL: downloadURL,
    });
  } catch (error) {
    // Handle any errors while uploading
    console.error(error);
  }
});

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
                img : downloadURL
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
